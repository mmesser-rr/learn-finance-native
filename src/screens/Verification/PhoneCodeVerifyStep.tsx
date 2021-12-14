import React from 'react';
import { View, TouchableOpacity } from 'react-native';

import Text from 'src/components/Text';
import TextInput from 'src/components/TextInput';

import styles from './styles';

interface PhoneCodeVerifyStepProps {
  changeValidation: (status: boolean) => void
}

const PhoneCodeVerifyStep: React.FC<PhoneCodeVerifyStepProps> = ({
  changeValidation,
}) => {
  const changeValue = (value: string) => {
    changeValidation(value.length === 6);
  };

  return (
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
  );
};

export default PhoneCodeVerifyStep;
