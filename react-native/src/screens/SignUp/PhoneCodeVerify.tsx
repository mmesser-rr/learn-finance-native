import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';

import SubmitButton from 'src/components/common/SubmitButton';
import TextInput from 'src/components/common/TextInput';
import { Caption, Title, Text } from 'src/components/common/Texts';

import styles from './styles';

interface PhoneCodeVerifyProps {
  goToNextStep: () => void;
}

const PhoneCodeVerify: React.FC<PhoneCodeVerifyProps> = ({
  goToNextStep,
}) => {
  const [isValid, setIsValid] = useState(false);

  const changeValue = (value: string) => {
    setIsValid(value.length === 6);
  };

  return (
    <>
      <View>
        <View>
          <Title style={styles.head}>Enter your verification code</Title>
        </View>
        <View>
          <Caption style={styles.description}>We sent a verification code to (333) 666 9999</Caption>
        </View>
        <View>
          <TextInput
            label='Enter 6-digit Code'
            placeholder='Enter 6-digit Codee'
            maxLength={6}
            isNumeric
            autoFocus
            keyboardType='number-pad'
            onChangeText={changeValue}
          />
        </View>
        <View>
          <TouchableOpacity style={styles.askAction} onPress={() => {}}>
            <Text style={styles.askActionLabel}>Resend code</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <SubmitButton isValid={isValid} actionLabel='Verify Code' onSubmit={goToNextStep} />
      </View>
    </>
  );
};

export default PhoneCodeVerify;
