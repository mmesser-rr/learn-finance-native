import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Auth} from 'aws-amplify';

import SubmitButton from 'src/components/common/SubmitButton';
import TextInput from 'src/components/common/TextInput';
import {Text} from 'src/components/common/Texts';
import AppLayout from 'src/components/layout/AppLayout';
import TextInputMask from 'src/components/common/TextInputMask';
import Alert from 'src/components/common/Alert';
import NavigationService from 'src/navigation/NavigationService';
import Loading from 'src/components/common/Loading';

import styles from './styles';

const UserLogin: React.FC = () => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [notFoundUser, setNotFoundUser] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

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

  const handleContinue = async () => {
    setLoading(true);
    setNotFoundUser(false);
    let isUserNotExist = false;
    let msg = '';
    const formattedPhone = '+1' + phone;
    try {
      await Auth.signIn({
        username: formattedPhone,
        password,
      });
      setLoading(true);
      NavigationService.navigate('UserLoginStack', {screen: 'UserFaceId'});
    } catch (error: any) {
      switch (error.message) {
        case 'Username should be either an email or a phone number.':
        case 'Password did not conform with policy: Password not long enough':
        case 'User is not confirmed.':
          msg = error.message;
          break;
        case 'Incorrect username or password.':
          msg = 'The phone number and password do not match. Please try again.';
          break;
        case 'User does not exist.':
          isUserNotExist = true;
          break;
        default:
          msg = error.message;
      }
    }

    setNotFoundUser(isUserNotExist);
    setError(msg);
    setLoading(false);
  };

  const goToForgotPassword = () => {
    NavigationService.navigate('UserLoginStack', {screen: 'ForgotPassword'});
  };

  const goToSignUp = () => {
    NavigationService.navigate('SignUp');
  };

  return (
    <AppLayout containerStyle={styles.container} viewStyle={styles.viewWrapper}>
      <View>
        <View style={styles.signUp}>
          <TouchableOpacity onPress={() => {}}>
            <Text type="Body/Large" style={styles.signUpLabel}>
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text type="Headline/Small" style={styles.head}>
            Welcome back
          </Text>
        </View>
        {!!error && (
          <View style={styles.misMatchAlert}>
            <Alert>{error}</Alert>
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
              <Alert style={styles.phoneNumberAlert}>
                Phone numbers are always 10 digits long. Please check.
              </Alert>
            </View>
          )}
          {notFoundUser && (
            <View>
              <Alert style={styles.phoneNumberAlert}>
                This phone number hasn't been registered. Please{' '}
                <Text
                  type="Body/Large"
                  style={styles.signUpLabel}
                  onPress={goToSignUp}>
                  sign up
                </Text>{' '}
                first.
              </Alert>
            </View>
          )}
        </View>
        <View>
          <TextInput isSecure label="Password" onChangeText={changePassword} />
        </View>
        <View style={styles.forgotPassword}>
          <TouchableOpacity onPress={goToForgotPassword}>
            <Text type="Body/Large" style={styles.forgotPasswordLabel}>
              Forgot Password
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
      {loading && <Loading />}
    </AppLayout>
  );
};

export default UserLogin;
