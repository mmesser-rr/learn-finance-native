import React, { useState } from 'react';
import { View } from 'react-native';
import { Text, Title } from 'src/components/common/Texts';

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
          <Title style={styles.head}>What's your email?</Title>
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
          <Text style={styles.agreementText}>
            By tapping 'sign up', you consent to our {' '}
            <Text style={styles.agreementLink} onPress={onTerms}>Terms & Privacy Policy</Text>.
          </Text>
        </View>
        <SubmitButton isValid={isValid} actionLabel='Sign Up' onSubmit={goToNextStep} />
      </View>
    </>
  );
};

export default EmailCapture;
