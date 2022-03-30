import React, {useEffect, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';

import {Text} from 'src/components/common/Texts';
import SubmitButton from 'src/components/common/SubmitButton';
import AppLayout from 'src/components/layout/AppLayout';
import TextInput from 'src/components/common/TextInput';
import NavigationService from 'src/navigation/NavigationService';
import {RootState} from 'src/store/root-state';
import OnboardingSteps from 'src/components/common/OnboardingSteps';
import { updateOnboarding } from 'src/store/actions/onboardingActions';

import styles from './styles';

type FormData = {
  code: string;
};

const VerifyEmailCode: React.FC = () => {
  const dispatch = useDispatch();
  const email = useSelector(
    (state: RootState) => state.onboardingReducer.email,
  );

  useEffect(() => {
    dispatch(updateOnboarding({isSignInLink: false, step: 13}));
  }, []);

  const {
    control,
    handleSubmit,
    formState: {errors},
    formState: {isValid},
  } = useForm<FormData>({
    defaultValues: {
      code: '',
    },
    mode: 'onChange',
  });

  const onSubmit = (data: FormData) => {
    NavigationService.navigate('LastStepWelcome');
  };

  return (
    <AppLayout containerStyle={styles.container} viewStyle={styles.viewWrapper}>
      <View>
        <View style={styles.step}>
          <OnboardingSteps />
        </View>
        <View>
          <Text type="Headline/Small" style={styles.head}>
            Enter your verification code
          </Text>
        </View>
        <View>
          <Text type="Body/Large" style={styles.caption}>
            Confirming your email address helps protect your personal info. We
            sent a verification code to {email}.
          </Text>
        </View>
        <View>
          <Controller
            control={control}
            rules={{
              required: {value: true, message: 'Field is required'},
              minLength: {value: 6, message: 'The length should be 6'},
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                label="Enter 6-digit Code"
                showErrorMessage
                value={value}
                errorMessage={errors?.code?.message}
                maxLength={6}
                autoFocus
                isNumeric
                keyboardType="number-pad"
                onBlur={onBlur}
                onChangeText={onChange}
              />
            )}
            name="code"
          />
        </View>
        <View>
          <TouchableOpacity style={styles.askAction} onPress={() => {}}>
            <Text type="Body/Large" style={styles.askActionLabel}>
              Resend code
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.actionWrapper}>
        <SubmitButton
          isValid={isValid}
          actionLabel="Verify code"
          style={styles.submit}
          onSubmit={handleSubmit(onSubmit)}
        />
      </View>
    </AppLayout>
  );
};

export default VerifyEmailCode;
