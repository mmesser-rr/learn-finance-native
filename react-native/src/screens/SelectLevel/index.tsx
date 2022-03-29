import React, {useEffect, useState} from 'react';
import {Image, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch} from 'react-redux';

import {BlackRedGradient} from 'src/utils/constants';
import NavigationService from 'src/navigation/NavigationService';
import AppLayout from 'src/components/layout/AppLayout';
import {Text} from 'src/components/common/Texts';
import Button from 'src/components/common/Button';
import {calculateContentHeight} from 'src/utils/functions';
import LogoIcon from 'src/assets/icons/logo_white_transparent.png';
import {updateOnboarding} from 'src/store/actions/onboardingActions';

import styles from './styles';

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
    <LinearGradient colors={BlackRedGradient} style={styles.container}>
      <AppLayout viewStyle={styles.viewWrapper}>
        <View style={{height: safeviewHeight / 2}}>
          <View>
            <Image source={LogoIcon} resizeMode="contain" style={styles.logo} />
          </View>
          <View style={styles.title}>
            <Text type="Headline/Large">Just the basics</Text>
          </View>
          <View>
            <Text type="Body/Large">
              Nothing crazy, just a few questions to understand your athlete experience. 
            </Text>
          </View>
        </View>
        <View style={styles.actionWrapper}>
          <View>
            <Button onPress={() => onSelectLevel('PROFESSIONAL')} actionStyle={styles.proAction}>
              <Text type="Body/Large" style={styles.proLabel}>I'm a professional athlete</Text>
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
