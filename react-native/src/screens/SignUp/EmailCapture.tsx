import React, {useState} from 'react';
import {View} from 'react-native';
import {useDispatch} from 'react-redux';

import {Text} from 'src/components/common/Texts';
import SubmitButton from 'src/components/common/SubmitButton';
import TextInput from 'src/components/common/TextInput';
import NavigationService from 'src/navigation/NavigationService';

import styles from './styles';
import {updateOnboarding} from 'src/store/actions/onboardingActions';

interface EmailCaptureProps {
  goToNextStep: () => void;
}

const EmailCapture: React.FC<EmailCaptureProps> = ({goToNextStep}) => {
  const dispatch = useDispatch();
  const [isValid, setIsValid] = useState(false);
  const [email, setEmail] = useState('');

  const codeChangeHandler = (value: string) => {
    const reg = /\S+@\S+\.\S+/;
    setIsValid(!!value && reg.test(value));
    setEmail(value);
  };

  const onTerms = () => {
    NavigationService.navigate('Terms', {fromScreen: 'EmailCapture'});
  };

  const handleSignUp = () => {
    dispatch(updateOnboarding({email}));
    goToNextStep();
  };

  return (
    <>
      <View>
        <View>
          <Text type="Headline/Small" style={styles.head}>
            What's your email?
          </Text>
        </View>
        <View>
          <TextInput
            label="Email Address"
            placeholder="Email Address"
            onChangeText={codeChangeHandler}
          />
        </View>
      </View>
      <View>
        <View style={styles.agreementWrapper}>
          <Text type="Body/Large" style={styles.agreementText}>
            By tapping 'sign up', you consent to our{' '}
            <Text
              type="Body/Large"
              style={styles.agreementLink}
              onPress={onTerms}>
              Terms & Privacy Policy
            </Text>
            .
          </Text>
        </View>
        <SubmitButton
          isValid={isValid}
          actionLabel="Sign Up"
          onSubmit={handleSignUp}
        />
      </View>
    </>
  );
};

export default EmailCapture;
