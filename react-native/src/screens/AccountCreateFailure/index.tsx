import React from 'react';
import { View } from 'react-native';

import { TextNew as Text } from 'src/components/common/Texts';
import SubmitButton from 'src/components/common/SubmitButton';
import AppLayout from 'src/components/layout/AppLayout';
import NavigationService from 'src/navigation/NavigationService';
import FailureIcon from 'src/assets/icons/account-creation-failure.svg';

import styles from './styles';

const AccountCreateFailure: React.FC = () => {
  const goToNextStep = () => NavigationService.navigate('ProfileIntro');

  return (
    <AppLayout containerStyle={styles.container} viewStyle={styles.viewWrapper}>
      <View style={styles.iconWrapper}>
        <FailureIcon />
      </View>
      <View>
        <Text type='Headline/Small' style={styles.head}>Additional Action Needed</Text>
      </View>
      <View>
        <Text type='Body/Large' style={styles.caption}>
          We need more documentations to verify your identity. We will send detailed instructions to john.smith@gmail.com
        </Text>
      </View>
      <View style={styles.actionWrapper}>
        <SubmitButton isValid={true} actionLabel='OK' onSubmit={goToNextStep} />
      </View>
    </AppLayout>
  );
};

export default AccountCreateFailure;
