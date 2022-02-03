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

const SelectLevel: React.FC = () => {
  const onSelectLevel = () => NavigationService.navigate('SelectSport');

  return (
    <LinearGradient colors={RedLinnerGradient} style={styles.container}>
      <AppLayout viewStyle={styles.viewWrapper}>
        <View>
          <View style={styles.logo}>
            <LogoIcon />
          </View>
          <View style={styles.title}>
            <Text type='Headline/Large'>Just the basics</Text>
          </View>
          <View>
            <Text type='Body/Large'>
              Nothing fancy, just a few things to understand your athlete experience.
            </Text>
          </View>
        </View>
        <View>
          <View style={styles.proActionWrapper}>
            <Button onPress={onSelectLevel}>
              <Text type='Body/Large'>I'm a professional athlete</Text>
            </Button>
          </View>
          <View>
            <Button actionStyle={styles.collegeAction} onPress={onSelectLevel}>
              <Text type='Body/Large'>I'm a college athlete</Text>
            </Button>
          </View>
        </View>
      </AppLayout>
    </LinearGradient>
  );
};

export default SelectLevel;
