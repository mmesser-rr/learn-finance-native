import React, {useEffect} from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import styles from './styles';
import NavigationService from 'src/navigation/NavigationService';
import AppLayout from 'src/components/layout/AppLayout';
import TopNav from 'src/components/common/TopNav';
import Loading from 'src/components/common/Loading';
import TransactionHistoryCard from 'src/components/common/TransactionHistoryCard';
import RewardsIcon from 'src/assets/icons/rewards.svg';
import * as bankingActions from 'src/store/actions/bankingActions';
import {RootState} from 'src/store/root-state';
import {Text} from 'src/components/common/Texts';
import {wyreAccountBalanceSelector} from 'src/store/selectors/wyre';
import UsdcDisclaimerCard from 'src/components/wyre/UsdcDisclaimerCard';
import SubmitButton from 'src/components/common/SubmitButton';
import SecondaryButton from 'src/components/common/SecondaryButton';

const Rewards: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(bankingActions.getTransactionHistory());
  }, []);

  const transactionHistory = useSelector((state: RootState) =>
    state.bankingReducer.transactionHistory?.filter(
      entry =>
        entry.attributes?.description?.includes('Rewards') &&
        entry.attributes.direction === 'credit',
    ),
  );
  const balance = useSelector(wyreAccountBalanceSelector);
  const usdcBalance = useSelector(
    (state: RootState) => state.wyreReducer.wyreAccount?.balances?.USDC,
  );

  const {isLoading} = useSelector((state: RootState) => state.loadingReducer);

  const goPreviousScreen = () => NavigationService.goBack();
  const goToPurchase = () =>
    NavigationService.navigate('WyreStack', {screen: 'PurchaseAmount'});
  const goToWithdraw = () => {};

  return (
    <AppLayout containerStyle={styles.container} viewStyle={styles.viewWrapper}>
      <View style={styles.nav}>
        <TopNav title="Rewards" goPreviousScreen={goPreviousScreen} />
      </View>
      <View style={styles.summaryCardContainer}>
        <View style={styles.summaryCard}>
          <View style={styles.summaryCardMain}>
            <View style={styles.cardLeft}>
              <RewardsIcon style={styles.cardIcon} />
              <Text type="Body/Large" style={styles.summaryCardLabel}>
                Rewards
              </Text>
            </View>
            <View style={styles.summaryCardRight}>
              <Text type="Body/Large">{balance} USD</Text>
              <Text type="Title/Medium">{usdcBalance ?? '0.00'} USDC</Text>
            </View>
          </View>

          <View style={styles.summaryCardBelowLineContainer}>
            <View style={styles.summaryCardBelowLine}>
              <Text type="Body/Large">APY</Text>
              <Text type="Body/Large">7.00%</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={[styles.sectionWrapper, styles.halfCardsContainer]}>
        <View style={styles.halfCard}>
          <Text type="Body/Large" style={styles.halfCardTitle}>
            Lifetime Rewards
          </Text>
          <Text type="Title/Small">33.24 USDC</Text>
        </View>
        <View style={styles.halfCard}>
          <Text type="Body/Large" style={styles.halfCardTitle}>
            Rewards earned in last 30 days
          </Text>
          <Text type="Title/Small">5.38 USDC</Text>
        </View>
      </View>

      <View style={styles.sectionWrapper}>
        <SubmitButton
          isValid={true}
          actionLabel="Invest More"
          onSubmit={goToPurchase}
        />
        <SecondaryButton
          isValid={true}
          actionLabel="Withdraw"
          onPress={goToWithdraw}
        />
      </View>

      <TransactionHistoryCard
        podContext="Rewards"
        historyEntries={transactionHistory}
      />
      <UsdcDisclaimerCard />
      {isLoading && <Loading />}
    </AppLayout>
  );
};

export default Rewards;
