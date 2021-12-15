import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';

import { SignUpProps } from 'src/types/routerTypes';
import InvitationCode from './InvitationCode';
import PhoneCapture from './PhoneCapture';
import PhoneCodeVerify from './PhoneCodeVerify';
import NameCapture from './NameCapture';
import EmailCapture from './EmailCapture';
import { SignUpSteps } from 'src/utils/constants';

import styles from './styles';

const Verification: React.FC<SignUpProps> = ({ route, navigation }: SignUpProps) => {
  const [stepCount, setStepCount] = useState(-1);
  const stepName = route.params.step;

  useEffect(() => {
    const stepIndex = SignUpSteps.findIndex(s => s === stepName);
    setStepCount(stepIndex);
  }, [stepName]);

  const goToNextStep = () => {
    if (stepCount < 5) {
      navigation.navigate('SignUp', { step: SignUpSteps[stepCount + 1] });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {stepCount === 0 && (<InvitationCode goToNextStep={goToNextStep} />)}
      {stepCount === 1 && (<PhoneCapture goToNextStep={goToNextStep} />)}
      {stepCount === 2 && (<PhoneCodeVerify goToNextStep={goToNextStep} />)}
      {stepCount === 3 && (<NameCapture goToNextStep={goToNextStep} />)}
      {stepCount === 4 && (<EmailCapture goToNextStep={goToNextStep} />)}
    </SafeAreaView>
  );
};

export default Verification;
