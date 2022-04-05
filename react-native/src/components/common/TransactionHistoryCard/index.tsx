import React from 'react';
import {TextStyle, View, ViewStyle} from 'react-native';

import styles from './styles';
import {Text} from 'src/components/common/Texts';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ExpandIcon from 'src/assets/icons/expand.svg';
import {UnitAccount} from 'src/types/API';
import TransactionHistoryItem from 'src/components/common/TransactionHistoryItem';
import NavigationService from 'src/navigation/NavigationService';

interface TransactionHistoryCardProps {
  podContext: string;
  historyEntries?: UnitAccount[];
  cardStyle?: ViewStyle;
}

const TransactionHistoryCard: React.FC<TransactionHistoryCardProps> = ({
  podContext,
  historyEntries = [],
  cardStyle,
}) => {
  const goToTransactionHistory = () => {
    if (podContext === 'Rewards') {
      NavigationService.navigate('WyreStack', {
        screen: 'TransactionHistory',
      });
    } else {
      NavigationService.navigate('UserBankingStack', {
        screen: 'TransactionHistory',
      });
    }
  };

  return (
    <View style={[styles.card, cardStyle]}>
      <View style={styles.headerRow}>
        <Text type="Title/Medium">TRANSACTION HISTORY</Text>
        <TouchableOpacity onPress={goToTransactionHistory}>
          <ExpandIcon style={styles.icon} />
        </TouchableOpacity>
      </View>
      <View style={styles.entriesContainer}>
        {historyEntries.map((entry, index) => (
          <TransactionHistoryItem
            historyEntry={entry}
            key={index}
            mainTextType="Body/Medium"
            secondaryTextType="Title/Small"
          />
        ))}
      </View>
    </View>
  );
};

export default TransactionHistoryCard;
