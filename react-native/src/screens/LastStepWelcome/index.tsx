import React, {useEffect} from 'react';
import {Image, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch } from 'react-redux';

import {PODsSteps, BlackRedGradient} from 'src/utils/constants';
import AppLayout from 'src/components/layout/AppLayout';
import {Text} from 'src/components/common/Texts';
import NavigationService from 'src/navigation/NavigationService';
import { updateHomeStep } from 'src/store/actions/bankingActions';
import LogoIcon from 'src/assets/icons/logo_white_transparent.png';

import styles from './styles';

const ProfileIntro: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(updateHomeStep(PODsSteps[0]));
      NavigationService.navigate('HomeStack');
    }, 3000);
  }, []);

  return (
    <LinearGradient colors={BlackRedGradient} style={styles.container}>
      <AppLayout viewStyle={styles.viewWrapper}>
        <View>
          <Image source={LogoIcon} resizeMode="contain" style={styles.logo} />
        </View>
        <View>
          <Text type="Headline/Large">Welcome to the club!</Text>
        </View>
      </AppLayout>
    </LinearGradient>
  );
};

export default ProfileIntro;
