import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch} from 'react-redux';

import {RedLinnerGradient} from 'src/utils/constants';
import NavigationService from 'src/navigation/NavigationService';
import AppLayout from 'src/components/layout/AppLayout';
import {Text} from 'src/components/common/Texts';
import Button from 'src/components/common/Button';
import LogoIcon from 'src/assets/icons/logo.svg';
import {calculateContentHeight} from 'src/utils/functions';

import styles from './styles';
import {updateOnboarding} from 'src/store/actions/onboardingActions';

const SelectLevel: React.FC = () => {
  const dispatch = useDispatch();
  const [safeviewHeight, SetSafeviewHeight] = useState(0);

  useEffect(() => {
    async function getContentHeight() {
      SetSafeviewHeight(await calculateContentHeight());
    }

    getContentHeight();
  }, []);

  const onSelectLevel = (level: 'COLLEGE' | 'PROFESSIONAL') => {
    dispatch(updateOnboarding({level}));
    NavigationService.navigate('SelectSport');
  };

  return (
    <LinearGradient colors={RedLinnerGradient} style={styles.container}>
      <AppLayout viewStyle={styles.viewWrapper}>
        <View style={{height: safeviewHeight / 2}}>
          <View style={styles.logo}>
            <LogoIcon />
          </View>
          <View style={styles.title}>
            <Text type="Headline/Large">Just the basics</Text>
          </View>
          <View>
            <Text type="Body/Large">
              Nothing fancy, just a few things to understand your athlete
              experience.
            </Text>
          </View>
        </View>
        <View style={styles.actionWrapper}>
          <View style={styles.proActionWrapper}>
            <Button onPress={() => onSelectLevel('PROFESSIONAL')}>
              <Text type="Body/Large">I'm a professional athlete</Text>
            </Button>
          </View>
          <View>
            <Button
              actionStyle={styles.collegeAction}
              onPress={() => onSelectLevel('COLLEGE')}>
              <Text type="Body/Large">I'm a college athlete</Text>
            </Button>
          </View>
        </View>
      </AppLayout>
    </LinearGradient>
  );
};

export default SelectLevel;
