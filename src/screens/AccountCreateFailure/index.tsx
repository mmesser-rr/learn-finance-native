import React from 'react';
import { View } from 'react-native';

import { Caption, Title } from 'src/components/common/Texts';
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
        <Title style={styles.head}>Additional Action Needed</Title>
      </View>
      <View>
        <Caption style={styles.caption}>
          We need more documentations to verify your identity. We will send detailed instructions to john.smith@gmail.com
        </Caption>
      </View>
      <View style={styles.actionWrapper}>
        <SubmitButton isValid={true} actionLabel='OK' onSubmit={goToNextStep} />
      </View>
    </AppLayout>
  );
};

export default AccountCreateFailure;
