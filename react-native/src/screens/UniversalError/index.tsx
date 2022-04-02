import React from 'react';
import {View} from 'react-native';

import styles from './styles';
import {Text} from 'src/components/common/Texts';
import AppLayout from 'src/components/layout/AppLayout';
import NavigationService from 'src/navigation/NavigationService';
import TurnRightIcon from 'src/assets/icons/turn-right.svg';
import SubmitButton from 'src/components/common/SubmitButton';
import SecondaryButton from 'src/components/common/SecondaryButton';

const NonUS: React.FC = () => {
  const goHome = () => {
    NavigationService.navigate('HomeStack', {screen: 'Home'});
  };

  const contactSupport = () => {
    // TODO: link to support
  };

  return (
    <AppLayout
      containerStyle={styles.container}
      viewStyle={styles.containerView}>
      <View style={styles.iconWrapper}>
        <TurnRightIcon />
      </View>
      <View>
        <Text type="Body/Large" style={styles.body}>
          We’re sorry, but we’re experiencing a problem. Please try again.
        </Text>
      </View>

      <View style={styles.actionWrapper}>
        <SubmitButton
          isValid={true}
          actionLabel="Return Home"
          onSubmit={goHome}
        />
        <SecondaryButton
          isValid={true}
          actionLabel="Contact Support"
          onPress={contactSupport}
        />
      </View>
    </AppLayout>
  );
};

export default NonUS;
