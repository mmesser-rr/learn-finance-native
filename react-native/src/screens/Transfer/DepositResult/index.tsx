import React, {useEffect, useMemo, useState} from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {format} from 'date-fns';

import styles from './styles';
import {Text} from 'src/components/common/Texts';
import SubmitButton from 'src/components/common/SubmitButton';
import Loading from 'src/components/common/Loading';
import InfoCard from 'src/components/common/InfoCard';
import SecondaryButton from 'src/components/common/SecondaryButton';
import AppLayout from 'src/components/layout/AppLayout';
import NavigationService from 'src/navigation/NavigationService';
import SuccessIcon from 'src/assets/icons/deposit-success.svg';
import DepositIcon from 'src/assets/icons/deposit-red.svg';
import FailedIcon from 'src/assets/icons/exclamation-orange-yellow-gradient.svg';
import SpendingIcon from 'src/assets/icons/spending.svg';
import InvestmentIcon from 'src/assets/icons/investment.svg';
import SavingIcon from 'src/assets/icons/saving.svg';
import {twoDecimalFormatter} from 'src/utils/functions';
import * as bankingActions from 'src/store/actions/bankingActions';
import {RootState} from 'src/store/root-state';
import {RecentTransaction} from 'src/types/API';

const DepositResult: React.FC = () => {
  const dispatch = useDispatch();
  const [deposit, setDeposit] = useState<RecentTransaction | null>(null);
  const [index, setIndex] = useState(0);

  const {isLoading} = useSelector((state: RootState) => state.loadingReducer);
  const {recentTransactions} = useSelector(
    (state: RootState) => state.bankingReducer,
  );

  useEffect(() => {
    dispatch(bankingActions.getRecentTransactions());
  }, []);

  useEffect(() => {
    if (!!recentTransactions) {
      if (recentTransactions.length > 0) {
        setDeposit(recentTransactions[index]);
      } else {
        goToHome();
      }
    }
  }, [recentTransactions]);

  const calculatedValues = useMemo(() => {
    if (!deposit) {
      return null;
    }
    const date = new Date(deposit.updatedAt);
    const spendingFactor = (deposit.podAllocation?.SPENDING ?? 0) / 100;
    const investmentsFactor = (deposit.podAllocation?.INVESTMENTS ?? 0) / 100;
    const savingsFactor = (deposit.podAllocation?.SAVINGS ?? 0) / 100;
    const podsHaveBeenSetUp =
      spendingFactor > 0 || investmentsFactor > 0 || savingsFactor > 0;
    return {
      depositDate: format(date, 'MMM do, yyyy'),
      spendingAmount: twoDecimalFormatter.format(
        (deposit.amount ?? 0) * spendingFactor,
      ),
      investmentsAmount: twoDecimalFormatter.format(
        (deposit.amount ?? 0) * investmentsFactor,
      ),
      savingsAmount: twoDecimalFormatter.format(
        (deposit.amount ?? 0) * savingsFactor,
      ),
      podsHaveBeenSetUp: podsHaveBeenSetUp,
      successBodyText: podsHaveBeenSetUp
        ? 'Your deposit has arrived.'
        : 'Your deposit has arrived. We will need to allocate it to the Pods. We can show you how to set them up.',
    };
  }, [deposit]);

  const onContinue = () => {
    dispatch(
      bankingActions.markRecentTransactionRead(
        deposit!.id,
        deposit!.transactionId,
      ),
    );
    const newIndex = index + 1;
    if (recentTransactions![newIndex]) {
      setDeposit(recentTransactions![newIndex]);
      setIndex(newIndex);
    } else {
      goToHome();
    }
  };
  const setUpPods = () => {
    dispatch(
      bankingActions.markRecentTransactionRead(
        deposit!.id,
        deposit!.transactionId,
      ),
    );
    NavigationService.navigate('TransferStack', {screen: 'SetupPods'});
  };
  const depositAgain = () => NavigationService.navigate('HomeStack'); // TODO: navigate to deposit flow
  const goToHome = () => NavigationService.navigate('HomeStack');

  const renderSuccess = () => (
    <>
      <View style={styles.iconWrapper}>
        <SuccessIcon />
      </View>
      <View>
        <Text type="Headline/Small" style={styles.head}>
          Success!
        </Text>
      </View>
      <View style={styles.captionContainer}>
        <Text type="Body/Large" style={styles.caption}>
          {calculatedValues?.successBodyText}
        </Text>
      </View>
      <InfoCard
        IconSvg={DepositIcon}
        labelText="Deposit"
        rightTopText={calculatedValues!.depositDate}
        rightBottomText={'$' + twoDecimalFormatter.format(deposit!.amount ?? 0)}
        cardStyle={
          calculatedValues?.podsHaveBeenSetUp
            ? styles.depositCardSuccess
            : styles.depositCardNoPods
        }
      />
      {calculatedValues?.podsHaveBeenSetUp ? (
        <>
          <View style={styles.podsAllocationContainer}>
            <Text type="Title/Medium" style={styles.podsAllocation}>
              PODS ALLOCATION
            </Text>
            <InfoCard
              IconSvg={SpendingIcon}
              labelText="Spending"
              rightTopText={deposit?.podAllocation?.SPENDING + '%'}
              rightBottomText={'$' + calculatedValues!.spendingAmount}
            />
            <InfoCard
              IconSvg={InvestmentIcon}
              labelText="Investments"
              rightTopText={deposit?.podAllocation?.INVESTMENTS + '%'}
              rightBottomText={'$' + calculatedValues!.investmentsAmount}
            />
            <InfoCard
              IconSvg={SavingIcon}
              labelText="Savings"
              rightTopText={deposit?.podAllocation?.SAVINGS + '%'}
              rightBottomText={'$' + calculatedValues!.savingsAmount}
            />
          </View>
          <View style={styles.podsExplanation}>
            <Text type="Title/Small">
              You can Move Money between Pods or Change Pods Allocation on Home
              screen.{' '}
            </Text>
          </View>
          <View style={styles.actionWrapper}>
            <SubmitButton
              isValid={true}
              actionLabel="Continue"
              onSubmit={onContinue}
            />
          </View>
        </>
      ) : (
        <View style={styles.actionWrapper}>
          <SubmitButton
            isValid={true}
            actionLabel="Set up Pods"
            onSubmit={setUpPods}
          />
        </View>
      )}
    </>
  );

  const renderFailure = () => (
    <>
      <View style={styles.iconWrapper}>
        <FailedIcon />
      </View>
      <View>
        <Text type="Headline/Small" style={styles.head}>
          Failed
        </Text>
      </View>
      <View>
        <Text type="Body/Large" style={styles.caption}>
          Your deposit failed. These funds remain in your bank account. We
          recommend contacting your bank for assistance or trying another bank.
        </Text>
      </View>

      <InfoCard
        IconSvg={DepositIcon}
        labelText="Deposit"
        rightTopText={calculatedValues!.depositDate}
        rightBottomText={'$' + twoDecimalFormatter.format(deposit!.amount ?? 0)}
        rightBottomStyle={styles.strikethrough}
        cardStyle={styles.depositCardFailure}
      />
      <View style={styles.actionWrapper}>
        <SubmitButton
          isValid={true}
          actionLabel="Deposit Again"
          onSubmit={depositAgain}
        />
        <SecondaryButton
          isValid={true}
          actionLabel="Go to Home"
          onPress={goToHome}
        />
      </View>
    </>
  );

  return (
    <AppLayout containerStyle={styles.container} viewStyle={styles.viewWrapper}>
      {!isLoading && deposit?.status === 'Completed' && renderSuccess()}
      {!isLoading &&
        !!deposit &&
        deposit.status !== 'Completed' &&
        renderFailure()}
      {(!deposit || isLoading) && <Loading />}
    </AppLayout>
  );
};

export default DepositResult;
