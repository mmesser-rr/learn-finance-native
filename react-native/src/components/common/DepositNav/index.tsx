import React from 'react';
import {View} from 'react-native';

import {Text} from 'src/components/common/Texts';
import BackIcon from 'src/assets/icons/back.svg';
import CloseIcon from 'src/assets/icons/close.svg';

import styles from './styles';

const DepositNav: React.FC = () => {
  return (
    <View style={styles.container}>
      <BackIcon />
      <Text type="Title/Large">Deposit</Text>
      <CloseIcon />
    </View>
  );
};

export default DepositNav;
