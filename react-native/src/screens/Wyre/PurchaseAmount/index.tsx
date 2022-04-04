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
import {investmentsAccountBalanceSelector} from 'src/store/selectors/banking';
import {getWyreTransactionFee, twoDecimalFormatter} from 'src/utils/functions';
import {wyrePurchaseAmountEntered} from 'src/store/actions/wyreActions';

const PurchaseAmount: React.FC = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('0.00');
  const [isValid, setIsValid] = useState(false);

  const podBalance = useSelector(investmentsAccountBalanceSelector);

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
    setIsValid(Number(txt) > 0 && Number(txt) <= Number(podBalance));
  };

  const calculatedValues = useMemo(() => {
    const numericValue = Number(value);
    const initialValue = numericValue - getWyreTransactionFee(numericValue);
    const projectedValue = initialValue * (1 + 0.07);
    const projectedRewards = projectedValue - initialValue;
    return {
      numericValue,
      projectedRewards:
        projectedRewards > 0
          ? twoDecimalFormatter.format(projectedRewards)
          : '0.00',
    };
  }, [value]);

  const onContinue = () => {
    dispatch(wyrePurchaseAmountEntered(value));
    NavigationService.navigate('PurchaseReview');
  };
  const goPreviousScreen = () =>
    NavigationService.navigate('HomeStack', {screen: 'Home'});
  const goCloseScreen = () =>
    NavigationService.navigate('HomeStack', {screen: 'Home'});

  return (
    <AppLayout containerStyle={styles.container} viewStyle={styles.viewWrapper}>
      <View>
        <View style={styles.nav}>
          <TopNav
            title="Purchase"
            goPreviousScreen={goPreviousScreen}
            goCloseScreen={goCloseScreen}
          />
        </View>
        <View>
          <Text type="Body/Large" style={styles.body}>
            Choose how much you want to invest:
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
            available to invest ${podBalance}
          </Text>
        </View>
        <View style={styles.error}>
          {Number(value) > Number(podBalance) && (
            <Text type="Body/Medium" style={styles.errorText}>
              The Rewards account lacks sufficient funds.
            </Text>
          )}
        </View>
      </View>
      <View style={styles.projectionBox}>
        <Text type="Body/Medium">Projected 1 year rewards with 7.00% APY</Text>
        <Text type="Title/Small">
          {calculatedValues.projectedRewards} USDC · approx.{' '}
          {calculatedValues.projectedRewards} USD
        </Text>
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

export default PurchaseAmount;
