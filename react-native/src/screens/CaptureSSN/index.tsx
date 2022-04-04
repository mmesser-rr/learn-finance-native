import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {Text} from 'src/components/common/Texts';
import SubmitButton from 'src/components/common/SubmitButton';
import AppLayout from 'src/components/layout/AppLayout';
import TextInputMask from 'src/components/common/TextInputMask';
import {
  createAthleteAndAccount,
  updateOnboarding,
} from 'src/store/actions/onboardingActions';
import Loading from 'src/components/common/Loading';
import {RootState} from 'src/store/root-state';
import OnboardingSteps from 'src/components/common/OnboardingSteps';

import styles from './styles';

const label = 'SSN (xxx-xx-xxxx)';

const CaptureSSN: React.FC = () => {
  const dispatch = useDispatch();
  const [ssn, setSsn] = useState('');
  const [isValid, setIsValid] = useState(false);
  const {isLoading} = useSelector((state: RootState) => state.loadingReducer);

  useEffect(() => {
    dispatch(updateOnboarding({isSignInLink: false, step: 9}));
  }, []);

  const changeValue = (value: string) => {
    setIsValid(value.length === 9);
    setSsn(value);
  };

  const goToNextStep = () => {
    dispatch(updateOnboarding({ssn}));
    dispatch(createAthleteAndAccount(ssn));
  };

  return (
    <AppLayout containerStyle={styles.container} viewStyle={styles.viewWrapper}>
      <View>
        <View>
          <OnboardingSteps />
        </View>
        <View>
          <Text type="Headline/Small" style={styles.head}>
            What's your Social Security number?
          </Text>
        </View>
        <View>
          <TextInputMask
            label={label}
            mask="[000]-[00]-[0000]"
            autoFocus
            isSecure
            keyboardType="number-pad"
            changeValue={changeValue}
          />
        </View>
      </View>
      <View>
        <SubmitButton
          isValid={isValid}
          actionLabel="Continue"
          onSubmit={goToNextStep}
        />
      </View>
      {isLoading && <Loading />}
    </AppLayout>
  );
};

export default CaptureSSN;
