import React, {useState} from 'react';
import {View} from 'react-native';

import {Text} from 'src/components/common/Texts';
import SubmitButton from 'src/components/common/SubmitButton';
import TextInput from 'src/components/common/TextInput';
import NavigationService from 'src/navigation/NavigationService';

import styles from './styles';
import { Auth } from 'aws-amplify';
import { useDispatch } from 'react-redux';
import { updateOnboarding } from 'src/store/actions/onboardingActions';

interface EmailCaptureProps {
  goToNextStep: () => void;
  updateLoading: (status: boolean) => void;
}

const EmailCapture: React.FC<EmailCaptureProps> = ({goToNextStep, updateLoading}) => {
  const dispatch = useDispatch();
  const [isValid, setIsValid] = useState(false);
  const [email, setEmail] = useState('');

  const codeChangeHandler = (value: string) => {
    const reg = /\S+@\S+\.\S+/;
    setIsValid(!!value && reg.test(value));
    setEmail(value);
  };

  const onTerms = () => {
    NavigationService.navigate('Terms');
  };

  const handleContinue = async () => {
    updateLoading(true);
    try {
      const user = await Auth.currentAuthenticatedUser();
      await Auth.updateUserAttributes(user, {
        email
      });
      dispatch(updateOnboarding({email}));
      goToNextStep();
    } catch (error) {
      console.log(error);
    }
    updateLoading(false);
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
          <Text type="Body/Large" style={styles.description}>
            Your email will be used to restore access to your account.
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
            By tapping 'sign up', you agree to our{' '}
            <Text
              type="Body/Large"
              style={styles.agreementLink}
              onPress={onTerms}
            >
              Mobile Deposit Agreement
            </Text>
            {' '}and{' '}
            <Text
              type="Body/Large"
              style={styles.agreementLink}
              onPress={onTerms}
            >
              Players Co's Terms & Privacy Policy
            </Text>
            .
          </Text>
        </View>
        <SubmitButton
          isValid={isValid}
          actionLabel="Sign Up"
          onSubmit={handleContinue}
        />
      </View>
    </>
  );
};

export default EmailCapture;
