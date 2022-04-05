import React, {useMemo} from 'react';
import {View} from 'react-native';

import styles from './styles';
import {Text} from 'src/components/common/Texts';
import InfoList, {InfoItemInterface} from 'src/components/common/InfoList';
import {getWyreTransactionFee, twoDecimalFormatter} from 'src/utils/functions';

interface WyrePurchaseSummaryProps {
  purchaseAmount: string;
}

const WyrePurchaseSummary: React.FC<WyrePurchaseSummaryProps> = ({
  purchaseAmount,
}) => {
  const calculatedValues = useMemo(() => {
    const numericValue = Number(purchaseAmount);
    const transactionFee = getWyreTransactionFee(numericValue);
    return {
      transactionFee: twoDecimalFormatter.format(transactionFee),
      purchaseAmount: twoDecimalFormatter.format(numericValue - transactionFee),
    };
  }, [purchaseAmount]);

  const list: InfoItemInterface[] = [
    {
      label: 'Total',
      data: (
        <>
          <Text type="Body/Large">${purchaseAmount}</Text>
        </>
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
      label: 'Purchase',
      data: (
        <View style={styles.rightAlign}>
          <Text type="Body/Large">${calculatedValues.purchaseAmount}</Text>
          <Text type="Title/Medium">
            {calculatedValues.purchaseAmount} USDC
          </Text>
        </View>
      ),
    },
  ];

  return <InfoList list={list} />;
};

export default WyrePurchaseSummary;
