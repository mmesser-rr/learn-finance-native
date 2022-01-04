import React from 'react';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { RedLinnerGradient } from 'src/utils/constants';
import NavigationService from 'src/navigation/NavigationService';
import AppLayout from 'src/components/layout/AppLayout';
import { BigTitle, Caption, Title } from 'src/components/common/Texts';
import Button from 'src/components/common/Button';
import LogoIcon from 'src/assets/icons/logo.svg';

import styles from './styles';

const ProfileIntro: React.FC = () => {
  const onFinish = () => {};

  return (
    <LinearGradient colors={RedLinnerGradient} style={styles.container}>
      <AppLayout viewStyle={styles.viewWrapper}>
        <View>
          <View style={styles.logo}>
            <LogoIcon />
          </View>
          <View style={styles.block}>
            <BigTitle>Last but not least</BigTitle>
          </View>
          <View style={styles.block}>
            <Title style={styles.title}>Add Players Tag</Title>
            <Caption>Choose your username to join the community.</Caption>
          </View>
          <View style={styles.block}>
            <Title style={styles.title}>Verify your email</Title>
            <Caption>
              Confirming your email address helps protect your personal info. 
            </Caption>
          </View>
        </View>
        <View>
          <Button onPress={onFinish}>Finish Account Setup</Button>
        </View>
      </AppLayout>
    </LinearGradient>
  );
};

export default ProfileIntro;
