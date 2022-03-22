import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';

import SubmitButton from 'src/components/common/SubmitButton';
import {Text} from 'src/components/common/Texts';
import AppLayout from 'src/components/layout/AppLayout';
import TextInputMask from 'src/components/common/TextInputMask';
import Alert from 'src/components/common/Alert';
import NavigationService from 'src/navigation/NavigationService';
import TopNav from 'src/components/common/TopNav';

import styles from './styles';

const ForgotPassword: React.FC = () => {
  const [isValid, setIsValid] = useState(false);

  const checkValidation = (phone: string, value: string) => {
    setIsValid(!!phone && !!value && phone.length === 10);
  };

  const changePhoneNumber = (value: string) => {
  };

  const handleContinue = () => {
    NavigationService.navigate('UserLoginStack', {screen: 'UserFaceId'});
  };

  const handleForgotPassword = () => {
    NavigationService.navigate('UserLoginStack', {screen: 'ForgotPassword'});
  };

  const goToLogin = () => {
    NavigationService.navigate('UserLoginStack', {screen: 'UserLogin'});
  };

  // TODO: if api returns register error, show register error
  const isRegisterError = false;

  return (
    <AppLayout containerStyle={styles.container} viewStyle={styles.viewWrapper}>
      <View>
        <View style={styles.nav}>
          <TopNav
            title="Reset Password"
            goPreviousScreen={goToLogin}
            goCloseScreen={goToLogin}
          />
        </View>
        <View>
          <Text type="Body/Large" style={styles.head}>
            What's your phone number?
          </Text>
        </View>
        <View style={styles.phoneNumber}>
          <TextInputMask
            label="Phone Number"
            mask="[000] [000] [0000]"
            autoFocus
            keyboardType="number-pad"
            changeValue={changePhoneNumber}
          />
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
        <View style={styles.forgotPassword}>
          <TouchableOpacity onPress={handleForgotPassword}>
            <Text type="Body/Large" style={styles.forgotPasswordLabel}>Use email instead</Text>
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

export default ForgotPassword;
