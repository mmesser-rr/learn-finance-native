import React from 'react';
import {View} from 'react-native';

import {Text} from 'src/components/common/Texts';
import SubmitButton from 'src/components/common/SubmitButton';
import AppLayout from 'src/components/layout/AppLayout';
import NavigationService from 'src/navigation/NavigationService';
import FailureIcon from 'src/assets/icons/account-creation-failure.svg';

import styles from './styles';

const AccountCreateFailure: React.FC = () => {
  const contactSupport = () => {};

  return (
    <AppLayout containerStyle={styles.container} viewStyle={styles.viewWrapper}>
      <View style={styles.iconWrapper}>
        <FailureIcon />
      </View>
      <View>
        <Text type="Headline/Small" style={styles.head}>
          Additional Action Needed
        </Text>
      </View>
      <View>
        <Text type="Body/Large" style={styles.caption}>
          We need more documentations to verify your identity. Please contact us
          for support.
        </Text>
      </View>
      <View style={styles.actionWrapper}>
        <SubmitButton
          isValid={true}
          actionLabel="Contact Support"
          onSubmit={contactSupport}
        />
      </View>
    </AppLayout>
  );
};

export default AccountCreateFailure;
