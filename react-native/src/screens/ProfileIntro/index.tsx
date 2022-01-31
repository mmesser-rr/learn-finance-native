import React from 'react';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { RedLinnerGradient } from 'src/utils/constants';
import NavigationService from 'src/navigation/NavigationService';
import AppLayout from 'src/components/layout/AppLayout';
import { TextNew as Text } from 'src/components/common/Texts';
import Button from 'src/components/common/Button';
import LogoIcon from 'src/assets/icons/logo.svg';

import styles from './styles';

const ProfileIntro: React.FC = () => {
  const onFinish = () => NavigationService.navigate('SelectPlayerTag');

  return (
    <LinearGradient colors={RedLinnerGradient} style={styles.container}>
      <AppLayout viewStyle={styles.viewWrapper}>
        <View>
          <View style={styles.logo}>
            <LogoIcon />
          </View>
          <View style={styles.block}>
            <Text type='Headline/Large'>Last but not least</Text>
          </View>
          <View style={styles.block}>
            <Text type='Title/Large' style={styles.title}>Add Players Tag</Text>
            <Text type='Body/Large'>Choose your username to join the community.</Text>
          </View>
          <View style={styles.block}>
            <Text type='Title/Large' style={styles.title}>Verify your email</Text>
            <Text type='Body/Large'>
              Confirming your email address helps protect your personal info. 
            </Text>
          </View>
        </View>
        <View>
          <Button onPress={onFinish}>
            <Text type='Body/Large'>Finish Account Setup</Text>
          </Button>
        </View>
      </AppLayout>
    </LinearGradient>
  );
};

export default ProfileIntro;
