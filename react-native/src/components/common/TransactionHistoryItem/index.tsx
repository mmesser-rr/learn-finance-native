import React, {useMemo} from 'react';
import {View} from 'react-native';

import styles from './styles';
import {UnitAccount} from 'src/types/API';
import {Text} from 'src/components/common/Texts';
import {format} from 'date-fns';
import {twoDecimalFormatter} from 'src/utils/functions';

interface TransactionHistoryCardProps {
  historyEntry: UnitAccount;
  mainTextType?: string;
  secondaryTextType?: string;
}

const TransactionHistoryItem: React.FC<TransactionHistoryCardProps> = ({
  historyEntry,
  mainTextType = 'Body/Medium',
  secondaryTextType = 'Title/Small',
}) => {
  const formatted = useMemo(() => {
    const date = new Date(historyEntry.attributes!.date!);
    return {
      date: format(date, 'MMM do, yyyy'),
      amount: twoDecimalFormatter.format(
        (historyEntry.attributes?.amount ?? 0) / 100,
      ),
      sign: historyEntry.attributes?.direction === 'credit' ? '+' : '-',
    };
  }, [historyEntry]);

  return (
    <View style={styles.container}>
      <View style={styles.itemLeft}>
        <Text type="Body/Small">{formatted.date}</Text>
        <Text type={mainTextType}>{historyEntry.attributes?.summary}</Text>
        <Text type={mainTextType}>{historyEntry.attributes?.description}</Text>
        <Text type={secondaryTextType}>{historyEntry.attributes?.status}</Text>
      </View>
      <View style={styles.itemRight}>
        {historyEntry.attributes?.currency !== 'USDC' ? (
          <Text type={mainTextType} style={styles.itemRightText}>
            {formatted.sign}${formatted.amount}
          </Text>
        ) : (
          <Text type={secondaryTextType} style={styles.itemRightText}>
            {formatted.sign} {formatted.amount} USDC
          </Text>
        )}
      </View>
    </View>
  );
};

export default TransactionHistoryItem;
