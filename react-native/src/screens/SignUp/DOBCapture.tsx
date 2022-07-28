import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import dayjs from 'dayjs';
import {useDispatch} from 'react-redux';

import {Text} from 'src/components/common/Texts';
import SubmitButton from 'src/components/common/SubmitButton';
import TextInputMask from 'src/components/common/TextInputMask';
import {validateDOB} from 'src/utils/validation';
import {createAthlete, updateOnboarding} from 'src/store/actions/onboardingActions';
import NavigationService from 'src/navigation/NavigationService';

import styles from './styles';

const DOBCapture: React.FC = () => {
  const dispatch = useDispatch();
  const [isValid, setIsValid] = useState(false);
  const [dateOfBirthString, setDateOfBirthString] = useState('');
  const [isError, setError] = useState(false);

  useEffect(() => {
    dispatch(updateOnboarding({isSignInLink: false, step: 7}));
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

  const onPrivacy = () => {
    NavigationService.navigate('Privacy');
  };

  const onAgreement = () => {
    NavigationService.navigate('Agreement');
  };

  const handleSubmit = () => {
    const year = dateOfBirthString.slice(-4);
    const month = dateOfBirthString.slice(0, 2);
    const day = dateOfBirthString.slice(2, 4);
    const dateOfBirth = year + '-' + month + '-' + day;
    dispatch(updateOnboarding({dateOfBirth}));
    dispatch(createAthlete())
  };

  return (
    <View style={styles.contentWrapper}>
      <View>
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
          actionLabel="Continue"
          onSubmit={handleSubmit}
        />
      </View>
    </View>
  );
};

export default DOBCapture;
