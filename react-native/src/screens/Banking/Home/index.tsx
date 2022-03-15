import React, {useEffect, useState} from 'react';
import {TextStyle, View, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {PlaidLink, LinkSuccess, LinkExit} from 'react-native-plaid-link-sdk';
import {useSelector} from 'react-redux';
import {API, graphqlOperation} from 'aws-amplify';
import {GraphQLResult} from '@aws-amplify/api';

import AppLayout from 'src/components/layout/AppLayout';
import Button from 'src/components/common/Button';
import {Text} from 'src/components/common/Texts';
import {PodsCardGradient, PODsSteps} from 'src/utils/constants';
import ThreeDotsIcon from 'src/assets/icons/three-dots.svg';
import NavigationService from 'src/navigation/NavigationService';
import {generateTextStyle} from 'src/utils/functions';
import UserHomeModal from 'src/components/common/UserHomeModal';
import ProcessingIcon from 'src/assets/icons/processing.svg';
import SpendingIcon from 'src/assets/icons/spending.svg';
import InvestmentIcon from 'src/assets/icons/investment.svg';
import SavingIcon from 'src/assets/icons/saving.svg';
import SwitchIcon from 'src/assets/icons/switch.svg';
import {RootState} from 'src/store/root-state';
import {createPlaidLink, updatePlaidLink} from 'src/graphql/mutations';
import {CreatePlaidLink} from 'src/types/graphql';
import Loading from 'src/components/common/Loading';

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
  const {step} = useSelector((state: RootState) => state.bankingReducer);
  const {user} = useSelector((state: RootState) => state.userReducer);
  const [linkToken, setLinkToken] = useState('');
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (user?.id) {
      getPlaidLinkToken(user.id);
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

  const onPlaidSuccessHandler = async (success: LinkSuccess) => {
    setLoading(true);
    const res = await API.graphql(
      graphqlOperation(updatePlaidLink, {
        athleteId: user?.id,
        accessToken: success.publicToken,
      }),
    );
    setLoading(false);
    NavigationService.navigate('TransferStack');
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
        <Text type="Title/Medium">PLAYER'S ACCOUNT</Text>
      </View>
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
          {!!linkToken && (
            <View>
              {step === PODsSteps[0] ? (
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
              ) : (
                <Button disabled>
                  <Text type="Body/Large">Transfer from another bank</Text>
                </Button>
              )}
            </View>
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
      <View style={styles.subTitle}>
        <Text type="Title/Medium">PODS</Text>
        {step === PODsSteps[2] && (
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
          <View style={styles.podItem}>
            <View style={styles.podLabel}>
              <SpendingIcon />
              <Text type="Body/Large" style={styles.podLabelText}>
                Spending
              </Text>
            </View>
            <View>
              <Text type="Title/Small" style={styles.balanceLabel}>
                Balance
              </Text>
              <Text type="Headline/Small">$0.00</Text>
            </View>
          </View>
          <View style={styles.podItem}>
            <View style={styles.podLabel}>
              <InvestmentIcon />
              <Text type="Body/Large" style={styles.podLabelText}>
                Investments
              </Text>
            </View>
            <View>
              <Text type="Title/Small" style={styles.balanceLabel}>
                Balance
              </Text>
              <Text type="Headline/Small">$0.00</Text>
            </View>
          </View>
          <View style={styles.podItem}>
            <View style={styles.podLabel}>
              <SavingIcon />
              <Text type="Body/Large" style={styles.podLabelText}>
                Saving
              </Text>
            </View>
            <View>
              <Text type="Title/Small" style={styles.balanceLabel}>
                Balance
              </Text>
              <Text type="Headline/Small">$0.00</Text>
            </View>
          </View>
        </View>
      )}
      <UserHomeModal
        visible={isModalVisible}
        step={step}
        onClose={() => setModalVisible(false)}
      />
      {loading && <Loading />}
    </AppLayout>
  );
};

export default Home;
