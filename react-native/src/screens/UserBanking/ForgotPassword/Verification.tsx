import React, {useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Auth} from 'aws-amplify';

import SubmitButton from 'src/components/common/SubmitButton';
import TextInput from 'src/components/common/TextInput';
import {Text} from 'src/components/common/Texts';

import styles from './styles';

interface VerificationProps {
  username: string;
  goToNextStep: () => void;
  updateLoading: (status: boolean) => void;
  updateCode: (code: string) => void;
}

const Verification: React.FC<VerificationProps> = ({
  username,
  goToNextStep,
  updateLoading,
  updateCode
}) => {
  const [isValid, setIsValid] = useState(false);
  const [code, setCode] = useState('');
  const [error, setError] = useState('');

  const changeValue = (value: string) => {
    setIsValid(value.length === 6);
    setCode(value);
    updateCode(value);
  };

  const handleSubmit = async () => {
    updateLoading(true);
    try {
    } catch (error: any) {
      console.log(error);
      setError(error.message || 'Unkown error');
    }
    updateLoading(false);
  };

  return (
    <View style={styles.contentContainer}>
      <View>
        <View style={styles.head}>
          <Text type="Body/Large">
            We sent a verification code to
          </Text>
          <Text type="Body/Large">{username}</Text>
          <Text type="Body/Large">
            We sent a verification code to
          </Text>
        </View>
        <View>
          <TextInput
            label="Enter 6-digit Code"
            maxLength={6}
            autoFocus
            showErrorMessage={true}
            errorMessage={error}
            onChangeText={changeValue}
          />
        </View>
        <View style={styles.helpLink}>
          <TouchableOpacity onPress={() => {}}>
            <Text type="Body/Large" style={styles.helpLinkLabel}>
              Resend code
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <SubmitButton
          isValid={isValid}
          actionLabel="Verify Code"
          onSubmit={handleSubmit}
        />
      </View>
    </View>
  );
};

export default Verification;
