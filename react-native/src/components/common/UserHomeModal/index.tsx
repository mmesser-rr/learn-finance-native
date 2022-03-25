import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';

import {Text} from 'src/components/common/Texts';
import CancelIcon from 'src/assets/icons/cancel.svg';
import DirectDepositIcon from 'src/assets/icons/direct-deposit.svg';
import WithdrawGreyIcon from 'src/assets/icons/withdraw-grey.svg';
import WithdrawIcon from 'src/assets/icons/withdraw.svg';
import ChangePodGreyIcon from 'src/assets/icons/change-pod-allocations-grey.svg';
import ChangePodIcon from 'src/assets/icons/change-pod-allocation.svg';
import TransactionHistoryGreyIcon from 'src/assets/icons/transaction-history-grey.svg';
import TransactionHistoryIcon from 'src/assets/icons/transaction-history.svg';

import styles from './styles';
import NavigationService from 'src/navigation/NavigationService';
import {PODsSteps} from 'src/utils/constants';

interface UserHomeModalProps {
  visible: boolean;
  step: string;
  onClose: () => void;
  hasMoneyInAccount: boolean;
}

const UserHomeModal: React.FC<UserHomeModalProps> = ({
  visible,
  step,
  onClose,
  hasMoneyInAccount,
}) => {
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

  const onChangePods = () => {
    onClose();
    NavigationService.navigate('TransferStack', {screen: 'SetupPods'});
  };

  const onWithdrawMoney = () => {
    onClose();
    NavigationService.navigate('UserBankingStack', {screen: 'WithdrawDetails'});
  };

  const goToTransactionHistory = () => {
    onClose();
    NavigationService.navigate('UserBankingStack', {
      screen: 'TransactionHistory',
    });
  };

  const podLabelStyle = step === PODsSteps[2] ? {} : styles.disabled;

  return (
    <Modal isVisible={isModalVisible} style={styles.modal}>
      <View style={styles.container}>
        <View style={styles.item}>
          <TouchableOpacity
            style={styles.action}
            onPress={onSetupDirectDeposit}>
            <Text type="Body/Large">Set up direct deposit</Text>
            <View>
              <DirectDepositIcon />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.item}>
          {hasMoneyInAccount ? (
            <TouchableOpacity style={styles.action} onPress={onWithdrawMoney}>
              <Text type="Body/Large">Withdraw money</Text>
              <View>
                <WithdrawIcon />
              </View>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.action} disabled>
              <Text type="Body/Large" style={styles.disabled}>
                Withdraw money
              </Text>
              <View>
                <WithdrawGreyIcon />
              </View>
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.item}>
          <TouchableOpacity
            style={styles.action}
            disabled={step !== PODsSteps[2]}
            onPress={onChangePods}>
            <Text type="Body/Large" style={podLabelStyle}>
              Change Pods allocations
            </Text>
            <View>
              {step === PODsSteps[2] ? (
                <ChangePodIcon />
              ) : (
                <ChangePodGreyIcon />
              )}
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.item}>
          <TouchableOpacity
            style={styles.action}
            disabled={step !== PODsSteps[2]}
            onPress={goToTransactionHistory}>
            <Text type="Body/Large" style={podLabelStyle}>
              Transaction History
            </Text>
            <View>
              {step === PODsSteps[2] ? (
                <TransactionHistoryIcon />
              ) : (
                <TransactionHistoryGreyIcon />
              )}
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.item}>
          <TouchableOpacity style={styles.action} onPress={handleClose}>
            <Text type="Body/Large">Cancel</Text>
            <View>
              <CancelIcon />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default UserHomeModal;
