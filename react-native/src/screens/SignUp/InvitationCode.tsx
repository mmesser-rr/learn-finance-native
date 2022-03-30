import React, { useEffect } from 'react';
import {View, TouchableOpacity} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {API, graphqlOperation} from 'aws-amplify';
import {GraphQLResult} from '@aws-amplify/api';
import { useDispatch } from 'react-redux';

import SubmitButton from 'src/components/common/SubmitButton';
import TextInput from 'src/components/common/TextInput';
import {Text} from 'src/components/common/Texts';
import {getInvite} from 'src/graphql/queries';
import {GetInviteQuery, InviteStatus} from 'src/types/graphql';
import { updateOnboarding } from 'src/store/actions/onboardingActions';

import styles from './styles';

interface InvitationCodeProps {
  goToNextStep: () => void;
  updateLoading: (status: boolean) => void;
}

type FormData = {
  code: string;
};

const invalidCodeMessage = 'Invalid code. Please try again.';

const InvitationCode: React.FC<InvitationCodeProps> = ({
  goToNextStep,
  updateLoading
}) => {
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: {errors},
    formState: {isValid},
    setError,
  } = useForm<FormData>({
    defaultValues: {
      code: '',
    },
    mode: 'onChange',
  });

  useEffect(() => {
    dispatch(updateOnboarding({isSignInLink: true, step: 1}));
  }, []);

  const onSubmit = async (formData: FormData) => {
    updateLoading(true);
    const {data} = (await API.graphql(
      graphqlOperation(getInvite, {
        code: formData.code,
        status: InviteStatus.AVAILABLE,
      }),
    )) as GraphQLResult<GetInviteQuery>;
    updateLoading(false);

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
    <View style={styles.contentWrapper}>
      <View>
        <View>
          <Text type="Headline/Small" style={styles.head}>
            Welcome to BankDAO
          </Text>
        </View>
        <View>
          <Text type="Body/Large" style={styles.description}>
            Enter your invitation code to enter the club.
          </Text>
        </View>
        <View>
          <Controller
            control={control}
            rules={{
              required: {value: true, message: 'Please fill out this field.'},
              minLength: {value: 6, message: invalidCodeMessage},
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                label="Invite Code"
                showErrorMessage
                autoFocus
                maxLength={6}
                errorMessage={errors?.code?.message}
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
              Don't have an invite code?
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
    </View>
  );
};

export default InvitationCode;
