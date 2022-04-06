import React, {useMemo, useState} from 'react';
import {TextInput, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import styles from './styles';
import SubmitButton from 'src/components/common/SubmitButton';
import {Text} from 'src/components/common/Texts';
import AppLayout from 'src/components/layout/AppLayout';
import AppColors from 'src/config/colors';
import NavigationService from 'src/navigation/NavigationService';
import TopNav from 'src/components/common/TopNav';
import {wyreWithdrawAmountEntered} from 'src/store/actions/wyreActions';
import {wyreAccountBalanceSelector} from 'src/store/selectors/wyre';

const WithdrawAmount: React.FC = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('0.00');
  const [isValid, setIsValid] = useState(false);

  const balance = useSelector(wyreAccountBalanceSelector);

  const textChangeHandler = (txt: string) => {
    if (!txt) {
      setValue('0.00');
    }

    const decimalIndex = txt.indexOf('.');
    setValue(
      decimalIndex >= 0
        ? txt.slice(0, decimalIndex) + txt.slice(decimalIndex, decimalIndex + 3)
        : txt,
    );
    setIsValid(Number(txt) > 0 && Number(txt) <= Number(balance));
  };

  const onContinue = () => {
    dispatch(wyreWithdrawAmountEntered(value));
    NavigationService.navigate('WithdrawReview');
  };
  const goPreviousScreen = () => NavigationService.goBack();
  const closeScreen = () =>
    NavigationService.navigate('HomeStack', {screen: 'Home'});

  return (
    <AppLayout containerStyle={styles.container} viewStyle={styles.viewWrapper}>
      <View>
        <View style={styles.nav}>
          <TopNav
            title="Withdraw"
            goPreviousScreen={goPreviousScreen}
            goCloseScreen={closeScreen}
          />
        </View>
        <View>
          <Text type="Body/Large" style={styles.body}>
            Choose how much you want to withdraw:
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            <Text type="Display/Small">$</Text>
            <TextInput
              keyboardType="decimal-pad"
              value={value}
              style={styles.input}
              autoFocus={true}
              selectionColor={AppColors.accentRed100}
              onChangeText={text => textChangeHandler(text)}
            />
          </View>
        </View>
        <View style={styles.available}>
          <Text type="Title/Medium" style={styles.availableText}>
            available to withdraw
          </Text>
          <Text type="Title/Medium" style={styles.availableText}>
            {balance} USDC · approx. {balance} USD
          </Text>
        </View>
        <View style={styles.error}>
          {Number(value) > Number(balance) && (
            <Text type="Body/Medium" style={styles.errorText}>
              The Rewards account lacks sufficient funds.
            </Text>
          )}
        </View>
      </View>
      <View>
        <SubmitButton
          isValid={isValid}
          actionLabel="Continue"
          onSubmit={onContinue}
        />
      </View>
    </AppLayout>
  );
};

export default WithdrawAmount;
