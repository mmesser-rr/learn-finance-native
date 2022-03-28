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

import styles from './styles';

const Verification: React.FC<SignUpProps> = ({
  route,
  navigation,
}: SignUpProps) => {
  const [stepCount, setStepCount] = useState(-1);
  const [loading, setLoading] = useState(false);
  const stepName = route.params.step;

  useEffect(() => {
    const stepIndex = SignUpSteps.findIndex(s => s === stepName);
    setStepCount(stepIndex);
  }, [stepName]);

  const goToNextStep = () => {
    if (stepCount < 4) {
      navigation.navigate('SignUp', {step: SignUpSteps[stepCount + 1]});
    } else {
      navigation.navigate('SelectLevel');
    }
  };

  return (
    <AppLayout containerStyle={styles.container} viewStyle={styles.viewWrapper}>
      {stepCount === 0 && (
        <InvitationCode
          goToNextStep={goToNextStep}
          updateLoading={status => setLoading(status)}
        />
      )}
      {stepCount === 1 && <PhoneCapture goToNextStep={goToNextStep} />}
      {stepCount === 2 && (
        <CreatePassword
          goToNextStep={goToNextStep}
          updateLoading={status => setLoading(status)}
        />
      )}
      {stepCount === 3 && (
        <PhoneCodeVerify
          goToNextStep={goToNextStep}
          updateLoading={status => setLoading(status)}
        />
      )}
      {stepCount === 4 && <NameCapture goToNextStep={goToNextStep} />}
      {loading && <Loading />}
    </AppLayout>
  );
};

export default Verification;
