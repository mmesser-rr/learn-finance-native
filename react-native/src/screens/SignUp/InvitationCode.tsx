import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useForm, Controller } from 'react-hook-form';

import SubmitButton from 'src/components/common/SubmitButton';
import TextInput from 'src/components/common/TextInput';
import { Caption, Title, Text } from 'src/components/common/Texts';

import styles from './styles';

interface InvitationCodeProps {
  goToNextStep: () => void;
}

type FormData = {
  code: string;
};

const InvitationCode: React.FC<InvitationCodeProps> = ({
  goToNextStep,
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    formState: { isValid }
  } = useForm<FormData>({
    defaultValues: {
      code: '',
    },
    mode: 'onChange',
  });

  const onSubmit = (data: FormData) => {
    goToNextStep();
  };

  return (
    <>
      <View>
        <View>
          <Title style={styles.head}>Welcome to Players Co.</Title>
        </View>
        <View>
          <Caption style={styles.description}>Enter your invitation code to get started.</Caption>
        </View>
        <View>
          <Controller
            control={control}
            rules={{
              required: { value: true, message: 'Please fill out this field.' },
              minLength: { value: 6, message: 'Invalid code. Please try again.' },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                label='Invite Code'
                showErrorMessage
                autoFocus
                maxLength={6}
                errorMssage={errors?.code?.message}
                onBlur={onBlur}
                onChangeText={onChange}
              />
            )}
            name="code"
          />
        </View>
        <View>
          <TouchableOpacity style={styles.askAction} onPress={() => {}}>
            <Text style={styles.askActionLabel}>Don't have an invite code?</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <SubmitButton isValid={isValid} actionLabel='Continue' onSubmit={handleSubmit(onSubmit)} />
      </View>
    </>
  );
};

export default InvitationCode;