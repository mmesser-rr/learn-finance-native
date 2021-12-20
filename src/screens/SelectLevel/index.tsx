import React from 'react';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import AppColors from 'src/config/colors';
import NavigationService from 'src/navigation/NavigationService';
import AppLayout from 'src/components/layout/AppLayout';
import { BigTitle, Caption } from 'src/components/common/Texts';
import Button from 'src/components/common/Button';
import LogoIcon from 'src/assets/icons/logo.svg';

import styles from './styles';

const SelectLevel: React.FC = () => {
  const onSelectLevel = () => NavigationService.navigate('SelectSport');

  return (
    <LinearGradient colors={AppColors.redLinnerGradient} style={styles.container}>
      <AppLayout viewStyle={styles.viewWrapper}>
        <View>
          <View style={styles.logo}>
            <LogoIcon />
          </View>
          <View style={styles.title}>
            <BigTitle>Just the basics</BigTitle>
          </View>
          <View>
            <Caption>
              Nothing fancy, just a few things to understand your athlete experience.
            </Caption>
          </View>
        </View>
        <View>
          <View style={styles.proActionWrapper}>
            <Button onPress={onSelectLevel}>I'm a professional athlete</Button>
          </View>
          <View>
            <Button propsActionStyle={styles.collegeAction} onPress={onSelectLevel}>I'm a college athlete</Button>
          </View>
        </View>
      </AppLayout>
    </LinearGradient>
  );
};

export default SelectLevel;
