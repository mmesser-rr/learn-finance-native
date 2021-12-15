import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';

import SubmitButton from 'src/components/SubmitButton';
import Text from 'src/components/Text';
import TextInput from 'src/components/TextInput';

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
    <View style={styles.viewContainer}>
      <View>
        <View>
          <Text style={styles.head}>Enter your verification code</Text>
        </View>
        <View>
          <Text style={styles.description}>We sent a verification code to (333) 666 9999</Text>
        </View>
        <View>
          <TextInput
            label='Enter 6-digit Code'
            placeholder='Enter 6-digit Codee'
            changeValue={changeValue}
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
    </View>
  );
};

export default PhoneCodeVerify;
