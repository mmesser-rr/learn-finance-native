import React, {useState} from 'react';
import {View} from 'react-native';

import AppLayout from 'src/components/layout/AppLayout';
import NavigationService from 'src/navigation/NavigationService';
import TopNav from 'src/components/common/TopNav';
import Loading from 'src/components/common/Loading';
import ForgotPasswordRequest from './ForgotPasswordRequest';
import Verification from './Verification';
import CaptureSSN from './CaptureSSN';
import ResetPassword from './ResetPassword';

import styles from './styles';

const steps = [
  'request',
  'verification',
  'ssn',
  'reset_password'
];

const ForgotPassword: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [isPhoneVerification, setIsPhoneVerification] = useState(true);
  const [step, setStep] = useState(steps[0]);
  const [username, setUsername] = useState('');
  const [code, setCode] = useState('');
  const [ssn, setSsn] = useState('');

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
          updatePhoneVerification={setIsPhoneVerification}
        />
      )}
      {step === steps[1] && (
        <Verification
          username={username}
          isPhoneVerification={isPhoneVerification}
          updateLoading={setLoading}
          updateCode={setCode}
          goToNextStep={() => setStep(steps[2])}
        />
      )}
      {step === steps[2] && (
        <CaptureSSN
          updateLoading={setLoading}
          updateSSN={setSsn}
          goToNextStep={() => setStep(steps[3])}
        />
      )}
      {step === steps[3] && (
        <ResetPassword
          username={username}
          code={code}
          isPhoneVerification={isPhoneVerification}
          updateLoading={setLoading}
          goToNextStep={() => goToLogin()}
        />
      )}
      {loading && <Loading />}
    </AppLayout>
  );
};

export default ForgotPassword;
