import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import { Auth } from 'aws-amplify';

import SubmitButton from 'src/components/common/SubmitButton';
import {Text} from 'src/components/common/Texts';
import TextInputMask from 'src/components/common/TextInputMask';
import Alert from 'src/components/common/Alert';
import TextInput from 'src/components/common/TextInput';
import NavigationService from 'src/navigation/NavigationService';

import styles from './styles';

interface ForgotPasswordRequestProps {
  updateLoading: (status: boolean) => void;
  goToNextStep: () => void;
  updateUsername: (status: string) => void;
  updatePhoneVerification: (status: boolean) => void;
}

const ForgotPasswordRequest: React.FC<ForgotPasswordRequestProps> = ({
  updateLoading,
  goToNextStep,
  updateUsername,
  updatePhoneVerification
}) => {
  const [isValid, setIsValid] = useState(false);
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [notRegistered, setNotRegistered] = useState(false);
  const [isPhoneVerification, setIsPhoneVerification] = useState(true);

  const checkValidation = (phone: string) => {
    setIsValid(!!phone && phone.length === 10);
  };

  const changePhoneNumber = (value: string) => {
    setPhone(value);
    checkValidation(value);
    updateUsername(value);
  };

  const handleContinue = async () => {
    let msg = '';
    let isNotRegstered = false;
    updateLoading(true);
    try {
      if (isPhoneVerification) {
        await Auth.forgotPassword(`+1${phone}`);
      } else {
        await Auth.forgotPassword(email);
      }
      goToNextStep();
    } catch (error: any) {
      switch (error.message) {
        case 'Username/client id combination not found.':
          isNotRegstered = true;
          break;
        default:
          msg = error.message;
      }
    }
    setError(msg);
    setNotRegistered(isNotRegstered);
    updateLoading(false);
  };

  const onInstead = () => {
    const phoneVerificationStatus = !isPhoneVerification;
    setIsPhoneVerification(phoneVerificationStatus);
    updatePhoneVerification(phoneVerificationStatus)
  };

  const onChangeEmail = (value: string) => {
    const reg = /\S+@\S+\.\S+/;
    setIsValid(!!value && reg.test(value));
    setEmail(value);
    updateUsername(value);
  };

  const goToSignUp = () => {
    NavigationService.navigate('SignUp');
  };

  return (
    <View style={styles.contentContainer}>
      <View>
        <View>
          <Text type="Body/Large" style={styles.head}>
            {isPhoneVerification ? "What's your phone number?" : "What's your email address?"}
          </Text>
        </View>
        <View style={styles.phoneNumber}>
          {isPhoneVerification ? (
            <TextInputMask
              label="Phone Number"
              mask="[000] [000] [0000]"
              autoFocus
              keyboardType="number-pad"
              changeValue={changePhoneNumber}
              error={error}
            />
          ) : (
            <TextInput
              label="Email Address"
              placeholder="Email Address"
              onChangeText={onChangeEmail}
            />
          )}
          {notRegistered && (
            <View>
              <Alert style={styles.phoneNumberAlert}>
                This {isPhoneVerification ? 'phone number' : 'email address'} hasn't been registered. Please{' '}
                <Text type="Body/Large" style={styles.signUpLabel} onPress={goToSignUp}>sign up</Text>
                {' '}first.
              </Alert>
            </View>
          )}
        </View>
        <View style={styles.helpLink}>
          <TouchableOpacity onPress={onInstead}>
            <Text type="Body/Large" style={styles.helpLinkLabel}>
              {isPhoneVerification ? 'Use email instead' : 'Use phone number instead'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <SubmitButton
          isValid={isValid}
          actionLabel="Continue"
          onSubmit={handleContinue}
        />
      </View>
    </View>
  );
};

export default ForgotPasswordRequest;
