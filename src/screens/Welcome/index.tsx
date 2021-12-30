import React from 'react';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import AppColors from 'src/config/colors';
import NavigationService from 'src/navigation/NavigationService';
import AppLayout from 'src/components/layout/AppLayout';
import { BigTitle, Caption, Text } from 'src/components/common/Texts';
import Button from 'src/components/common/Button';

import styles from './styles';

const Welcome: React.FC = () => {
  const onJoin = () => NavigationService.navigate('CaptureSSN');

  return (
    <LinearGradient colors={AppColors.redLinnerGradient} style={styles.container}>
      <AppLayout viewStyle={styles.viewWrapper}>
        <View style={styles.descriptionWrapper}>
          <View>
            <BigTitle>
              A modern financial collective for athletes by athletes
            </BigTitle>
          </View>
          <View>
            <Text style={styles.blockTitle}>POWER IN UNITY</Text>
            <Caption>Built on the power of networks and relationships</Caption>
          </View>
          <View>
            <Text style={styles.blockTitle}>WEALTH OF KNOWLEDGE</Text>
            <Caption>
              Programs for players to develop a foundation of financial knowledge
            </Caption>
          </View>
          <View>
            <Text style={styles.blockTitle}>ACCESS</Text>
            <Caption>
              One-stop-shop for exclusive investment opportunities
            </Caption>
          </View>
        </View>
        <View style={styles.actionWrapper}>
          <Button onPress={onJoin}>Join the movement</Button>
        </View>
      </AppLayout>
    </LinearGradient>
  );
};

export default Welcome;
