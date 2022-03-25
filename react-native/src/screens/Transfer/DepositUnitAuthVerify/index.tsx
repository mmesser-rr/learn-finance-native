import React, {useCallback, useState} from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useFocusEffect} from '@react-navigation/native';

import SubmitButton from 'src/components/common/SubmitButton';
import {Text} from 'src/components/common/Texts';
import AppLayout from 'src/components/layout/AppLayout';
import TopNav from 'src/components/common/TopNav';
import Loading from 'src/components/common/Loading';
import {RootState} from 'src/store/root-state';
import * as bankingActions from 'src/store/actions/bankingActions';
import NavigationService from 'src/navigation/NavigationService';
import TextInput from 'src/components/common/TextInput';
import Alert from 'src/components/common/Alert';
import SuccessIcon from 'src/assets/icons/account-creation-success.svg';

import styles from './styles';

const DepositUnitAuthVerify: React.FC = () => {
  const dispatch = useDispatch();
  const {isLoading} = useSelector((state: RootState) => state.loadingReducer);
  const phoneNumber = useSelector((state: RootState) => {
    const mobilePhone = state.userReducer.user!.mobilePhone!;
    const firstThree = mobilePhone.slice(2, 5);
    const secondThree = mobilePhone.slice(5, 8);
    const lastFour = mobilePhone.slice(-4);
    return `(${firstThree}) ${secondThree} ${lastFour}`;
  });
  const {unitVerificationCodeValid} = useSelector(
    (state: RootState) => state.bankingReducer,
  );

  // when screen loses focus, reset the the code validity to undefined
  useFocusEffect(
    useCallback(() => {
      return () => {
        dispatch(bankingActions.setUnitVerificationCodeValidity(undefined));
      };
    }, []),
  );

  const changeValue = (value: string) => {
    if (value.length === 6) {
      dispatch(bankingActions.verifyUnitChallengeCode(value));
    }
  };

  const handleSubmit = () => {
    dispatch(bankingActions.createDeposit());
  };

  const goBack = () => NavigationService.goBack();

  return (
    <AppLayout containerStyle={styles.container} viewStyle={styles.viewWrapper}>
      <View style={styles.nav}>
        <TopNav title="Verify it's you" goPreviousScreen={goBack} />
      </View>
      <View>
        <View>
          <Text type="Headline/Small" style={styles.head}>
            Enter your verification code
          </Text>
        </View>
        <View>
          <Text type="Body/Large" style={styles.description}>
            Before we create your transaction, we need to confirm your identity.
            We sent a verification code to {phoneNumber}.
          </Text>
        </View>
        <View>
          <TextInput
            label="Enter 6-digit Code"
            maxLength={6}
            autoFocus
            onChangeText={changeValue}
            editable={!unitVerificationCodeValid}
            keyboardType="number-pad"
          />
          {unitVerificationCodeValid === false && (
            <Alert>This code is not valid</Alert>
          )}
          {unitVerificationCodeValid === true && (
            <View style={styles.helperContainer}>
              <SuccessIcon style={styles.helperIcon} width="18" height="18" />
              <Text type="Body/Medium" style={styles.helperText}>
                Code verified
              </Text>
            </View>
          )}
        </View>
      </View>
      <View>
        <SubmitButton
          isValid={!!unitVerificationCodeValid}
          actionLabel="Complete Deposit"
          onSubmit={handleSubmit}
        />
      </View>
      {isLoading && <Loading />}
    </AppLayout>
  );
};

export default DepositUnitAuthVerify;
