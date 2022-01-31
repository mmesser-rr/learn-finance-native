import React from 'react';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { RedLinnerGradient } from 'src/utils/constants';
import NavigationService from 'src/navigation/NavigationService';
import AppLayout from 'src/components/layout/AppLayout';
import { TextNew as Text } from 'src/components/common/Texts';
import Button from 'src/components/common/Button';

import styles from './styles';

const Welcome: React.FC = () => {
  const onJoin = () => NavigationService.navigate('Terms');

  return (
    <LinearGradient colors={RedLinnerGradient} style={styles.container}>
      <AppLayout viewStyle={styles.viewWrapper}>
        <View style={styles.descriptionWrapper}>
          <View>
            <Text type='Headline/Large'>
              A modern financial collective for athletes by athletes
            </Text>
          </View>
          <View>
            <Text type='Title/Large'>POWER IN UNITY</Text>
            <Text type='Body/Large'>
              Built on the power of networks and relationships
            </Text>
          </View>
          <View>
            <Text type='Title/Large'>WEALTH OF KNOWLEDGE</Text>
            <Text type='Body/Large'>
              Programs for players to develop a foundation of financial knowledge
            </Text>
          </View>
          <View>
            <Text type='Title/Large'>ACCESS</Text>
            <Text type='Body/Large'>
              One-stop-shop for exclusive investment opportunities
            </Text>
          </View>
        </View>
        <View style={styles.actionWrapper}>
          <Button onPress={onJoin}>
            <Text type='Body/Large'>
              Get started
            </Text>
          </Button>
          <Button actionStyle={styles.loginAction} onPress={onJoin}>
            <Text type='Body/Large'>
              Login
            </Text>
          </Button>
        </View>
      </AppLayout>
    </LinearGradient>
  );
};

export default Welcome;
