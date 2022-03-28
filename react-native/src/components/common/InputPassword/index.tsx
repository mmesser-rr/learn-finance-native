import React, {useState} from 'react';
import {View} from 'react-native';

import {Text} from 'src/components/common/Texts';
import TextInput from 'src/components/common/TextInput';
import UnCheckIcon from 'src/assets/icons/uncheck.svg';
import CheckedIcon from 'src/assets/icons/checked.svg';
import Alert from 'src/components/common/Alert';

import styles from './styles';

interface InputPasswordProps {
  error?: string;
  updatePassword: (value: string) => void;
  updateIsValid: (status: boolean) => void;
}

const InputPassword: React.FC<InputPasswordProps> = ({
  error,
  updatePassword,
  updateIsValid
}) => {
  const [password, setPassword] = useState('');
  const [contains816C, setContains816C] = useState(false); // 8-16 characters
  const [containsUL, setContainsUL] = useState(false) // uppercase and lowercase letter
  const [containsN, setContainsN] = useState(false) // number
  const [containsSC, setContainsSC] = useState(false) // special character

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
    updateIsValid(validatePassword(value));
    updatePassword(value);
  };

  return (
    <View>
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
  );
};

export default InputPassword;
