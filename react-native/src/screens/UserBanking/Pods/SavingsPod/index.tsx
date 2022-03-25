import React, {useEffect} from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import styles from './styles';
import NavigationService from 'src/navigation/NavigationService';
import AppLayout from 'src/components/layout/AppLayout';
import TopNav from 'src/components/common/TopNav';
import Loading from 'src/components/common/Loading';
import InfoCard from 'src/components/common/InfoCard';
import TransactionHistoryCard from 'src/components/common/TransactionHistoryCard';
import SavingsIcon from 'src/assets/icons/saving.svg';
import {twoDecimalFormatter} from 'src/utils/functions';
import * as bankingActions from 'src/store/actions/bankingActions';
import {RootState} from 'src/store/root-state';

const SavingsPod: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(bankingActions.getTransactionHistory());
  }, []);

  const transactionHistory = useSelector((state: RootState) =>
    state.bankingReducer.transactionHistory?.filter(entry =>
      entry.attributes?.description?.includes('Savings'),
    ),
  );
  const balance = useSelector((state: RootState) =>
    twoDecimalFormatter.format(
      (state.bankingReducer.savingsAccount?.attributes?.balance ?? 0) / 100,
    ),
  );
  const {isLoading} = useSelector((state: RootState) => state.loadingReducer);

  const goPreviousScreen = () => NavigationService.navigate('HomeStack');

  return (
    <AppLayout containerStyle={styles.container} viewStyle={styles.viewWrapper}>
      <View style={styles.nav}>
        <TopNav title="Savings Pod" goPreviousScreen={goPreviousScreen} />
      </View>
      <InfoCard
        IconSvg={SavingsIcon}
        labelText="Savings"
        rightTopText="Balance"
        rightBottomText={'$' + balance}
      />
      <TransactionHistoryCard
        historyEntries={transactionHistory}
        podContext="Savings"
      />
      <View></View>
      {isLoading && <Loading />}
    </AppLayout>
  );
};

export default SavingsPod;
