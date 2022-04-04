import React, {useMemo} from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';

import styles from './styles';
import SubmitButton from 'src/components/common/SubmitButton';
import {Text} from 'src/components/common/Texts';
import AppLayout from 'src/components/layout/AppLayout';
import TopNav from 'src/components/common/TopNav';
import NavigationService from 'src/navigation/NavigationService';
import InfoList, {InfoItemInterface} from 'src/components/common/InfoList';
import {getWyreTransactionFee, twoDecimalFormatter} from 'src/utils/functions';

import {RootState} from 'src/store/root-state';

const PurchaseReview: React.FC = () => {
  const {purchaseAmount} = useSelector((state: RootState) => state.wyreReducer);
  const calculatedValues = useMemo(() => {
    const numericValue = Number(purchaseAmount);
    const transactionFee = getWyreTransactionFee(numericValue);
    return {
      transactionFee: twoDecimalFormatter.format(transactionFee),
      purchaseAmount: twoDecimalFormatter.format(numericValue - transactionFee),
    };
  }, [purchaseAmount]);

  const onPurchase = () => {
    // TODO:
  };

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

  return (
    <AppLayout containerStyle={styles.container} viewStyle={styles.viewWrapper}>
      <View style={styles.nav}>
        <TopNav
          title="Purchase"
          goPreviousScreen={() => {}}
          goCloseScreen={() => {}}
        />
      </View>
      <View style={styles.topText}>
        <Text type="Body/Large">Please review the transaction:</Text>
      </View>
      <InfoList list={list} />
      <View style={styles.contentContainer}>
        <View>
          <Text style={styles.center} type="Body/Large">
            By clicking ‘purchase’, I agree to lorem ipsum dolor sit amet,
            consectetur adipiscing elit. In praesent at egestas facilisi. (need
            legal language)
          </Text>
          <SubmitButton
            isValid={true}
            actionLabel="Purchase"
            style={styles.submit}
            onSubmit={onPurchase}
          />
          <Text style={styles.center} type="Title/Small">
            Transactions made after 3:00pm [ET] or on a weekend or holiday will
            be processed the next business day. It is recommended that you print
            a copy of this automation and maintain it for your record.
          </Text>
        </View>
      </View>
    </AppLayout>
  );
};

export default PurchaseReview;
