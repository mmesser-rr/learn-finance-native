import React from 'react';
import {View} from 'react-native';

import {Text} from 'src/components/common/Texts';
import SubmitButton from 'src/components/common/SubmitButton';
import AppLayout from 'src/components/layout/AppLayout';
import NavigationService from 'src/navigation/NavigationService';
import SuccessIcon from 'src/assets/icons/account-creation-success.svg';

import styles from './styles';

const PodSetupSuccess: React.FC = () => {
  const onReturnHome = () => NavigationService.navigate('HomeStack');

  return (
    <AppLayout containerStyle={styles.container} viewStyle={styles.viewWrapper}>
      <View style={styles.iconWrapper}>
        <SuccessIcon />
      </View>
      <View>
        <Text type="Headline/Small" style={styles.head}>
          Success!
        </Text>
      </View>
      <View>
        <Text type="Body/Large" style={styles.caption}>
          You have successfully set up your pods. All your incoming payments will be divided among your pods. 
        </Text>
      </View>
      <View style={styles.actionWrapper}>
        <SubmitButton
          isValid={true}
          actionLabel="Return Home"
          onSubmit={onReturnHome}
        />
      </View>
    </AppLayout>
  );
};

export default PodSetupSuccess;
