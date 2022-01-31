import React, { useEffect, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useForm, Controller } from "react-hook-form";
import LinearGradient from 'react-native-linear-gradient';

import { TextNew as Text } from 'src/components/common/Texts';
import SubmitButton from 'src/components/common/SubmitButton';
import AppLayout from 'src/components/layout/AppLayout';
import TextInput from 'src/components/common/TextInput';
import Button from 'src/components/common/Button';
import { GradientButtonColors } from 'src/utils/constants';
import NavigationService from 'src/navigation/NavigationService';
import { calculateContentHeight } from 'src/utils/functions';

import styles from './styles';

type FormData = {
  code: string;
};

const VerifyEmailCode: React.FC = () => {
  const [safeviewHeight, SetSafeviewHeight] = useState(0);

  useEffect(() => {
    async function getContentHeight() {
      SetSafeviewHeight(await calculateContentHeight());
    }

    getContentHeight();
  }, []);

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

  const onSubmit = (data: FormData) => {};

  return (
    <AppLayout containerStyle={styles.container}>
      <View style={{height: safeviewHeight / 2}}>
        <View>
          <Text type='Headline/Small' style={styles.head}>Enter your verification code</Text>
        </View>
        <View>
          <Text type='Body/Large' style={styles.caption}>
            Confirming your email address helps protect your personal info. We sent a verification code to john.smith@mail.com.
          </Text>
        </View>
        <View>
          <Controller
            control={control}
            rules={{
              required: { value: true, message: 'Field is required' },
              minLength: { value: 6, message: 'The length should be 6' }
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                label='Enter 6-digit Code'
                showErrorMessage
                value={value}
                errorMssage={errors?.code?.message}
                maxLength={6}
                autoFocus
                isNumeric
                keyboardType='number-pad'
                onBlur={onBlur}
                onChangeText={onChange}
              />
            )}
            name="code"
          />
        </View>
        <View>
          <TouchableOpacity style={styles.askAction} onPress={() => {}}>
            <Text type='Body/Large' style={styles.askActionLabel}>Resend code</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.actionWrapper}>
        <SubmitButton
          isValid={isValid}
          actionLabel='Verify code'
          style={styles.submit}
          onSubmit={handleSubmit(onSubmit)}
        />
        <LinearGradient
          style={styles.laterActionGradient}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={GradientButtonColors}
        >
          <Button>
            <Text type='Body/Large'>Maybe Later</Text>
          </Button>
        </LinearGradient>
      </View>
    </AppLayout>
  );
};

export default VerifyEmailCode;