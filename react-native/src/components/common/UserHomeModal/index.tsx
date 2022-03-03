import React from 'react';
import {View} from 'react-native';

import {Text} from 'src/components/common/Texts';
import BackIcon from 'src/assets/icons/back.svg';

import styles from './styles';

const UserHomeModal: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text type="Body/Large">Set up direct deposit</Text>
        <View><BackIcon /></View>
      </View>
      <View style={styles.item}>
        <Text type="Body/Large" style={styles.disabled}>Withdraw money</Text>
        <View><BackIcon /></View>
      </View>
      <View style={styles.item}>
        <Text type="Body/Large" style={styles.disabled}>Change Pods allocations</Text>
        <View><BackIcon /></View>
      </View>
      <View style={styles.item}>
        <Text type="Body/Large" style={styles.disabled}>Transaction History</Text>
        <View><BackIcon /></View>
      </View>
      <View style={styles.item}>
        <Text type="Body/Large">Cancel</Text>
        <View><BackIcon /></View>
      </View>
    </View>
  );
};

export default UserHomeModal;