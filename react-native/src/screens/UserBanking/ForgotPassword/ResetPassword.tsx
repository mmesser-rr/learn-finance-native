import React, {useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Auth} from 'aws-amplify';

import SubmitButton from 'src/components/common/SubmitButton';
import TextInput from 'src/components/common/TextInput';
import {Text} from 'src/components/common/Texts';

import styles from './styles';
import InputPassword from 'src/components/common/InputPassword';

interface ResetPasswordProps {
  username: string;
  code: string;
  isPhoneVerification: boolean;
  goToNextStep: () => void;
  updateLoading: (status: boolean) => void;
}

const ResetPassword: React.FC<ResetPasswordProps> = ({
  username,
  code,
  isPhoneVerification,
  goToNextStep,
  updateLoading
}) => {
  const [isValid, setIsValid] = useState(false);
  const [error, setError] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    updateLoading(true);
    let msg = '';
    try {
      let updateUsername = isPhoneVerification ? `+1${username}` : username;
      await Auth.forgotPasswordSubmit(updateUsername, code, password);
      goToNextStep();
    } catch (error: any) {
      msg = error.message;
    }
    setError(msg);
    updateLoading(false);
  };

  const updatePassword = (value: string) => {
    setPassword(value);
  };

  return (
    <View style={styles.contentContainer}>
      <View>
        <View style={styles.head}>
          <Text type="Body/Large">
            Enter new password
          </Text>
          <Text type="Body/Large">
            Please follow the password rules below
          </Text>
        </View>
        <View>
          <InputPassword updatePassword={updatePassword} updateIsValid={setIsValid} />
        </View>
      </View>
      <View>
        <SubmitButton
          isValid={isValid}
          actionLabel="Reset Password"
          onSubmit={handleSubmit}
        />
      </View>
    </View>
  );
};

export default ResetPassword;
