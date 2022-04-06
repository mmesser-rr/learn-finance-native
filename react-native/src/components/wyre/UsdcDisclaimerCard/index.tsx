import React from 'react';
import {View} from 'react-native';

import styles from './styles';
import {Text} from 'src/components/common/Texts';

const UsdcDisclaimerCard: React.FC = ({}) => {
  return (
    <View style={styles.usdcDisclaimerCard}>
      <Text type="Title/Small">
        The currency held in Rewards account is USDC. The USD amount on this
        page is an approximate for display purpose only.
      </Text>
    </View>
  );
};

export default UsdcDisclaimerCard;
