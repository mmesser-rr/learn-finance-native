import React, {useState} from 'react';
import {View} from 'react-native';

import AppLayout from 'src/components/layout/AppLayout';
import NavigationService from 'src/navigation/NavigationService';
import TopNav from 'src/components/common/TopNav';
import Loading from 'src/components/common/Loading';
import ForgotPasswordRequest from './ForgotPasswordRequest';

import styles from './styles';
import Verification from './Verification';

const steps = [
  'request',
  'verification'
];

const ForgotPassword: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(steps[0]);
  const [username, setUsername] = useState('');

  const goToLogin = () => {
    NavigationService.navigate('UserLoginStack', {screen: 'UserLogin'});
  };

  return (
    <AppLayout containerStyle={styles.container} viewStyle={styles.viewWrapper}>
      <View style={styles.nav}>
        <TopNav
          title="Reset Password"
          goPreviousScreen={goToLogin}
          goCloseScreen={goToLogin}
        />
      </View>
      {step === steps[0] && (
        <ForgotPasswordRequest
          updateLoading={setLoading}
          goToNextStep={() => setStep(steps[1])}
          updateUsername={setUsername}
        />
      )}
      {step === steps[1] && (
        <Verification
          username={username}
          updateLoading={setLoading}
          goToNextStep={() => {}}
        />
      )}
      {loading && <Loading />}
    </AppLayout>
  );
};

export default ForgotPassword;
