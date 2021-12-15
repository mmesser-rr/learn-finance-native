import React, { useState } from 'react';
import { View } from 'react-native';

import Text from 'src/components/Text';
import PhoneInput from 'src/components/PhoneInput';
import SubmitButton from 'src/components/SubmitButton';

import styles from './styles';

interface PhoneCaptureProps {
  goToNextStep: () => void;
}

const PhoneCapture: React.FC<PhoneCaptureProps> = ({
  goToNextStep,
}) => {
  const [isValid, setIsValid] = useState(false);

  const changeValue = (value: string) => {
    setIsValid(value.length === 10);
  };

  return (
    <View style={styles.viewContainer}>
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
        </View>
      </View>
      <View>
        <SubmitButton isValid={isValid} actionLabel='Continue' onSubmit={goToNextStep} />
      </View>
    </View>
  );
};

export default PhoneCapture;
