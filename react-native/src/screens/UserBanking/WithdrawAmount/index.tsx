import React, {useState} from 'react';
import {TextInput, View} from 'react-native';
import SubmitButton from 'src/components/common/SubmitButton';
import {Text} from 'src/components/common/Texts';
import AppLayout from 'src/components/layout/AppLayout';
import AppColors from 'src/config/colors';
import NavigationService from 'src/navigation/NavigationService';
import TopNav from 'src/components/common/TopNav';

import styles from './styles';

const WithdrawAmount: React.FC = () => {
  const [value, setValue] = useState('0.00');
  const [isValid, setIsValid] = useState(false);

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
    setIsValid(Number(txt) !== 0 && Number(txt) <= 100);
  };

  const onContinue = () => NavigationService.navigate('UserBankingStack', {screen: 'WithdrawReview'});
  const goPreviousScreen = () => NavigationService.navigate('UserBankingStack', {screen: 'WithdrawDetails'});
  const goCloseScreen = () => {};

  return (
    <AppLayout containerStyle={styles.container} viewStyle={styles.viewWrapper}>
      <View>
        <View style={styles.nav}>
          <TopNav title="Withdraw" goPreviousScreen={goPreviousScreen} goCloseScreen={goCloseScreen} />
        </View>
        <View>
          <Text type="Body/Large" style={styles.body}>
            Choose how much you want to withdraw.
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
            Available to withdraw in Spending Pod: $100.00
          </Text>
        </View>
        <View style={styles.error}>
          {Number(value) > 100 && (
            <Text type="Body/Medium" style={styles.errorText}>
              The Spending Pod lacks sufficient funds. Please move money between Pods to the Spending Pod first.
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
