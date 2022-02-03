import React from 'react';
import { View } from 'react-native';

import { Text } from 'src/components/common/Texts';
import SubmitButton from 'src/components/common/SubmitButton';
import AppLayout from 'src/components/layout/AppLayout';
import NavigationService from 'src/navigation/NavigationService';
import SuccessIcon from 'src/assets/icons/account-creation-success.svg';

import styles from './styles';

const AccountCreateSuccess: React.FC = () => {
  const goToNextStep = () => NavigationService.navigate('AccountCreateFailure');

  return (
    <AppLayout containerStyle={styles.container} viewStyle={styles.viewWrapper}>
      <View style={styles.iconWrapper}>
        <SuccessIcon />
      </View>
      <View>
        <Text type='Headline/Small' style={styles.head}>Success!</Text>
      </View>
      <View>
        <Text type='Body/Large' style={styles.caption}>
          Your identity has been successfully verified. Your Players Co. bank account is now established.
        </Text>
      </View>
      <View style={styles.actionWrapper}>
        <SubmitButton isValid={true} actionLabel='Continue' onSubmit={goToNextStep} />
      </View>
    </AppLayout>
  );
};

export default AccountCreateSuccess;
