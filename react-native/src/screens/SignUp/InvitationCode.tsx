import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { API, graphqlOperation } from 'aws-amplify';
import { GraphQLResult } from '@aws-amplify/api';

import SubmitButton from 'src/components/common/SubmitButton';
import TextInput from 'src/components/common/TextInput';
import { Text } from 'src/components/common/Texts';
import { getInvite } from 'src/graphql/queries';
import { GetInviteQuery, InviteStatus } from 'src/types/graphql';

import styles from './styles';

interface InvitationCodeProps {
  goToNextStep: () => void;
}

type FormData = {
  code: string;
};

const invalidCodeMessage = 'Invalid code. Please try again.';

const InvitationCode: React.FC<InvitationCodeProps> = ({
  goToNextStep,
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    formState: { isValid },
    setError,
  } = useForm<FormData>({
    defaultValues: {
      code: '',
    },
    mode: 'onChange',
  });

  const onSubmit = async(formData: FormData) => {
    const { data } = (await API.graphql(
      graphqlOperation(getInvite, {
        code: formData.code,
        status: InviteStatus.AVAILABLE,
      }),
    )) as GraphQLResult<GetInviteQuery>;

    if (data && data.getInvite) {
      goToNextStep();
    } else {
      setError('code', {
        type: 'manual',
        message: invalidCodeMessage,
      });
    }
  };

  return (
    <>
      <View>
        <View>
          <Text type='Headline/Small' style={styles.head}>
            Welcome to Players Co.
          </Text>
        </View>
        <View>
          <Text type='Body/Large' style={styles.description}>
            Enter your invitation code to get started.
          </Text>
        </View>
        <View>
          <Controller
            control={control}
            rules={{
              required: { value: true, message: 'Please fill out this field.' },
              minLength: { value: 6, message: invalidCodeMessage },
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
            <Text type='Body/Large' style={styles.askActionLabel}>
              Don't have an invite code?
            </Text>
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