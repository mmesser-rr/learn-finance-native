import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import dayjs from 'dayjs';
import {useDispatch} from 'react-redux';

import {Text} from 'src/components/common/Texts';
import SubmitButton from 'src/components/common/SubmitButton';
import AppLayout from 'src/components/layout/AppLayout';
import TextInputMask from 'src/components/common/TextInputMask';
import NavigationService from 'src/navigation/NavigationService';
import {validateDOB} from 'src/utils/validation';
import {calculateContentHeight} from 'src/utils/functions';

import styles from './styles';
import {updateOnboarding} from 'src/store/actions/onboardingActions';

const CaptureDOB: React.FC = () => {
  const dispatch = useDispatch();
  const [isValid, setIsValid] = useState(false);
  const [dateOfBirthString, setDateOfBirthString] = useState('');
  const [isError, setError] = useState(false);
  const [safeviewHeight, SetSafeviewHeight] = useState(0);

  useEffect(() => {
    async function getContentHeight() {
      SetSafeviewHeight(await calculateContentHeight());
    }

    getContentHeight();
  }, []);

  const changeValue = (value: string) => {
    let valid = validateDOB(value);

    if (value.length === 8) {
      const date = `${value.substring(0, 2)}/${value.substring(
        2,
        4,
      )}/${value.substring(4, 8)}`;
      valid = dayjs(date).isBefore(dayjs().subtract(18, 'year'));
      setError(!valid);
    }

    setIsValid(valid);
    if (valid) {
      setDateOfBirthString(value);
    }
  };

  const goToNextStep = () => {
    const year = dateOfBirthString.slice(-4);
    const month = dateOfBirthString.slice(0, 2);
    const day = dateOfBirthString.slice(2, 4);
    const dateOfBirth = year + '-' + month + '-' + day;
    dispatch(updateOnboarding({dateOfBirth}));
    NavigationService.navigate('CaptureAddress');
  };

  return (
    <AppLayout containerStyle={styles.container}>
      <View style={{height: safeviewHeight / 2}}>
        <View>
          <Text type="Headline/Small" style={styles.head}>
            What's your date of birth?
          </Text>
        </View>
        <View>
          <TextInputMask
            label="Date of Birth (mm/dd/yyyy)"
            mask="[00]/[00]/[0000]"
            autoFocus
            keyboardType="number-pad"
            error={
              isError
                ? 'You must be 18 years or older to open a checking account in your name only. Please come back later.'
                : ''
            }
            changeValue={changeValue}
          />
        </View>
      </View>
      <View style={styles.actionWrapper}>
        <SubmitButton
          isValid={isValid}
          actionLabel="Continue"
          style={styles.submit}
          onSubmit={goToNextStep}
        />
      </View>
    </AppLayout>
  );
};

export default CaptureDOB;
