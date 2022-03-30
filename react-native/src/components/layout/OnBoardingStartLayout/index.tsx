import React from 'react';
import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {BlackRedGradient} from 'src/utils/constants';
import AppLayout from 'src/components/layout/AppLayout';
import LogoIcon from 'src/assets/icons/white_logo_transparent.svg';

import styles from './styles';

interface OnBoardingStartLayoutProps {
  content: React.ReactNode;
  action: React.ReactNode;
}

const OnBoardingStartLayout: React.FC<OnBoardingStartLayoutProps> = ({content, action}) => {
  return (
    <LinearGradient colors={BlackRedGradient} style={styles.container}>
      <AppLayout viewStyle={styles.viewWrapper}>
        <View style={styles.contentWrapper}>
          <View>
            <LogoIcon />
          </View>
          <View>
            {content}
          </View>
        </View>
        <View style={styles.actionWrapper}>
          {action}
        </View>
      </AppLayout>
    </LinearGradient>
  );
};

export default OnBoardingStartLayout;
