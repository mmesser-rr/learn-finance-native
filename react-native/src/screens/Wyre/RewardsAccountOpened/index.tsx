import React from 'react';
import {View} from 'react-native';

import styles from './styles';
import {Text} from 'src/components/common/Texts';
import AppLayout from 'src/components/layout/AppLayout';
import NavigationService from 'src/navigation/NavigationService';
import SuccessIcon from 'src/assets/icons/success.svg';
import SubmitButton from 'src/components/common/SubmitButton';

const RewardsAccountOpened: React.FC = () => {
  const goToFirstPurchase = () => {
    // TODO:
  };

  return (
    <AppLayout
      containerStyle={styles.container}
      viewStyle={styles.containerView}>
      <View style={styles.iconWrapper}>
        <SuccessIcon />
      </View>
      <View>
        <Text type="Headline/Small" style={styles.headline}>
          Let's go!
        </Text>
      </View>
      <View>
        <Text type="Body/Large" style={styles.body}>
          You have successfully opened your Rewards account.
        </Text>
      </View>

      <View style={styles.actionWrapper}>
        <SubmitButton
          isValid={true}
          actionLabel="Make my first purchase"
          onSubmit={goToFirstPurchase}
        />
      </View>
    </AppLayout>
  );
};

export default RewardsAccountOpened;
