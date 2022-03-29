import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';

import styles from './styles';
import {Text} from 'src/components/common/Texts';
import AppLayout from 'src/components/layout/AppLayout';
import NavigationService from 'src/navigation/NavigationService';
import TopNav from 'src/components/common/TopNav';
import ComingSoonIcon from 'src/assets/icons/coming-soon.svg';
import SubmitButton from 'src/components/common/SubmitButton';
import SecondaryButton from 'src/components/common/SecondaryButton';

const countryOptions = ['United States', 'Canada', 'Mexico', 'Others'];

const WyreFullScreenNotification: React.FC = () => {
  const onSignUp = () => {
    // TODO: link to sign up web page?
  };

  const onMaybeLater = () => {
    NavigationService.navigate('HomeStack', {screen: 'Home'});
  };

  return (
    <AppLayout
      containerStyle={styles.container}
      viewStyle={styles.containerView}>
      <View style={styles.iconWrapper}>
        <ComingSoonIcon />
      </View>
      <View>
        <Text type="Headline/Small" style={styles.headline}>
          Coming soon!
        </Text>
      </View>
      <View>
        <Text type="Body/Large" style={styles.body}>
          We are actively working to support more regions. Please sign up for
          the newsletter so we will notify you as soon as the launch!
        </Text>
      </View>

      <View style={styles.actionWrapper}>
        <SubmitButton
          isValid={true}
          actionLabel="Sign up for the newsletter"
          onSubmit={onSignUp}
        />
        <SecondaryButton
          isValid={true}
          actionLabel="Maybe Later"
          onPress={onMaybeLater}
        />
      </View>
    </AppLayout>
  );
};

export default WyreFullScreenNotification;
