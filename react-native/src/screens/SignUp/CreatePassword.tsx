import React, {useState} from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Auth} from 'aws-amplify';

import TextInputMask from 'src/components/common/TextInputMask';
import SubmitButton from 'src/components/common/SubmitButton';
import {Text} from 'src/components/common/Texts';
import {updateOnboarding} from 'src/store/actions/onboardingActions';
import TextInput from 'src/components/common/TextInput';
import UnCheckIcon from 'src/assets/icons/uncheck.svg';
import CheckedIcon from 'src/assets/icons/checked.svg';

import styles from './styles';
import { RootState } from 'src/store/root-state';
import Alert from 'src/components/common/Alert';

interface CreatePasswordProps {
  goToNextStep: () => void;
  updateLoading: (status: boolean) => void;
}

const CreatePassword: React.FC<CreatePasswordProps> = ({
  goToNextStep,
  updateLoading
}) => {
  const dispatch = useDispatch();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [contains816C, setContains816C] = useState(false); // 8-16 characters
  const [containsUL, setContainsUL] = useState(false) // uppercase and lowercase letter
  const [containsN, setContainsN] = useState(false) // number
  const [containsSC, setContainsSC] = useState(false) // special character
  const {mobilePhone} = useSelector((state: RootState) => state.onboardingReducer);

  const rules = [
    ['8-16 characters', contains816C],
    ['Upper and lower cases', containsUL],
    ['Numbers', containsN],
    ['Special characters (! @ # $ % ^ & *)', containsSC]
  ];

  const validatePassword = (value: string) => {
    let valid = true;
    // check 8-16 characters
    if (value.length >= 8 && value.length <= 16) {
      setContains816C(true);
    } else {
      setContains816C(false);

      if (valid) {
        valid = false;
      }
    }

    // check uppercase and letter
    if (value.toLowerCase() !== value && value.toUpperCase() !== value) {
      setContainsUL(true);
    } else {
      setContainsUL(false);

      if (valid) {
        valid = false;
      }
    }

    // check number
    if (/\d/.test(value)) {
      setContainsN(true);
    } else {
      setContainsN(false);

      if (valid) {
        valid = false;
      }
    }

    // check special character
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (specialChars.test(value)) {
      setContainsSC(true);
    } else {
      setContainsSC(false);

      if (valid) {
        valid = false;
      }
    }

    return valid;
  };

  const changePassword = (value: string) => {
    setIsValid(validatePassword(value));
    setPassword(value);
  };

  const handleSubmit = async () => {
    updateLoading(true);
    try {
      const phoneNumber = `+1${mobilePhone}`;
      await Auth.signUp({
        username: phoneNumber,
        password,
        attributes: {
          phone_number: phoneNumber
        }
      });
      goToNextStep();
    } catch (error: any) {
      setError(error.message || 'Unknown Error');
    }
    updateLoading(false);
  };

  return (
    <>
      <View>
        <View>
          <View>
            <Text type="Headline/Small" style={styles.head}>
              Now, create your password
            </Text>
          </View>
          <View>
            <Text type="Body/Large" style={styles.description}>
              Please use the password rules below.
            </Text>
          </View>
          <View>
            <TextInput
              isSecure
              label="Password"
              onChangeText={changePassword}
            />
            {!!error && (
              <Alert style={styles.error}>{error}</Alert>
            )}
          </View>
          <View style={styles.rulesWrapper}>
            {rules.map((rule, index) => (
              <View key={`rule_${index}`} style={styles.rule}>
                {rule[1] ? <CheckedIcon /> : <UnCheckIcon />}
                <Text type="Body/Large" style={styles.ruleLable}>
                  {rule[0]}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </View>
      <View>
        <SubmitButton
          isValid={isValid}
          actionLabel="Continue"
          onSubmit={handleSubmit}
        />
      </View>
    </>
  );
};

export default CreatePassword;
