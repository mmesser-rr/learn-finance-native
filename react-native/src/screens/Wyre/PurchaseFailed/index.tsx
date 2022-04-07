import React, {useMemo} from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import {format} from 'date-fns';

import styles from './styles';
import {Text} from 'src/components/common/Texts';
import AppLayout from 'src/components/layout/AppLayout';
import NavigationService from 'src/navigation/NavigationService';
import ExclamationIcon from 'src/assets/icons/exclamation-orange-yellow-gradient.svg';
import SubmitButton from 'src/components/common/SubmitButton';
import {RootState} from 'src/store/root-state';
import SecondaryButton from 'src/components/common/SecondaryButton';
import {twoDecimalFormatter} from 'src/utils/functions';

const PurchaseFailed: React.FC = () => {
  const purchase = useSelector((state: RootState) =>
    (state.bankingReducer.transactionHistory ?? []).find(
      entry =>
        entry.attributes?.description?.includes('Rewards') &&
        entry.attributes?.direction === 'credit' &&
        (entry.attributes?.status === 'Failed' ||
          entry.attributes?.status === 'Cancelled'),
    ),
  );

  const purchaseAgain = () => {
    NavigationService.navigate('PurchaseAmount');
  };
  const goToInvestmentsPod = () =>
    NavigationService.navigate('UserBankingStack', {
      screen: 'InvestmentsPod',
    });

  if (!purchase) {
    goToInvestmentsPod();
  }

  const formatted = useMemo(() => {
    const date = new Date(purchase!.attributes!.date!);
    return {
      date: format(date, 'MMM do, yyyy'),
      amount: twoDecimalFormatter.format(
        (purchase!.attributes?.amount ?? 0) / 100,
      ),
    };
  }, [purchase]);

  return (
    <AppLayout
      containerStyle={styles.container}
      viewStyle={styles.containerView}>
      <View style={styles.iconWrapper}>
        <ExclamationIcon />
      </View>
      <View>
        <Text type="Headline/Small" style={styles.headline}>
          Failed
        </Text>
      </View>
      <View>
        {purchase!.attributes?.status === 'Failed' && (
          <Text type="Body/Large" style={styles.body}>
            Your purchase failed because of insufficient funds. These funds
            remain your available in your Investments Pod. We recommend you
            adjust the amount and purchase again.
          </Text>
        )}
        {purchase!.attributes?.status === 'Cancelled' && (
          <Text type="Body/Large" style={styles.body}>
            Your purchase failed because of insufficient funds. These funds
            remain your available in your Investments Pod. We recommend you
            adjust the amount and purchase again.
          </Text>
        )}
      </View>

      <View style={styles.summaryCard}>
        <View>
          <Text type="Body/Large">Purchase</Text>
          <Text type="Body/Medium">{purchase?.attributes?.description}</Text>
        </View>
        <View style={styles.summaryCardRight}>
          <Text type="Body/Small">{formatted.date}</Text>
          <Text type="Body/Large" style={styles.purchaseAmount}>
            ${formatted.amount}
          </Text>
        </View>
      </View>

      <View style={styles.actionWrapper}>
        <SubmitButton
          isValid={true}
          actionLabel="Purchase Again"
          onSubmit={purchaseAgain}
        />
        <SecondaryButton
          isValid={true}
          actionLabel="Go to Investments Pod"
          onPress={goToInvestmentsPod}
        />
      </View>
    </AppLayout>
  );
};

export default PurchaseFailed;
