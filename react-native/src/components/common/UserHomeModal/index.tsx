import React, { useEffect, useState } from 'react';
import {View, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';

import {Text} from 'src/components/common/Texts';
import BackIcon from 'src/assets/icons/back.svg';
import CancelIcon from 'src/assets/icons/cancel.svg';
import DirectDepositIcon from 'src/assets/icons/direct-deposit.svg';
import WithdrawGreyIcon from 'src/assets/icons/withdraw-grey.svg';
import ChangePodGreyIcon from 'src/assets/icons/change-pod-allocations-grey.svg';
import TransactionHistoryGreyIcon from 'src/assets/icons/transaction-history-grey.svg';

import styles from './styles';
import NavigationService from 'src/navigation/NavigationService';

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

  const onSetupDirectDeposit = () => {
    onClose();
    NavigationService.navigate('TransferStack', {screen: 'DirectDeposit'});
  };

  return (
    <Modal isVisible={isModalVisible} style={styles.modal}>
      <View style={styles.container}>
        <View style={styles.item}>
          <TouchableOpacity style={styles.action} onPress={onSetupDirectDeposit}>
            <Text type="Body/Large">Set up direct deposit</Text>
            <View><DirectDepositIcon /></View>
          </TouchableOpacity>
        </View>
        <View style={styles.item}>
          <TouchableOpacity style={styles.action} disabled>
            <Text type="Body/Large" style={styles.disabled}>Withdraw money</Text>
            <View><WithdrawGreyIcon /></View>
          </TouchableOpacity>
        </View>
        <View style={styles.item}>
          <TouchableOpacity style={styles.action} disabled>
            <Text type="Body/Large" style={styles.disabled}>Change Pods allocations</Text>
            <View><ChangePodGreyIcon /></View>
          </TouchableOpacity>
        </View>
        <View style={styles.item}>
          <TouchableOpacity style={styles.action} disabled>
            <Text type="Body/Large" style={styles.disabled}>Transaction History</Text>
            <View><TransactionHistoryGreyIcon /></View>
          </TouchableOpacity>
        </View>
        <View style={styles.item}>
          <TouchableOpacity style={styles.action} onPress={handleClose}>
            <Text type="Body/Large">Cancel</Text>
            <View><CancelIcon /></View>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default UserHomeModal;