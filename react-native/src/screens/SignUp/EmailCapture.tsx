import React, {useEffect, useState} from 'react';
import {View} from 'react-native';

import {Text} from 'src/components/common/Texts';
import SubmitButton from 'src/components/common/SubmitButton';
import TextInput from 'src/components/common/TextInput';
import NavigationService from 'src/navigation/NavigationService';

import styles from './styles';
import { Auth } from 'aws-amplify';
import { useDispatch, useSelector } from 'react-redux';
import { updateOnboarding } from 'src/store/actions/onboardingActions';
import { RootState } from 'src/store/root-state';

interface EmailCaptureProps {
  password: string;
  goToNextStep: () => void;
  updateLoading: (status: boolean) => void;
}

const EmailCapture: React.FC<EmailCaptureProps> = ({password, goToNextStep, updateLoading}) => {
  const dispatch = useDispatch();
  const {mobilePhone} = useSelector((state: RootState) => state.onboardingReducer);
  const [isValid, setIsValid] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    dispatch(updateOnboarding({isSignInLink: false, step: 6}));
  }, []);

  const codeChangeHandler = (value: string) => {
    const reg = /\S+@\S+\.\S+/;
    setIsValid(!!value && reg.test(value));
    setEmail(value);
  };

  const onPrivacy = () => {
    NavigationService.navigate('Privacy');
  };

  const onAgreement = () => {
    NavigationService.navigate('Agreement');
  };

  const handleContinue = async () => {
    updateLoading(true);
    try {
      await Auth.signIn(`+1${mobilePhone}`, password);
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
    <View style={styles.contentWrapper}>
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
              onPress={onAgreement}
            >
              Mobile Deposit Agreement
            </Text>
            {' '}and{' '}
            <Text
              type="Body/Large"
              style={styles.agreementLink}
              onPress={onPrivacy}
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
    </View>
  );
};

export default EmailCapture;
