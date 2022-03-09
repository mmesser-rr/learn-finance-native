import React from 'react';
import {View} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {useDispatch} from 'react-redux';

import {Text} from 'src/components/common/Texts';
import SubmitButton from 'src/components/common/SubmitButton';
import AppLayout from 'src/components/layout/AppLayout';
import NavigationService from 'src/navigation/NavigationService';
import TextInput from 'src/components/common/TextInput';

import styles from './styles';
import {updateOnboarding} from 'src/store/actions/onboardingActions';

type FormData = {
  streetAddress: string;
  apt: string;
  city: string;
  zipCode: string;
  state: string;
};

const CaptureAddress: React.FC = () => {
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: {errors},
    formState: {isValid},
  } = useForm<FormData>({
    defaultValues: {
      streetAddress: '',
      apt: '',
      city: '',
      zipCode: '',
      state: '',
    },
    mode: 'onChange',
  });

  const onSubmit = (data: FormData) => {
    dispatch(updateOnboarding({address: data}));
    NavigationService.navigate('CaptureSSN');
  };

  return (
    <AppLayout containerStyle={styles.container} viewStyle={styles.viewWrapper}>
      <View style={styles.contentWrapper}>
        <View>
          <Text type="Headline/Small" style={styles.head}>
            What's your address?
          </Text>
        </View>
        <View style={styles.inputWrapper}>
          <Controller
            control={control}
            rules={{
              required: {value: true, message: 'Please fill out this field.'},
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                label="Street Address"
                showErrorMessage
                value={value}
                errorMessage={errors?.streetAddress?.message}
                onBlur={onBlur}
                onChangeText={onChange}
              />
            )}
            name="streetAddress"
          />
        </View>
        <View style={styles.inputWrapper}>
          <Controller
            control={control}
            rules={{required: false}}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                label="Apartment Number"
                showErrorMessage
                value={value}
                errorMessage={errors?.apt?.message}
                onBlur={onBlur}
                onChangeText={onChange}
              />
            )}
            name="apt"
          />
        </View>
        <View style={styles.inputWrapper}>
          <Controller
            control={control}
            rules={{
              required: {value: true, message: 'Please fill out this field.'},
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                label="City"
                showErrorMessage
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                errorMessage={errors?.city?.message}
              />
            )}
            name="city"
          />
        </View>
        <View style={styles.inputWrapper}>
          <Controller
            control={control}
            rules={{
              required: {value: true, message: 'Please fill out this field.'},
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                label="State"
                showErrorMessage
                value={value}
                errorMessage={errors?.state?.message}
                onBlur={onBlur}
                onChangeText={onChange}
              />
            )}
            name="state"
          />
        </View>
        <View style={styles.inputWrapper}>
          <Controller
            control={control}
            rules={{
              required: {value: true, message: 'Please fill out this field.'},
              minLength: {
                value: 5,
                message: 'Please provide a valid Zip code.',
              },
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                label="ZIP Code"
                showErrorMessage
                keyboardType="number-pad"
                isNumeric
                value={value}
                errorMessage={errors?.zipCode?.message}
                maxLength={5}
                onBlur={onBlur}
                onChangeText={onChange}
              />
            )}
            name="zipCode"
          />
        </View>
      </View>
      <View style={styles.actionWrapper}>
        <SubmitButton
          isValid={isValid}
          actionLabel="Continue"
          onSubmit={handleSubmit(onSubmit)}
        />
      </View>
    </AppLayout>
  );
};

export default CaptureAddress;
