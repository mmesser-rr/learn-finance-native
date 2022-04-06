import React, {useMemo} from 'react';
import {View} from 'react-native';

import styles from './styles';
import {Text} from 'src/components/common/Texts';
import InfoList, {InfoItemInterface} from 'src/components/common/InfoList';
import {getWyreTransactionFee, twoDecimalFormatter} from 'src/utils/functions';

interface WyreWithdrawSummaryProps {
  withdrawAmount: string;
}

const WyreWithdrawSummary: React.FC<WyreWithdrawSummaryProps> = ({
  withdrawAmount,
}) => {
  const calculatedValues = useMemo(() => {
    const numericValue = Number(withdrawAmount);
    const transactionFee = getWyreTransactionFee(numericValue);
    return {
      transactionFee: twoDecimalFormatter.format(transactionFee),
      netAmount: twoDecimalFormatter.format(numericValue - transactionFee),
    };
  }, [withdrawAmount]);

  const list: InfoItemInterface[] = [
    {
      label: 'Withdraw',
      data: (
        <View style={styles.rightAlign}>
          <Text type="Body/Large">${withdrawAmount}</Text>
          <Text type="Title/Medium">{withdrawAmount} USDC</Text>
        </View>
      ),
    },
    {
      label: 'Transaction Fee',
      data: (
        <>
          <Text type="Body/Large">${calculatedValues.transactionFee}</Text>
        </>
      ),
    },
    {
      label: 'Total',
      data: (
        <>
          <Text type="Body/Large">${calculatedValues.netAmount}</Text>
        </>
      ),
    },
  ];

  return <InfoList list={list} />;
};

export default WyreWithdrawSummary;
