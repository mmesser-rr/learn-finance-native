import React from 'react';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import AppLayout from 'src/components/layout/AppLayout';
import Button from 'src/components/common/Button';
import { Text } from 'src/components/common/Texts';
import { RedLinnerGradient } from 'src/utils/constants';
import ThreeDotsIcon from 'src/assets/icons/three-dots.svg';
import NavigationService from 'src/navigation/NavigationService';

import styles from './styles';

const Home: React.FC = () => {
  const onSetupDirectDeposit = () => NavigationService.navigate('TransferStack', { screen: 'DirectDeposit' });

  return (
    <AppLayout containerStyle={styles.container} viewStyle={styles.viewStyle}>
      <View style={styles.dotMenu}>
        <ThreeDotsIcon />
      </View>
      <View style={styles.title}>
        <Text type='Headline/Small'>Hi John!</Text>
      </View>
      <View style={styles.subTitle}>
        <Text type='Title/Medium'>PLAYER'S ACCOUNT</Text>
      </View>
      <LinearGradient colors={RedLinnerGradient} style={[styles.card, styles.accountCard]}>
        <View style={styles.cardHead}>
          <Text type='Headline/Small'>
            Add money to your account
          </Text>
        </View>
        <View style={styles.cardBody}>
          <Text type='Body/Large'>
            Let's get some money into your account so you can start using it!
          </Text>
        </View>
        <View>
          <View>
            <Button>
              <Text type='Body/Large'>Transfer from another bank</Text>
            </Button>
          </View>
          <View>
            <Button actionStyle={styles.depositButton} onPress={onSetupDirectDeposit}>
              <Text type='Body/Large'>Set up direct deposit</Text>
            </Button>
          </View>
        </View>
      </LinearGradient>
      <View style={styles.subTitle}>
        <Text type='Title/Medium'>POD</Text>
      </View>
      <View style={styles.card}>
        <View style={styles.cardHead}>
          <Text type='Headline/Small'>
            Let's set up your pods
          </Text>
        </View>
        <View style={styles.cardBody}>
          <Text type='Body/Large'>
            All incoming payments will be divided among your pods. Learn how pods can help you financially.
          </Text>
        </View>
        <View>
          <View>
            <Button>
              <Text type='Body/Large'>Set up Pods</Text>
            </Button>
          </View>
        </View>
      </View>
    </AppLayout>
  );
};

export default Home;
