import React, {useState} from 'react';
import {View} from 'react-native';
import VideoPlayer from 'react-native-video-player';

import {Text} from 'src/components/common/Texts';
import SubmitButton from 'src/components/common/SubmitButton';
import AppLayout from 'src/components/layout/AppLayout';
import NavigationService from 'src/navigation/NavigationService';

import styles from './styles';
import TopNav from 'src/components/common/TopNav';

const educationItems = [
  {
    headline: 'Watch how crypto works',
    bodyText:
      'A cryptocurrency, crypto-currency, or crypto is a digital currency designed to work as a medium of exchange through a computer network that is not reliant on any central authority, such as a government or bank, to uphold or maintain it.',
    videoUri: 'https://www.w3schools.com/html/mov_bbb.mp4',
  },
  {
    headline: 'Learn what USDC is',
    bodyText:
      'USD Coin is a digital stablecoin that is pegged to the United States dollar.',
    videoUri: 'https://www.w3schools.com/html/mov_bbb.mp4',
  },
  {
    headline: 'Introduce Rewards Account',
    bodyText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla ullamcorper ipsum, nulla cursus dui turpis nam ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla ullamcorper ipsum, nulla cursus dui turpis nam ut.`,
    videoUri: 'https://www.w3schools.com/html/mov_bbb.mp4',
  },
];

const WyreFullScreenNotification: React.FC = () => {
  const [educationItemIndex, setEducationItemIndex] = useState(0);
  const [educationItem, setEducationItem] = useState(educationItems[0]);
  const onContinue = () => {
    const nextIndex = educationItemIndex + 1;
    if (educationItems[nextIndex]) {
      setEducationItem(educationItems[nextIndex]);
      setEducationItemIndex(nextIndex);
    } else {
      // NavigationService.navigate('');
    }
  };
  const previous = () => {
    const nextIndex = educationItemIndex - 1;
    if (educationItems[nextIndex]) {
      setEducationItem(educationItems[nextIndex]);
      setEducationItemIndex(nextIndex);
    }
  };

  const onClose = () => {
    NavigationService.goBack();
  };

  return (
    <AppLayout
      containerStyle={styles.container}
      viewStyle={styles.containerView}>
      <View style={styles.nav}>
        <TopNav
          title="Open Rewards Account"
          goCloseScreen={onClose}
          goPreviousScreen={educationItemIndex > 0 ? previous : undefined}
        />
      </View>

      <View style={styles.videoContainer}>
        <VideoPlayer video={{uri: educationItem.videoUri}} />
      </View>
      <View>
        <Text type="Headline/Small" style={styles.headline}>
          {educationItem.headline}
        </Text>
      </View>
      <View>
        <Text type="Body/Large" style={styles.body}>
          {educationItem.bodyText}
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <SubmitButton
          isValid={true}
          actionLabel="Continue"
          style={styles.submit}
          onSubmit={onContinue}
        />
      </View>
    </AppLayout>
  );
};

export default WyreFullScreenNotification;
