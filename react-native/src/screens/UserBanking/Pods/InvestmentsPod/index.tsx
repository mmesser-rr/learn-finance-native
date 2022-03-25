import React, {useEffect} from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';
import NavigationService from 'src/navigation/NavigationService';
import AppLayout from 'src/components/layout/AppLayout';
import TopNav from 'src/components/common/TopNav';
import Loading from 'src/components/common/Loading';
import InfoCard from 'src/components/common/InfoCard';
import TransactionHistoryCard from 'src/components/common/TransactionHistoryCard';
import InvestmentsIcon from 'src/assets/icons/investment.svg';
import {twoDecimalFormatter} from 'src/utils/functions';
import * as bankingActions from 'src/store/actions/bankingActions';
import {RootState} from 'src/store/root-state';
import {Text} from 'src/components/common/Texts';
import {PodsCardGradient} from 'src/utils/constants';
import Button from 'src/components/common/Button';
import {wyreEligibleSelector} from 'src/store/selectors/banking';

const InvestmentsPod: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(bankingActions.getTransactionHistory());
  }, []);

  const transactionHistory = useSelector((state: RootState) =>
    state.bankingReducer.transactionHistory?.filter(entry =>
      entry.attributes?.description?.includes('Investments'),
    ),
  );
  const balance = useSelector((state: RootState) =>
    twoDecimalFormatter.format(
      (state.bankingReducer.savingsAccount?.attributes?.balance ?? 0) / 100,
    ),
  );
  const {isLoading} = useSelector((state: RootState) => state.loadingReducer);
  const wyreEligible = useSelector(wyreEligibleSelector);

  const goPreviousScreen = () => NavigationService.navigate('HomeStack');
  const onLearnMore = () => {};
  const onMaybeLater = () => {};

  return (
    <AppLayout containerStyle={styles.container} viewStyle={styles.viewWrapper}>
      <View style={styles.nav}>
        <TopNav title="Investments Pod" goPreviousScreen={goPreviousScreen} />
      </View>
      <InfoCard
        IconSvg={InvestmentsIcon}
        labelText="Investments"
        rightTopText="Balance"
        rightBottomText={'$' + balance}
        cardStyle={styles.infoCardMargin}
      />
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

      <TransactionHistoryCard
        podContext="Investments"
        historyEntries={transactionHistory}
      />
      <View></View>
      {isLoading && <Loading />}
    </AppLayout>
  );
};

export default InvestmentsPod;
