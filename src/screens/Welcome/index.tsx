import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import AppColors from 'src/config/colors';
import Text from 'src/components/common/Text';
import NavigationService from 'src/navigation/NavigationService';
import AppLayout from 'src/components/layout/AppLayout';

import styles from './styles';

const Welcome: React.FC = () => {
  const onJoin = () => NavigationService.navigate('SignUp');

  return (
    <LinearGradient colors={AppColors.redLinnerGradient} style={styles.container}>
      <AppLayout viewStyle={styles.viewWrapper}>
        <View style={styles.descriptionWrapper}>
          <View>
            <Text style={styles.header}>A modern financial collective for athletes by athletes</Text>
          </View>
          <View>
            <Text style={styles.blockTitle}>POWER IN UNITY</Text>
            <Text style={styles.blockDescription}>Built on the power of networks and relationships</Text>
          </View>
          <View>
            <Text style={styles.blockTitle}>WEALTH OF KNOWLEDGE</Text>
            <Text style={styles.blockDescription}>Programs for players to develop a foundation of financial knowledge</Text>
          </View>
          <View>
            <Text style={styles.blockTitle}>ACCESS</Text>
            <Text style={styles.blockDescription}>One-stop-shop for exclusive investment opportunities</Text>
          </View>
        </View>
        <View style={styles.actionWrapper}>
          <TouchableOpacity onPress={onJoin} style={styles.joinAction}>
            <Text style={styles.joinActionlabel}>Join the movement</Text>
          </TouchableOpacity>
        </View>
      </AppLayout>
    </LinearGradient>
  );
};

export default Welcome;
