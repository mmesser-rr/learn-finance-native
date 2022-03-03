import React, { useEffect, useState } from 'react';
import {View, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';

import {Text} from 'src/components/common/Texts';
import BackIcon from 'src/assets/icons/back.svg';

import styles from './styles';

interface UserHomeModalProps {
  visible: boolean;
  onClose: () => void;
}

const UserHomeModal: React.FC<UserHomeModalProps> = ({visible, onClose}) => {
  const [isModalVisible, setModalVisible] = useState(visible);

  useEffect(() => {
    if (isModalVisible !== visible) {
      setModalVisible(visible);
    }
  }, [visible, isModalVisible]);

  const handleClose = () => {
    onClose();
  };

  return (
    <Modal isVisible={isModalVisible} style={styles.modal}>
      <View style={styles.container}>
        <View style={styles.item}>
          <TouchableOpacity style={styles.action}>
            <Text type="Body/Large">Set up direct deposit</Text>
            <View><BackIcon /></View>
          </TouchableOpacity>
        </View>
        <View style={styles.item}>
          <TouchableOpacity style={styles.action}>
            <Text type="Body/Large" style={styles.disabled}>Withdraw money</Text>
            <View><BackIcon /></View>
          </TouchableOpacity>
        </View>
        <View style={styles.item}>
          <TouchableOpacity style={styles.action}>
            <Text type="Body/Large" style={styles.disabled}>Change Pods allocations</Text>
            <View><BackIcon /></View>
          </TouchableOpacity>
        </View>
        <View style={styles.item}>
          <TouchableOpacity style={styles.action}>
            <Text type="Body/Large" style={styles.disabled}>Transaction History</Text>
            <View><BackIcon /></View>
          </TouchableOpacity>
        </View>
        <View style={styles.item}>
          <TouchableOpacity style={styles.action} onPress={handleClose}>
            <Text type="Body/Large">Cancel</Text>
            <View><BackIcon /></View>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default UserHomeModal;