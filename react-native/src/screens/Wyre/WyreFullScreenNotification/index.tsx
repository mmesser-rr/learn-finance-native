import React from 'react';
import {View} from 'react-native';
import VideoPlayer from 'react-native-video-player';

import {Text} from 'src/components/common/Texts';
import SubmitButton from 'src/components/common/SubmitButton';
import AppLayout from 'src/components/layout/AppLayout';
import NavigationService from 'src/navigation/NavigationService';
import SecondaryButton from 'src/components/common/SecondaryButton';

import styles from './styles';

const WyreFullScreenNotification: React.FC = () => {
  const onLearnMore = () =>
    NavigationService.navigate('WyreStack', {screen: 'WyreIntro'});

  const next = () => {
    NavigationService.navigate('HomeStack');
  };

  return (
    <AppLayout containerStyle={styles.container}>
      <View style={styles.videoContainer}>
        <VideoPlayer
          video={{uri: 'https://www.w3schools.com/html/mov_bbb.mp4'}}
        />
      </View>
      <View>
        <Text type="Headline/Small" style={styles.head}>
          Earn up to 7% APY in Rewards account
        </Text>
      </View>
      <View>
        <Text type="Body/Large" style={styles.caption}>
          Learn how crypto and Rewards Account works. Your USDC could earn up to
          7% APY. Start investing today!
        </Text>
      </View>
      <View>
        <SubmitButton
          isValid={true}
          actionLabel="Learn More"
          style={styles.submit}
          onSubmit={onLearnMore}
        />
        <SecondaryButton
          isValid={true}
          actionLabel="Maybe Later"
          onPress={next}
        />
      </View>
    </AppLayout>
  );
};

export default WyreFullScreenNotification;
