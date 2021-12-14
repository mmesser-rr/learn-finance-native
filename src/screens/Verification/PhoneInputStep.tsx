import React from 'react';
import { View, TouchableOpacity } from 'react-native';

import Text from 'src/components/Text';
import PhoneInput from 'src/components/PhoneInput';

import styles from './styles';

interface PhoneInputStepProps {
  changeValidation: (status: boolean) => void
}

const PhoneInputStep: React.FC<PhoneInputStepProps> = ({
  changeValidation,
}) => {
  const changeValue = (value: string) => {
    changeValidation(value.length === 10);
  };

  return (
    <View>
      <View>
        <View>
          <Text style={styles.head}>To continue, verify your phone number</Text>
        </View>
        <View>
          <Text style={styles.description}>We'll text a verification code to this number.</Text>
        </View>
        <View>
          <PhoneInput
            label='Phone Number'
            changeValue={changeValue}
          />
        </View>
        <View>
          <TouchableOpacity style={styles.askAction} onPress={() => {}}>
            <Text style={styles.askActionLabel}>Resend code</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PhoneInputStep;
