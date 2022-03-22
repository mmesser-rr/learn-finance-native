import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';

import SubmitButton from 'src/components/common/SubmitButton';
import TextInput from 'src/components/common/TextInput';
import {Text} from 'src/components/common/Texts';
import AppLayout from 'src/components/layout/AppLayout';
import TextInputMask from 'src/components/common/TextInputMask';
import Alert from 'src/components/common/Alert';
import NavigationService from 'src/navigation/NavigationService';

import styles from './styles';

const UserLogin: React.FC = () => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(false);

  const checkValidation = (phone: string, value: string) => {
    setIsValid(!!phone && !!value && phone.length === 10);
  };

  const changePhoneNumber = (value: string) => {
    setPhone(value);
    checkValidation(value, password);
  };

  const changePassword = (value: string) => {
    setPassword(value);
    checkValidation(phone, value);
  };

  const handleContinue = () => {
    NavigationService.navigate('UserLoginStack', {screen: 'UserFaceId'});
  };

  const goToForgotPassword = () => {
    NavigationService.navigate('UserLoginStack', {screen: 'ForgotPassword'});
  };

  // TODO: if api returns register error, show register error
  const isRegisterError = false;

  // TODO: if api returns mismatch error, show mismatch error
  const isMismatchError = false;

  return (
    <AppLayout containerStyle={styles.container} viewStyle={styles.viewWrapper}>
      <View>
        <View style={styles.signUp}>
          <TouchableOpacity onPress={() => {}}>
            <Text type="Body/Large" style={styles.signUpLabel}>Sign up</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text type="Headline/Small" style={styles.head}>
            Welcome back
          </Text>
        </View>
        {isMismatchError && (
          <View style={styles.misMatchAlert}>
            <Alert>The phone number and password do not match. Please try again.</Alert>
          </View>
        )}
        <View style={styles.phoneNumber}>
          <TextInputMask
            label="Phone Number"
            mask="[000] [000] [0000]"
            autoFocus
            keyboardType="number-pad"
            changeValue={changePhoneNumber}
          />
          {phone.length < 10 && (
            <View>
              <Alert style={styles.phoneNumberAlert}>Phone numbers are always 10 digits long. Please check.</Alert>
            </View>
          )}
          {isRegisterError && (
            <View>
              <Alert style={styles.phoneNumberAlert}>
                This phone number hasn't been registered. Please{' '}
                <Text type="Body/Large" style={styles.signUpLabel}>sign up</Text>
                {' '}first.
              </Alert>
            </View>
          )}
        </View>
        <View>
          <TextInput
            isSecure
            label="Password"
            onChangeText={changePassword}
          />
        </View>
        <View style={styles.forgotPassword}>
          <TouchableOpacity onPress={goToForgotPassword}>
            <Text type="Body/Large" style={styles.forgotPasswordLabel}>Forgot Password</Text>
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
    </AppLayout>
  );
};

export default UserLogin;
