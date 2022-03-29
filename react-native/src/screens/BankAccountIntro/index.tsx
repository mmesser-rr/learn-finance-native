import React from 'react';
import {View, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {BlackRedGradient} from 'src/utils/constants';
import NavigationService from 'src/navigation/NavigationService';
import AppLayout from 'src/components/layout/AppLayout';
import {Text} from 'src/components/common/Texts';
import Button from 'src/components/common/Button';
import LogoIcon from 'src/assets/icons/logo_white_transparent.png';

import styles from './styles';

const BankAccountIntro: React.FC = () => {
  const onVerify = () => NavigationService.navigate('CaptureDOB');

  return (
    <LinearGradient colors={BlackRedGradient} style={styles.container}>
      <AppLayout viewStyle={styles.viewWrapper}>
        <View>
          <View>
            <Image source={LogoIcon} resizeMode="contain" style={styles.logo} />
          </View>
          <View style={styles.block}>
            <Text type="Headline/Large">Open your BankDAO accounts</Text>
          </View>
          <View style={styles.block}>
            <Text type="Title/Large" style={styles.title}>
              Verify Identity
            </Text>
            <Text type="Body/Large">
              You will need to enter your date of birth, address, and social security number. This has no impact on your credit nor will your social security number be stored.
            </Text>
          </View>
          <View style={styles.block}>
            <Text type="Title/Large" style={styles.title}>
              Open the bank accounts
            </Text>
            <Text type="Body/Large">
              Once your identity is verified, your BankDAO accounts will be established.
            </Text>
          </View>
        </View>
        <View>
          <Button onPress={onVerify} actionStyle={styles.actionStyle}>
            <Text type="Body/Large" style={styles.actionLabel}>Next: Verify identify</Text>
          </Button>
        </View>
      </AppLayout>
    </LinearGradient>
  );
};

export default BankAccountIntro;
