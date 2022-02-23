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

const BankAccountIntro: React.FC = () => {
  const onVerify = () => NavigationService.navigate('CaptureDOB');

  return (
    <LinearGradient colors={RedLinnerGradient} style={styles.container}>
      <AppLayout viewStyle={styles.viewWrapper}>
        <View>
          <View style={styles.logo}>
            <LogoIcon />
          </View>
          <View style={styles.block}>
            <Text type="Headline/Large">
              Open your Players Company bank account
            </Text>
          </View>
          <View style={styles.block}>
            <Text type="Title/Large" style={styles.title}>
              Verify Identity
            </Text>
            <Text type="Body/Large">
              You will need to enter your date of birth, address, and social
              security number. This has no impact on your credit nor will your
              social security number be stored.
            </Text>
          </View>
          <View style={styles.block}>
            <Text type="Title/Large" style={styles.title}>
              Open the bank account
            </Text>
            <Text type="Body/Large">
              Once your identity is verified, your Players Company bank account
              will be established.
            </Text>
          </View>
        </View>
        <View>
          <Button onPress={onVerify}>
            <Text type="Body/Large">Next: Verify identify</Text>
          </Button>
        </View>
      </AppLayout>
    </LinearGradient>
  );
};

export default BankAccountIntro;
