import React from 'react';
import { View } from 'react-native';

import { Caption, Title } from 'src/components/common/Texts';
import SubmitButton from 'src/components/common/SubmitButton';
import AppLayout from 'src/components/layout/AppLayout';
import NavigationService from 'src/navigation/NavigationService';
import SuccessIcon from 'src/assets/icons/account-creation-success.svg';

import styles from './styles';

const AccountCreateSuccess: React.FC = () => {
  const goToNextStep = () => NavigationService.navigate('AccountCreateFailure');

  return (
    <AppLayout containerStyle={styles.container} viewStyle={styles.viewWrapper}>
      <View>
        <SuccessIcon />
      </View>
      <View>
        <Title style={styles.head}>Success!</Title>
      </View>
      <View>
        <Caption style={styles.caption}>
          Your identity has been successfully verified. Your Players Co. bank account is now established.
        </Caption>
      </View>
      <View style={styles.actionWrapper}>
        <SubmitButton isValid={true} actionLabel='Continue' onSubmit={goToNextStep} />
      </View>
    </AppLayout>
  );
};

export default AccountCreateSuccess;
