import React, {useEffect} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';
import NavigationService from 'src/navigation/NavigationService';
import AppLayout from 'src/components/layout/AppLayout';
import TopNav from 'src/components/common/TopNav';
import Loading from 'src/components/common/Loading';
import TransactionHistoryCard from 'src/components/common/TransactionHistoryCard';
import ForwardIcon from 'src/assets/icons/forward.svg';
import InvestmentsIcon from 'src/assets/icons/investment.svg';
import RewardsIcon from 'src/assets/icons/rewards.svg';
import UninvestedIcon from 'src/assets/icons/uninvested.svg';
import {twoDecimalFormatter} from 'src/utils/functions';
import * as bankingActions from 'src/store/actions/bankingActions';
import * as wyreActions from 'src/store/actions/wyreActions';
import {RootState} from 'src/store/root-state';
import {Text} from 'src/components/common/Texts';
import {PodsCardGradient} from 'src/utils/constants';
import Button from 'src/components/common/Button';
import {investmentsAccountBalanceSelector} from 'src/store/selectors/banking';
import {
  wyreAccountBalanceSelector,
  wyreEligibleSelector,
} from 'src/store/selectors/wyre';
import UsdcDisclaimerCard from 'src/components/wyre/UsdcDisclaimerCard';

const InvestmentsPod: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(bankingActions.getTransactionHistory());
    dispatch(wyreActions.getWyreAccount());
  }, []);

  const transactionHistory = useSelector((state: RootState) =>
    state.bankingReducer.transactionHistory?.filter(entry =>
      entry.attributes?.description?.includes('vest'),
    ),
  );

  const transactionPending = (transactionHistory ?? []).some(
    entry => entry.attributes?.status === 'Pending',
  );
  const balance = useSelector(investmentsAccountBalanceSelector);
  const wyreBalance = useSelector(wyreAccountBalanceSelector);
  const uninvested = twoDecimalFormatter.format(
    Number(balance) - Number(wyreBalance),
  );
  const {isLoading} = useSelector((state: RootState) => state.loadingReducer);
  const hasRewardsAccount = useSelector(
    (state: RootState) => !!state.userReducer.user?.wyreAccountId,
  );
  const wyreEligible = useSelector(wyreEligibleSelector);

  const goPreviousScreen = () => NavigationService.navigate('HomeStack');
  const onLearnMore = () =>
    NavigationService.navigate('WyreStack', {screen: 'WyreIntro'});
  const onMaybeLater = () => {};

  const goToRewards = () =>
    NavigationService.navigate('WyreStack', {screen: 'Rewards'});
  const goToTransactionHistory = () => {
    NavigationService.navigate('UserBankingStack', {
      screen: 'TransactionHistory',
    });
  };

  return (
    <AppLayout containerStyle={styles.container} viewStyle={styles.viewWrapper}>
      <View style={styles.nav}>
        <TopNav title="Investments Pod" goPreviousScreen={goPreviousScreen} />
      </View>

      <View style={styles.summaryCardContainer}>
        <View style={styles.summaryCard}>
          <View style={styles.summaryCardMain}>
            <View style={styles.cardLeft}>
              <InvestmentsIcon style={styles.cardIcon} />
              <Text type="Body/Large" style={styles.summaryCardLabel}>
                Investments
              </Text>
            </View>
            <View style={styles.summaryCardRight}>
              <Text type="Title/Small">Balance</Text>
              <Text type="Headline/Small">{'$' + balance}</Text>
            </View>
          </View>
          {hasRewardsAccount && (
            <View style={[styles.subAccountsContainer, styles.topBorder]}>
              <TouchableOpacity style={styles.subAccount} onPress={goToRewards}>
                <View style={styles.cardLeft}>
                  <View style={styles.subAccountIconWrapper}>
                    <RewardsIcon />
                  </View>
                  <Text type="Body/Large">Rewards</Text>
                </View>
                <View style={styles.cardLeft}>
                  <Text type="Body/Large">${wyreBalance}</Text>
                  <View style={styles.caretContainer}>
                    <ForwardIcon />
                  </View>
                </View>
              </TouchableOpacity>
              <View style={[styles.subAccount, styles.topBorder]}>
                <View style={styles.cardLeft}>
                  <View style={styles.subAccountIconWrapper}>
                    <UninvestedIcon />
                  </View>
                  <Text type="Body/Large">Uninvested</Text>
                </View>
                <View style={styles.cardLeft}>
                  <Text type="Body/Large">${uninvested}</Text>
                  <View style={styles.caretContainer}></View>
                </View>
              </View>
            </View>
          )}
        </View>
      </View>

      {wyreEligible && (
        <LinearGradient colors={PodsCardGradient} style={styles.wyrePromoCard}>
          <Text type="Headline/Small" style={styles.wyrePromoHeadline}>
            Earn up to 7% APY in Rewards
          </Text>
          <Text type="Body/Large">
            Learn how crypto and Rewards Account works. Start investing today!
          </Text>
          <Button onPress={onLearnMore} actionStyle={styles.learnMoreButton}>
            <Text type="Body/Large">Learn More</Text>
          </Button>
          <Button actionStyle={styles.maybeLaterButton} onPress={onMaybeLater}>
            <Text type="Body/Large">Maybe Later</Text>
          </Button>
        </LinearGradient>
      )}

      {transactionPending && (
        <View style={styles.pendingTransactionCard}>
          <Text type="Body/Large">
            There is{' '}
            <Text
              type="Body/Large"
              style={styles.link}
              onPress={goToTransactionHistory}>
              a pending transaction
            </Text>
            . You may see the funds temporarily unavailable from your
            Investments Pod.
          </Text>
        </View>
      )}

      <TransactionHistoryCard
        podContext="Investments"
        historyEntries={transactionHistory}
      />

      {hasRewardsAccount && <UsdcDisclaimerCard />}

      {isLoading && <Loading />}
    </AppLayout>
  );
};

export default InvestmentsPod;
