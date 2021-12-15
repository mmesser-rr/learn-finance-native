import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';

import SubmitButton from 'src/components/SubmitButton';
import Text from 'src/components/Text';
import TextInput from 'src/components/TextInput';

import styles from './styles';

interface EmailCaptureProps {
  goToNextStep: () => void;
}

const EmailCapture: React.FC<EmailCaptureProps> = ({
  goToNextStep,
}) => {
  const [isValid, setIsValid] = useState(false);

  const codeChangeHandler = (value: string) => {
    setIsValid(!!value);
  };

  return (
    <View style={styles.viewContainer}>
      <View>
        <View>
          <Text style={styles.head}>What's your email?</Text>
        </View>
        <View>
          <TextInput
            label='Email Address'
            placeholder='Email Address'
            changeValue={codeChangeHandler}
          />
        </View>
      </View>
      <View>
        <View style={styles.agreementWrapper}>
          <Text style={styles.agreementText}>
            By tapping 'sign up', you agree to our{' '}
            <Text style={styles.agreementLink}>e-sign content, Mobile Deposit Agreement</Text>
            , and{' '}
            <Text style={styles.agreementLink}>Players Co's Terms</Text>
            {' '}&{' '} 
            <Text style={styles.agreementLink}>Privacy Policy</Text>
            .
          </Text>
        </View>
        <SubmitButton isValid={isValid} actionLabel='Sign Up' onSubmit={goToNextStep} />
      </View>
    </View>
  );
};

export default EmailCapture;
