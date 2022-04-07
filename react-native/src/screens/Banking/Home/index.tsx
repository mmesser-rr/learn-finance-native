import React, {useEffect, useMemo, useState} from 'react';
import {TextStyle, View, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {PlaidLink, LinkSuccess, LinkExit} from 'react-native-plaid-link-sdk';
import {useDispatch, useSelector} from 'react-redux';
import {API, graphqlOperation} from 'aws-amplify';
import {GraphQLResult} from '@aws-amplify/api';

import styles from './styles';
import AppLayout from 'src/components/layout/AppLayout';
import Button from 'src/components/common/Button';
import {Text} from 'src/components/common/Texts';
import {
  GradientButtonColors,
  PodsCardGradient,
  PODsSteps,
} from 'src/utils/constants';
import ThreeDotsIcon from 'src/assets/icons/three-dots.svg';
import NavigationService from 'src/navigation/NavigationService';
import {generateTextStyle, twoDecimalFormatter} from 'src/utils/functions';
import UserHomeModal from 'src/components/common/UserHomeModal';
import DepositIcon from 'src/assets/icons/deposit.svg';
import ProcessingIcon from 'src/assets/icons/processing.svg';
import SpendingIcon from 'src/assets/icons/spending.svg';
import InvestmentIcon from 'src/assets/icons/investment.svg';
import SavingIcon from 'src/assets/icons/saving.svg';
import SwitchIcon from 'src/assets/icons/switch.svg';
import SwitchWhiteIcon from 'src/assets/icons/switch-white.svg';
import {RootState} from 'src/store/root-state';
import {createPlaidLink, updatePlaidLink} from 'src/graphql/mutations';
import {CreatePlaidLink} from 'src/types/graphql';
import Loading from 'src/components/common/Loading';
import InfoCard from 'src/components/common/InfoCard';
import * as userActions from 'src/store/actions/userActions';
import * as bankingActions from 'src/store/actions/bankingActions';
import {hasMoneyInAccountSelector} from 'src/store/selectors/banking';
import {wyreEligibleSelector} from 'src/store/selectors/wyre';

interface CardProps {
  style?: TextStyle;
  active: boolean;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({active, children, style: propsStyle}) => {
  const style = generateTextStyle(styles.card, propsStyle);
  if (active) {
    return (
      <LinearGradient colors={PodsCardGradient} style={style}>
        {children}
      </LinearGradient>
    );
  }

  return <View style={style}>{children}</View>;
};

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const {
    step,
    totalBalance,
    spendingAccount,
    investmentsAccount,
    savingsAccount,
  } = useSelector((state: RootState) => state.bankingReducer);
  const hasMoneyInAccount = useSelector(hasMoneyInAccountSelector);
  const hasSetUpPods = useSelector((state: RootState) => {
    return (
      state.userReducer.user &&
      state.userReducer.user.podSettings &&
      (state.userReducer.user.podSettings.SPENDING > 0 ||
        state.userReducer.user.podSettings.INVESTMENTS > 0 ||
        state.userReducer.user.podSettings.SAVINGS > 0)
    );
  });
  const hasPlaidConnection = useSelector((state: RootState) => {
    return (
      (state.userReducer.user && state.userReducer.user.plaidToken) ||
      (state.bankingReducer.plaidAccounts &&
        state.bankingReducer.plaidAccounts.length > 0)
    );
  });
  const {user} = useSelector((state: RootState) => state.userReducer);
  const wyreEligible = useSelector(wyreEligibleSelector);
  const investmentsTransactionPending = useSelector((state: RootState) =>
    (state.bankingReducer.transactionHistory ?? []).some(
      entry =>
        entry.attributes?.description?.includes('vest') &&
        entry.attributes?.status === 'Pending',
    ),
  );
  const rewardsPurchaseFailed = useSelector((state: RootState) =>
    (state.bankingReducer.transactionHistory ?? []).some(
      entry =>
        entry.attributes?.description?.includes('Rewards') &&
        entry.attributes?.direction === 'credit' &&
        (entry.attributes?.status === 'Failed' ||
          entry.attributes?.status === 'Cancelled'),
    ),
  );

  const [linkToken, setLinkToken] = useState('');
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);

  const amounts = useMemo(() => {
    return {
      total: twoDecimalFormatter.format((totalBalance ?? 0) / 100),
      spending: twoDecimalFormatter.format(
        (spendingAccount?.attributes?.balance ?? 0) / 100,
      ),
      investments: twoDecimalFormatter.format(
        (investmentsAccount?.attributes?.balance ?? 0) / 100,
      ),
      savings: twoDecimalFormatter.format(
        (savingsAccount?.attributes?.balance ?? 0) / 100,
      ),
    };
  }, [totalBalance, spendingAccount, investmentsAccount, savingsAccount]);

  useEffect(() => {
    if (user?.id) {
      dispatch(bankingActions.getAthleteAccounts());
      dispatch(bankingActions.getBalanceHistory());
    }
    if (user?.id && !user.plaidToken) {
      getPlaidLinkToken(user.id);
    }
  }, [user]);

  useEffect(() => {
    if (hasSetUpPods) {
      dispatch(bankingActions.updateHomeStep(PODsSteps[2]));
    }
  }, [hasSetUpPods]);

  const getPlaidLinkToken = async (athleteId: string) => {
    const {data} = (await API.graphql(
      graphqlOperation(createPlaidLink, {
        athleteId,
      }),
    )) as GraphQLResult<CreatePlaidLink>;

    if (data?.createPlaidLink.link_token) {
      setLinkToken(data.createPlaidLink.link_token);
    }

    setLoading(false);
  };

  const onSetupDirectDeposit = () =>
    NavigationService.navigate('TransferStack', {screen: 'DirectDeposit'});

  const goToDepositSelectAccount = () =>
    NavigationService.navigate('TransferStack', {screen: 'PodSelectAccount'});

  const goToMoveMoney = () =>
    NavigationService.navigate('UserBankingStack', {screen: 'MoveMoney'});

  const goToSpendingPod = () =>
    NavigationService.navigate('UserBankingStack', {screen: 'SpendingPod'});
  const goToInvestmentsPod = () => {
    if (rewardsPurchaseFailed) {
      NavigationService.navigate('WyreStack', {screen: 'PurchaseFailed'});
    } else {
      NavigationService.navigate('UserBankingStack', {
        screen: 'InvestmentsPod',
      });
    }
  };

  const goToSavingsPod = () =>
    NavigationService.navigate('UserBankingStack', {screen: 'SavingsPod'});

  const onPlaidSuccessHandler = async (success: LinkSuccess) => {
    setLoading(true);
    const res = await API.graphql(
      graphqlOperation(updatePlaidLink, {
        athleteId: user?.id,
        accessToken: success.publicToken,
      }),
    );
    dispatch(userActions.updateUser({plaidToken: success.publicToken}));
    setLoading(false);
    goToDepositSelectAccount();
  };

  const onPlaidExitHandler = (exit: LinkExit) => {
    console.log(exit);
  };

  const onSetupPods = () => {
    NavigationService.navigate('TransferStack', {screen: 'PodsExplain'});
  };

  const onMenu = () => {
    setModalVisible(true);
  };

  const goToRewards = () =>
    NavigationService.navigate('WyreStack', {screen: 'WyreIntro'});

  const getInvestmentsTopText = (): string => {
    if (rewardsPurchaseFailed) {
      return 'Transaction Failed';
    } else if (investmentsTransactionPending) {
      return 'Transaction Pending';
    } else {
      return 'Balance';
    }
  };

  return (
    <AppLayout containerStyle={styles.container} viewStyle={styles.viewStyle}>
      <View style={styles.topRow}>
        <View>
          {hasMoneyInAccount && wyreEligible && (
            <Text type="Body/Large" style={styles.link} onPress={goToRewards}>
              New! Rewards Account
            </Text>
          )}
        </View>
        <TouchableOpacity onPress={() => onMenu()} style={styles.dotMenu}>
          <ThreeDotsIcon />
        </TouchableOpacity>
      </View>
      <View style={styles.title}>
        <Text type="Headline/Small">Hi {user?.firstName}!</Text>
      </View>
      <View style={styles.submitted}>
        {step === PODsSteps[2] && (
          <>
            <ProcessingIcon />
            <Text type="Title/Small" style={styles.submittedLabel}>
              1 transfer is submitted
            </Text>
          </>
        )}
      </View>
      <View style={styles.subTitle}>
        <Text type="Title/Medium">BankDAO</Text>
        {hasMoneyInAccount && (
          <View>
            {hasPlaidConnection ? (
              <LinearGradient
                style={styles.buttonLinearGradient}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                locations={[0, 0, 0.2388, 1]}
                colors={GradientButtonColors}>
                <TouchableOpacity
                  onPress={goToDepositSelectAccount}
                  style={styles.depositButton}>
                  <DepositIcon />
                  <Text type="Body/Medium" style={styles.depositButtonText}>
                    Deposit
                  </Text>
                </TouchableOpacity>
              </LinearGradient>
            ) : (
              !!linkToken && (
                <PlaidLink
                  tokenConfig={{
                    token: linkToken,
                    noLoadingState: false,
                  }}
                  onSuccess={(success: LinkSuccess) =>
                    onPlaidSuccessHandler(success)
                  }
                  onExit={(exit: LinkExit) => onPlaidExitHandler(exit)}>
                  <LinearGradient
                    style={styles.buttonLinearGradient}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    locations={[0, 0, 0.2388, 1]}
                    colors={GradientButtonColors}>
                    <View style={styles.depositButton}>
                      <DepositIcon />
                      <Text type="Body/Medium" style={styles.depositButtonText}>
                        Deposit
                      </Text>
                    </View>
                  </LinearGradient>
                </PlaidLink>
              )
            )}
          </View>
        )}
      </View>
      {hasMoneyInAccount ? (
        <>
          <View style={styles.totalBalanceContainer}>
            <Text type="Title/Small">Total Balance</Text>
            <Text type="Headline/Small">${amounts.total}</Text>
          </View>
          <View style={styles.chartContainer}></View>
        </>
      ) : (
        <Card active={step === PODsSteps[0]} style={styles.accountCard}>
          <View style={styles.cardHead}>
            <Text type="Headline/Small">Add money to your account</Text>
          </View>
          <View style={styles.cardBody}>
            <Text type="Body/Large">
              Let's get some money into your account so you can start using it!
            </Text>
          </View>
          <View>
            {hasPlaidConnection ? (
              <Button onPress={goToDepositSelectAccount}>
                <Text type="Body/Large">Transfer from another bank</Text>
              </Button>
            ) : (
              !!linkToken && (
                <PlaidLink
                  tokenConfig={{
                    token: linkToken,
                    noLoadingState: false,
                  }}
                  onSuccess={(success: LinkSuccess) =>
                    onPlaidSuccessHandler(success)
                  }
                  onExit={(exit: LinkExit) => onPlaidExitHandler(exit)}>
                  <View style={styles.transferWrapper}>
                    <Text type="Body/Large" style={styles.transfer}>
                      Transfer from another bank
                    </Text>
                  </View>
                </PlaidLink>
              )
            )}

            <View>
              <Button
                actionStyle={styles.deposit}
                onPress={onSetupDirectDeposit}
                disabled={step !== PODsSteps[0]}>
                <Text type="Body/Large">Set up direct deposit</Text>
              </Button>
            </View>
          </View>
        </Card>
      )}

      <View style={styles.subTitle}>
        <Text type="Title/Medium">PODS</Text>
        {hasMoneyInAccount ? (
          <>
            <LinearGradient
              style={styles.buttonLinearGradient}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={GradientButtonColors}>
              <TouchableOpacity
                onPress={goToMoveMoney}
                style={styles.moveMoneyButton}>
                <SwitchWhiteIcon />
                <Text type="Body/Medium" style={styles.moveMoneyButtonText}>
                  Move Money
                </Text>
              </TouchableOpacity>
            </LinearGradient>
          </>
        ) : (
          <View style={styles.switch}>
            <SwitchIcon />
            <Text type="Body/Medium" style={styles.switchLabel}>
              Move Money
            </Text>
          </View>
        )}
      </View>
      {!hasSetUpPods && (
        <Card active={step === PODsSteps[1]}>
          <View style={styles.cardHead}>
            <Text type="Headline/Small">Let's set up your pods</Text>
          </View>
          <View style={styles.cardBody}>
            <Text type="Body/Large">
              All incoming payments will be divided among your pods. Learn how
              pods can help you financially.
            </Text>
          </View>
          <View>
            <View>
              <Button onPress={onSetupPods} disabled={step !== PODsSteps[1]}>
                <Text type="Body/Large">Set up Pods</Text>
              </Button>
            </View>
          </View>
        </Card>
      )}
      {hasSetUpPods && (
        <View>
          <InfoCard
            IconSvg={SpendingIcon}
            labelText="Spending"
            rightTopText="Balance"
            rightBottomText={'$' + amounts.spending}
            onPress={goToSpendingPod}
          />
          <InfoCard
            IconSvg={InvestmentIcon}
            labelText="Investments"
            rightTopText={getInvestmentsTopText()}
            rightBottomText={'$' + amounts.investments}
            onPress={goToInvestmentsPod}
          />
          <InfoCard
            IconSvg={SavingIcon}
            labelText="Savings"
            rightTopText="Balance"
            rightBottomText={'$' + amounts.savings}
            onPress={goToSavingsPod}
          />
        </View>
      )}
      <UserHomeModal
        visible={isModalVisible}
        step={step}
        onClose={() => setModalVisible(false)}
        hasMoneyInAccount={hasMoneyInAccount}
      />
      {loading && <Loading />}
    </AppLayout>
  );
};

export default Home;
