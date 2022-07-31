import React, {useEffect, useState} from 'react';

import {SignUpProps} from 'src/types/routerTypes';
import {SignUpSteps} from 'src/utils/constants';
import AppLayout from 'src/components/layout/AppLayout';
import InvitationCode from './InvitationCode';
import PhoneCapture from './PhoneCapture';
import PhoneCodeVerify from './PhoneCodeVerify';
import NameCapture from './NameCapture';
import Loading from 'src/components/common/Loading';
import CreatePassword from './CreatePassword';
import EmailCapture from './EmailCapture';
import DOBCapture from './DOBCapture';

import styles from './styles';
import OnboardingSteps from 'src/components/common/OnboardingSteps';
import { View } from 'react-native';

const Verification: React.FC<SignUpProps> = ({
  route,
  navigation,
}: SignUpProps) => {
  const [stepCount, setStepCount] = useState(-1);
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState('');

  const stepName = route.params.step;

  useEffect(() => {
    const stepIndex = SignUpSteps.findIndex(s => s === stepName);
    setStepCount(stepIndex);
  }, [stepName]);

  const goToNextStep = () => {
    if (stepCount < 7) {
      navigation.navigate('SignUp', {step: SignUpSteps[stepCount + 1]});
    } else {
      navigation.navigate('Opportunities');
    }
  };

  return (
    <AppLayout containerStyle={styles.container} viewStyle={styles.viewWrapper}>
      <View>
        <OnboardingSteps />
      </View>
      {stepCount === 0 && (
        <InvitationCode
          goToNextStep={goToNextStep}
          updateLoading={setLoading}
        />
      )}
      {stepCount === 1 && (
        <PhoneCapture
          goToNextStep={goToNextStep}
        />
      )}
      {stepCount === 2 && (
        <CreatePassword
          goToNextStep={goToNextStep}
          updateLoading={setLoading}
          updatePassword={setPassword}
        />
      )}
      {stepCount === 3 && (
        <PhoneCodeVerify
          goToNextStep={goToNextStep}
          updateLoading={setLoading}
        />
      )}
      {stepCount === 4 && <NameCapture goToNextStep={goToNextStep} />}
      {stepCount === 5 && (
        <EmailCapture password={password} goToNextStep={goToNextStep} updateLoading={setLoading} />
      )}
      {stepCount === 6 && <DOBCapture />}
      {loading && <Loading />}
    </AppLayout>
  );
};

export default Verification;
