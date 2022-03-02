import React, {useState} from 'react';
import {TextInput, View} from 'react-native';
import SubmitButton from 'src/components/common/SubmitButton';
import {Text} from 'src/components/common/Texts';
import AppLayout from 'src/components/layout/AppLayout';
import AppColors from 'src/config/colors';
import NavigationService from 'src/navigation/NavigationService';
import TopNav from 'src/components/common/TopNav';

import styles from './styles';

const TransferAmount: React.FC = () => {
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
    setIsValid(Number(txt) !== 0);
  };

  const onContinue = () => NavigationService.navigate('TransferReview');

  return (
    <AppLayout containerStyle={styles.container} viewStyle={styles.viewWrapper}>
      <View>
        <View style={styles.nav}>
          <TopNav title="Deposit" goPreviousScreen={() => {}} />
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
            />
          </View>
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

export default TransferAmount;
