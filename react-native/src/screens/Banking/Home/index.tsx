import React, {useEffect, useMemo, useState} from 'react';
import {TextStyle, View, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {PlaidLink, LinkSuccess, LinkExit} from 'react-native-plaid-link-sdk';
import {useDispatch, useSelector} from 'react-redux';
import {API, graphqlOperation} from 'aws-amplify';
import {GraphQLResult} from '@aws-amplify/api';

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

import styles from './styles';

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
  const hasMoneyInAccount = useSelector(
    (state: RootState) => (state.bankingReducer.totalBalance ?? 0) > 0,
  );
  const {user} = useSelector((state: RootState) => state.userReducer);
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

    if (
      (user?.podSettings?.SPENDING ?? 0) > 0 ||
      (user?.podSettings?.INVESTMENTS ?? 0) > 0 ||
      (user?.podSettings?.SAVINGS ?? 0) > 0
    ) {
      dispatch(bankingActions.updateHomeStep(PODsSteps[2]));
    }
  }, [user]);

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
    // NavigationService.navigate('TransferStack');
  };

  const onSetupPods = () => {
    NavigationService.navigate('TransferStack', {screen: 'PodsExplain'});
  };

  const onMenu = () => {
    setModalVisible(true);
  };

  return (
    <AppLayout containerStyle={styles.container} viewStyle={styles.viewStyle}>
      <View style={styles.dotMenu}>
        <TouchableOpacity onPress={() => onMenu()}>
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
            {user?.plaidToken ? (
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
      {step !== PODsSteps[2] && (
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
      {step === PODsSteps[2] && (
        <View>
          <InfoCard
            IconSvg={SpendingIcon}
            labelText="Spending"
            rightTopText="Balance"
            rightBottomText={'$' + amounts.spending}
          />
          <InfoCard
            IconSvg={InvestmentIcon}
            labelText="Investments"
            rightTopText="Balance"
            rightBottomText={'$' + amounts.investments}
          />
          <InfoCard
            IconSvg={SavingIcon}
            labelText="Savings"
            rightTopText="Balance"
            rightBottomText={'$' + amounts.savings}
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
