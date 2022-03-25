import React from 'react';
import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {RedLinnerGradient} from 'src/utils/constants';
import NavigationService from 'src/navigation/NavigationService';
import AppLayout from 'src/components/layout/AppLayout';
import {Text} from 'src/components/common/Texts';
import Button from 'src/components/common/Button';
import LogoIcon from 'src/assets/icons/logo.svg';

import styles from './styles';

const Welcome: React.FC = () => {
  const onJoin = () => NavigationService.navigate('SignUp');
  const onLogin = () => NavigationService.navigate('UserLoginStack');

  return (
    <LinearGradient colors={RedLinnerGradient} style={styles.container}>
      <AppLayout viewStyle={styles.viewWrapper}>
        <View>
          <View style={styles.logo}>
            <LogoIcon />
          </View>
          <View style={styles.title}>
            <Text type="Headline/Large">
              Banking for the People
            </Text>
          </View>
          <View>
            <Text type="Title/Large">
              Where equal access provides equal opportunity.
            </Text>
          </View>
        </View>
        <View style={styles.actionWrapper}>
          <View>
            <Button actionStyle={styles.joinAction} onPress={onJoin}>
              <Text type="Body/Large" style={styles.joinLabel}>Join the club</Text>
            </Button>
          </View>
          <View>
            <Button actionStyle={styles.loginAction} onPress={onLogin}>
              <Text type="Body/Large">Log in</Text>
            </Button>
          </View>
        </View>
      </AppLayout>
    </LinearGradient>
  );
};

export default Welcome;
