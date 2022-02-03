import React, { useState } from 'react';
import { View } from 'react-native';

import { Text } from 'src/components/common/Texts';
import SubmitButton from 'src/components/common/SubmitButton';
import TextInput from 'src/components/common/TextInput';
import NavigationService from 'src/navigation/NavigationService';

import styles from './styles';

interface EmailCaptureProps {
  goToNextStep: () => void;
}

const EmailCapture: React.FC<EmailCaptureProps> = ({
  goToNextStep,
}) => {
  const [isValid, setIsValid] = useState(false);

  const codeChangeHandler = (value: string) => {
    const reg = /\S+@\S+\.\S+/;
    setIsValid(!!value && reg.test(value));
  };

  const onTerms = () => {
    NavigationService.navigate('Terms');
  };

  return (
    <>
      <View>
        <View>
          <Text type='Headline/Small' style={styles.head}>
            What's your email?
          </Text>
        </View>
        <View>
          <TextInput
            label='Email Address'
            placeholder='Email Address'
            onChangeText={codeChangeHandler}
          />
        </View>
      </View>
      <View>
        <View style={styles.agreementWrapper}>
          <Text type='Body/Large' style={styles.agreementText}>
            By tapping 'sign up', you consent to our {' '}
            <Text type='Body/Large' style={styles.agreementLink} onPress={onTerms}>Terms & Privacy Policy</Text>.
          </Text>
        </View>
        <SubmitButton isValid={isValid} actionLabel='Sign Up' onSubmit={goToNextStep} />
      </View>
    </>
  );
};

export default EmailCapture;
