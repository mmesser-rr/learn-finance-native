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

const ProfileIntro: React.FC = () => {
  const onFinish = () => NavigationService.navigate('SelectPlayerTag');

  return (
    <LinearGradient colors={BlackRedGradient} style={styles.container}>
      <AppLayout viewStyle={styles.viewWrapper}>
        <View>
          <View>
            <Image source={LogoIcon} resizeMode="contain" style={styles.logo} />
          </View>
          <View style={styles.block}>
            <Text type="Headline/Large">One last thing</Text>
          </View>
          <View style={styles.block}>
            <Text type="Title/Large" style={styles.title}>
              Create your players tag
            </Text>
            <Text type="Body/Large">
              Choose your username to join the community.
            </Text>
          </View>
          <View style={styles.block}>
            <Text type="Title/Large" style={styles.title}>
              Verify your email
            </Text>
            <Text type="Body/Large">
              Confirming your email address helps to protect your personal info.
            </Text>
          </View>
        </View>
        <View>
          <Button onPress={onFinish}>
            <Text type="Body/Large">Next: Finish account setup</Text>
          </Button>
        </View>
      </AppLayout>
    </LinearGradient>
  );
};

export default ProfileIntro;
