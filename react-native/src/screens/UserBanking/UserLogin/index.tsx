import React, { useEffect } from 'react';
import {TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useForm, Controller} from 'react-hook-form';
import {useFocusEffect} from '@react-navigation/native';

import SubmitButton from 'src/components/common/SubmitButton';
import TextInput from 'src/components/common/TextInput';
import {Text} from 'src/components/common/Texts';
import AppLayout from 'src/components/layout/AppLayout';
import TextInputMask from 'src/components/common/TextInputMask';
import Alert from 'src/components/common/Alert';
import NavigationService from 'src/navigation/NavigationService';
import Loading from 'src/components/common/Loading';
import * as userActions from 'src/store/actions/userActions';
import {RootState} from 'src/store/root-state';

import styles from './styles';

type FormData = {
  phone: string;
  password: string;
};

const UserLogin: React.FC = () => {
  const dispatch = useDispatch();
  const {isLoading} = useSelector((state: RootState) => state.loadingReducer);
  const {loginError, userNotFound} = useSelector(
    (state: RootState) => state.userReducer,
  );

  const {
    control,
    handleSubmit,
    formState: {errors},
    formState: {isValid},
    reset,
  } = useForm<FormData>({
    defaultValues: {
      phone: '',
      password: '',
    },
    mode: 'onChange',
  });

  useFocusEffect(
    React.useCallback(() => {
      reset({
        phone: '',
        password: '',
      });
    }, []),
  );

  const onSubmit = (data: FormData) => {
    const formattedPhone = '+1' + data.phone;
    dispatch(userActions.loginRequest(formattedPhone, data.password));
  };

  const goToForgotPassword = () => {
    NavigationService.navigate('UserLoginStack', {screen: 'ForgotPassword'});
  };

  const goToSignUp = () => {
    NavigationService.navigate('SignUp');
  };

  useEffect(() => {
    dispatch(userActions.loginRequest("+16095218692", "Ali1232313232!"));
  }, [])

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
        {!!loginError && (
          <View style={styles.misMatchAlert}>
            <Alert>{loginError}</Alert>
          </View>
        )}
        <View style={styles.phoneNumber}>
          <Controller
            control={control}
            rules={{
              required: {value: true, message: 'Please fill out this field.'},
              minLength: {
                value: 10,
                message:
                  'Phone numbers are always 10 digits long. Please check.',
              },
              maxLength: {
                value: 10,
                message:
                  'Phone numbers are always 10 digits long. Please check.',
              },
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
          {userNotFound && (
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
      {isLoading && <Loading />}
    </AppLayout>
  );
};

export default UserLogin;
