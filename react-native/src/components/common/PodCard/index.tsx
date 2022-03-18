import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { PodType } from "src/types/common";
import {Text} from 'src/components/common/Texts';
import SpendingIcon from 'src/assets/icons/spending.svg';
import InvestmentIcon from 'src/assets/icons/investment.svg';
import SavingIcon from 'src/assets/icons/saving.svg';
import { decimalFormatter } from 'src/utils/functions';
import { GradientButtonColors } from 'src/utils/constants';

import styles from './styles';

interface PodCardProps {
  type: PodType;
  balance: number;
  onSelect?: () => void;
}

const PodCard: React.FC<PodCardProps> = ({type, balance, onSelect}) => {
  let label = 'Spending';

  if (type === 'investments') {
    label = 'Investments';
  } else if (type === 'savings') {
    label = 'Savings';
  }

  const renderIcon = () => {
    if (type === 'spending') {
      return <SpendingIcon />;
    }

    if (type === 'investments') {
      return <InvestmentIcon />;
    }

    return <SavingIcon />;
  };

  const renderPodContent = () => {
    return (
      <>
        <View style={styles.podLabel}>
          {renderIcon()}
          <Text type="Body/Large" style={styles.podLabelText}>
            {label}
          </Text>
        </View>
        <View style={styles.balance}>
          <Text type="Title/Small" style={styles.balanceLabel}>
            Balance
          </Text>
          <Text type="Title/Large">${decimalFormatter(2, 2).format(balance)}</Text>
        </View>
      </>
    );
  };

  return (
    <View>
      <LinearGradient
        style={styles.podGradient}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={GradientButtonColors}
      >
        {!!onSelect ? (
          <TouchableOpacity style={styles.podItem} onPress={onSelect}>
            {renderPodContent()}
          </TouchableOpacity>
        ) : (
          <View style={styles.podItem}>
            {renderPodContent()}
          </View>
        )}
      </LinearGradient>
    </View>
  );
};

export default PodCard;
