import React from 'react';
import {View} from 'react-native';

import styles from './styles';
import {Text} from 'src/components/common/Texts';
import AppLayout from 'src/components/layout/AppLayout';
import NavigationService from 'src/navigation/NavigationService';
import TopNav from 'src/components/common/TopNav';
import ReadyIcon from 'src/assets/icons/ready.svg';
import SubmitButton from 'src/components/common/SubmitButton';

const OpenRewardsAccount: React.FC = () => {
  const openRewardsAccount = () => {
    // TODO:
  };
  const previous = () => {
    NavigationService.navigate('WyreIntro');
  };

  const onClose = () => {
    NavigationService.navigate('HomeStack', {screen: 'Home'});
  };

  return (
    <AppLayout
      containerStyle={styles.container}
      viewStyle={styles.containerView}>
      <View style={styles.nav}>
        <TopNav
          title="Open Rewards Account"
          goCloseScreen={onClose}
          goPreviousScreen={previous}
        />
      </View>
      <View style={styles.iconWrapper}>
        <ReadyIcon />
      </View>
      <View>
        <Text type="Headline/Small" style={styles.headline}>
          Ready?
        </Text>
      </View>
      <View>
        <Text type="Body/Large" style={styles.body}>
          By tapping ‘Open Rewards Account’, you agree to our Terms and
          Conditions.
        </Text>
      </View>

      <View style={styles.actionWrapper}>
        <SubmitButton
          isValid={true}
          actionLabel="Open Rewards Account"
          onSubmit={openRewardsAccount}
        />
      </View>
    </AppLayout>
  );
};

export default OpenRewardsAccount;
