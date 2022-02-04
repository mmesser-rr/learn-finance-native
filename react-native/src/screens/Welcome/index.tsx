import React from 'react';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { RedLinnerGradient } from 'src/utils/constants';
import NavigationService from 'src/navigation/NavigationService';
import AppLayout from 'src/components/layout/AppLayout';
import { Text } from 'src/components/common/Texts';
import Button from 'src/components/common/Button';
import LogoIcon from 'src/assets/icons/logo.svg';

import styles from './styles';

const Welcome: React.FC = () => {
  const onJoin = () => NavigationService.navigate('SignUp');

  return (
    <LinearGradient colors={RedLinnerGradient} style={styles.container}>
      <AppLayout viewStyle={styles.viewWrapper}>
        <View>
          <View style={styles.logo}>
            <LogoIcon />
          </View>
          <View style={styles.title}>
            <Text type='Headline/Large'>
              A social wealth club for the culture
            </Text>
          </View>
          <View>
            <Text type='Title/Large'>
              Where equal access provides equal opportunity.
            </Text>
          </View>
        </View>
        <View>
          <View style={styles.actionLabelWrapper}>
            <Text type='Body/Large'>
              Let's get this money!
            </Text>
          </View>
          <View style={styles.joinActionWrapper}>
            <Button onPress={onJoin}>
              <Text type='Body/Large'>Enter the club</Text>
            </Button>
          </View>
          <View>
            <Button actionStyle={styles.loginAction} onPress={() => {}}>
              <Text type='Body/Large'>Log in</Text>
            </Button>
          </View>
        </View>
      </AppLayout>
    </LinearGradient>
  );
};

export default Welcome;
