import React from 'react';
import { View } from 'react-native';
import { useForm, Controller } from "react-hook-form";

import { Title } from 'src/components/common/Texts';
import SubmitButton from 'src/components/common/SubmitButton';
import AppLayout from 'src/components/layout/AppLayout';
import NavigationService from 'src/navigation/NavigationService';
import TextInput from 'src/components/common/TextInput';
import Dropdown from 'src/components/common/Dropdown';

import styles from './styles';

const states = [
  {
    label: "Califonia",
    value: "califonia",
  },
  {
    label: "Texas",
    value: "texas",
  },
  {
    label: "Florida",
    value: "florida",
  },
  {
    label: "Alaska",
    value: "alaska",
  },
];

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
              required: { value: true, message: 'Field is required' },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                label='Street Address'
                placeholder='Street Address'
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                errorMssage={errors?.address?.message}
              />
            )}
            name="address"
          />
        </View>
        <View style={styles.inputWrapper}>
          <Controller
            control={control}
            rules={{
              required: { value: true, message: 'Field is required' },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                label='Apartment Number'
                placeholder='Apartment Number'
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                errorMssage={errors?.apartment_number?.message}
              />
            )}
            name="apartment_number"
          />
        </View>
        <View style={styles.inputWrapper}>
          <Controller
            control={control}
            rules={{
              required: { value: true, message: 'Field is required' },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                label='City'
                placeholder='City'
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
              required: { value: true, message: 'Field is required' },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Dropdown
                label='State'
                list={states}
                value={value}
                onBlur={onBlur}
                onChange={onChange}
              />
            )}
            name="state"
          />
        </View>
        <View style={styles.inputWrapper}>
          <Controller
            control={control}
            rules={{
              required: { value: true, message: 'Field is required' },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                label='ZIP Code'
                placeholder='ZIP Code'
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                errorMssage={errors?.zipcode?.message}
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
