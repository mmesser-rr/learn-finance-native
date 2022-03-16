import React, {useState} from 'react';
import {TextInput, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import SubmitButton from 'src/components/common/SubmitButton';
import {Text} from 'src/components/common/Texts';
import TopNav from 'src/components/common/TopNav';
import AppLayout from 'src/components/layout/AppLayout';
import AppColors from 'src/config/colors';
import NavigationService from 'src/navigation/NavigationService';
import * as bankingActions from 'src/store/actions/bankingActions';
import {RootState} from 'src/store/root-state';

import styles from './styles';

const TransferAmount: React.FC = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('0.00');
  const [isValid, setIsValid] = useState(false);
  const [exceedsAvailable, setExceedsAvailable] = useState(false);
  const {selectedAccount} = useSelector(
    (state: RootState) => state.bankingReducer,
  );

  const textChangeHandler = (txt: string) => {
    if (!txt) {
      setValue('0.00');
    }

    const decimalIndex = txt.indexOf('.');
    const newValue =
      decimalIndex >= 0
        ? txt.slice(0, decimalIndex) + txt.slice(decimalIndex, decimalIndex + 3)
        : txt;
    setValue(newValue);

    const exceeds = +newValue > (selectedAccount?.balances?.available ?? 0);
    setExceedsAvailable(exceeds);
    setIsValid(Number(txt) !== 0 && !exceeds);
  };

  const onContinue = () => {
    dispatch(bankingActions.transferAmountEntered(value));
    NavigationService.navigate('TransferReview');
  };
  const goPreviousScreen = () => NavigationService.navigate('PodSelectAccount');
  const goCloseScreen = () => NavigationService.navigate('HomeStack');

  return (
    <AppLayout containerStyle={styles.container} viewStyle={styles.viewWrapper}>
      <View>
        <View style={styles.nav}>
          <TopNav
            title="Deposit"
            goPreviousScreen={goPreviousScreen}
            goCloseScreen={goCloseScreen}
          />
        </View>
        <View>
          <Text type="Body/Large" style={styles.body}>
            Let's get some money into your Players Co. account. Choose how much
            you want to transfer:
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
              placeholder="0.00"
            />
          </View>
        </View>
        {exceedsAvailable && (
          <View style={styles.errorWrapper}>
            <Text type="Body/Medium" style={styles.error}>
              Transfer amount may not exceed the amount available in this
              account (${selectedAccount?.balances?.available ?? 0}).
            </Text>
          </View>
        )}
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

export default TransferAmount;
