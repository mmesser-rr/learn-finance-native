import React, {useEffect} from 'react';
import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {RedLinnerGradient} from 'src/utils/constants';
import AppLayout from 'src/components/layout/AppLayout';
import {Text} from 'src/components/common/Texts';
import LogoIcon from 'src/assets/icons/logo.svg';
import NavigationService from 'src/navigation/NavigationService';

import styles from './styles';

const ProfileIntro: React.FC = () => {
  useEffect(() => {
    setTimeout(() => {
      NavigationService.navigate('HomeStack');
    }, 3000);
  }, []);

  return (
    <LinearGradient colors={RedLinnerGradient} style={styles.container}>
      <AppLayout viewStyle={styles.viewWrapper}>
        <View>
          <View style={styles.logo}>
            <LogoIcon />
          </View>
          <View>
            <Text type="Headline/Large">Welcome to the club!</Text>
          </View>
        </View>
      </AppLayout>
    </LinearGradient>
  );
};

export default ProfileIntro;
