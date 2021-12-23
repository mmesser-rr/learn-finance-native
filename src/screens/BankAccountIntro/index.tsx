import React from 'react';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import AppColors from 'src/config/colors';
import NavigationService from 'src/navigation/NavigationService';
import AppLayout from 'src/components/layout/AppLayout';
import { BigTitle, Caption, Title } from 'src/components/common/Texts';
import Button from 'src/components/common/Button';
import LogoIcon from 'src/assets/icons/logo.svg';

import styles from './styles';

const BankAccountIntro: React.FC = () => {
  const onVerify = () => NavigationService.navigate('CaptureDOB');

  return (
    <LinearGradient colors={AppColors.redLinnerGradient} style={styles.container}>
      <AppLayout viewStyle={styles.viewWrapper}>
        <View>
          <View style={styles.logo}>
            <LogoIcon />
          </View>
          <View style={styles.block}>
            <BigTitle>Open the Players Co. Bank Account</BigTitle>
          </View>
          <View style={styles.block}>
            <Title style={styles.title}>Verify Identity</Title>
            <Caption>
              Nothing fancy, just a few things to understand your athlete experience.
            </Caption>
          </View>
          <View style={styles.block}>
            <Title style={styles.title}>Open the bank account</Title>
            <Caption>
            Once your identity is verified your Players Co. bank account will be established.
            </Caption>
          </View>
        </View>
        <View>
          <Button onPress={onVerify}>Next: Verify identify</Button>
        </View>
      </AppLayout>
    </LinearGradient>
  );
};

export default BankAccountIntro;
