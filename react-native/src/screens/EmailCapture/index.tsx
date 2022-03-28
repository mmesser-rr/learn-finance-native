import React, {useState} from 'react';
import {View} from 'react-native';
import {useDispatch} from 'react-redux';
import { Auth } from 'aws-amplify';

import {Text} from 'src/components/common/Texts';
import SubmitButton from 'src/components/common/SubmitButton';
import TextInput from 'src/components/common/TextInput';
import NavigationService from 'src/navigation/NavigationService';
import {updateOnboarding} from 'src/store/actions/onboardingActions';
import AppLayout from 'src/components/layout/AppLayout';
import Loading from 'src/components/common/Loading';

import styles from './styles';

const EmailCapture: React.FC = () => {
  const dispatch = useDispatch();
  const [isValid, setIsValid] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');

  const codeChangeHandler = (value: string) => {
    const reg = /\S+@\S+\.\S+/;
    setIsValid(!!value && reg.test(value));
    setEmail(value);
  };

  const handleContinue = async () => {
    setLoading(true);
    try {
      const user = await Auth.currentAuthenticatedUser();
       await Auth.updateUserAttributes(user, {
        email
      });
      dispatch(updateOnboarding({email}));
      NavigationService.navigate('VerifyEmailCode');
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <AppLayout containerStyle={styles.container} viewStyle={styles.viewWrapper}>
      <View>
        <View>
          <Text type="Headline/Small" style={styles.head}>
            What's your email?
          </Text>
        </View>
        <View>
          <Text type="Body/Large" style={styles.description}>
            We'll send a verification code to your email.
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
        <SubmitButton
          isValid={isValid}
          actionLabel="Continue"
          onSubmit={handleContinue}
        />
      </View>
      {loading && <Loading />}
    </AppLayout>
  );
};

export default EmailCapture;
