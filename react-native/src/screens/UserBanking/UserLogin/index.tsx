import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Auth} from 'aws-amplify';
import {useDispatch} from 'react-redux';
import {useForm, Controller} from 'react-hook-form';

import SubmitButton from 'src/components/common/SubmitButton';
import TextInput from 'src/components/common/TextInput';
import {Text} from 'src/components/common/Texts';
import AppLayout from 'src/components/layout/AppLayout';
import TextInputMask from 'src/components/common/TextInputMask';
import Alert from 'src/components/common/Alert';
import NavigationService from 'src/navigation/NavigationService';
import Loading from 'src/components/common/Loading';
import * as userActions from 'src/store/actions/userActions';

import styles from './styles';

type FormData = {
  phone: string;
  password: string;
};

const UserLogin: React.FC = () => {
  const dispatch = useDispatch();
  const [notFoundUser, setNotFoundUser] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: {errors},
    formState: {isValid},
  } = useForm<FormData>({
    defaultValues: {
      phone: '',
      password: ''
    },
    mode: 'onChange',
  });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    setNotFoundUser(false);
    let isUserNotExist = false;
    let msg = '';
    const formattedPhone = '+1' + data.phone;
    try {
      const response = await Auth.signIn({
        username: formattedPhone,
        password: data.password,
      });
      console.log('Sign In Response:');
      console.log(response);
      setLoading(false);
      dispatch(userActions.getUserByPhone(formattedPhone));
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
          <TouchableOpacity onPress={goToSignUp}>
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
          <Controller
            control={control}
            rules={{
              required: {value: true, message: 'Please fill out this field.'},
              minLength: {value: 10, message: 'Phone numbers are always 10 digits long. Please check.'},
              maxLength: {value: 10, message: 'Phone numbers are always 10 digits long. Please check.'},
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInputMask
                label="Phone Number"
                mask="[000] [000] [0000]"
                autoFocus
                keyboardType="number-pad"
                error={errors?.phone?.message}
                changeValue={onChange}
                onBlur={onBlur}
                value={value}
              />
            )}
            name="phone"
          />
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
          <Controller
            control={control}
            rules={{
              required: {value: true, message: 'Please fill out this field.'},
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                label="Password"
                showErrorMessage
                isSecure
                value={value}
                errorMessage={errors?.password?.message}
                onBlur={onBlur}
                onChangeText={onChange}
              />
            )}
            name="password"
          />
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
          onSubmit={handleSubmit(onSubmit)}
        />
      </View>
      {loading && <Loading />}
    </AppLayout>
  );
};

export default UserLogin;
