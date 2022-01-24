import React from 'react';
import { View } from 'react-native';
import { useForm, Controller } from "react-hook-form";

import { Title } from 'src/components/common/Texts';
import SubmitButton from 'src/components/common/SubmitButton';
import AppLayout from 'src/components/layout/AppLayout';
import NavigationService from 'src/navigation/NavigationService';
import TextInput from 'src/components/common/TextInput';

import styles from './styles';

type FormData = {
  address: string;
  apartment_number: string;
  city: string;
  zipcode: string;
  state: string;
};

const CaptureAddress: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    formState: { isValid }
  } = useForm<FormData>({
    defaultValues: {
      address: '',
      apartment_number: '',
      city: '',
      zipcode: '',
      state: '',
    },
    mode: 'onChange',
  });

  const onSubmit = (data: FormData) => {
    NavigationService.navigate('CaptureSSN');
  };

  return (
    <AppLayout containerStyle={styles.container} viewStyle={styles.viewWrapper}>
      <View style={styles.contentWrapper}>
        <View>
          <Title style={styles.head}>What's your address?</Title>
        </View>
        <View style={styles.inputWrapper}>
          <Controller
            control={control}
            rules={{
              required: { value: true, message: 'Please fill out this field.' },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                label='Street Address'
                showErrorMessage
                value={value}
                errorMssage={errors?.address?.message}
                onBlur={onBlur}
                onChangeText={onChange}
              />
            )}
            name="address"
          />
        </View>
        <View style={styles.inputWrapper}>
          <Controller
            control={control}
            rules={{ required: false }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                label='Apartment Number'
                showErrorMessage
                value={value}
                errorMssage={errors?.apartment_number?.message}
                onBlur={onBlur}
                onChangeText={onChange}
              />
            )}
            name="apartment_number"
          />
        </View>
        <View style={styles.inputWrapper}>
          <Controller
            control={control}
            rules={{
              required: { value: true, message: 'Please fill out this field.' },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                label='City'
                showErrorMessage
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                errorMssage={errors?.city?.message}
              />
            )}
            name="city"
          />
        </View>
        <View style={styles.inputWrapper}>
          <Controller
            control={control}
            rules={{
              required: { value: true, message: 'Please fill out this field.' },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                label='State'
                showErrorMessage
                value={value}
                errorMssage={errors?.state?.message}
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
              required: { value: true, message: 'Please fill out this field.' },
              minLength: { value: 5, message: 'Please provide a valid Zip code.' },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                label='ZIP Code'
                showErrorMessage
                keyboardType='number-pad'
                isNumeric
                value={value}
                errorMssage={errors?.zipcode?.message}
                maxLength={5}
                onBlur={onBlur}
                onChangeText={onChange}
              />
            )}
            name="zipcode"
          />
        </View>
      </View>
      <View style={styles.actionWrapper}>
        <SubmitButton isValid={isValid} actionLabel='Continue' onSubmit={handleSubmit(onSubmit)} />
      </View>
    </AppLayout>
  );
};

export default CaptureAddress;
