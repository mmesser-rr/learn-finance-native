import React, {useEffect, useState} from 'react';
import {TextStyle, View, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {PlaidLink, LinkSuccess, LinkExit} from 'react-native-plaid-link-sdk';
import {getUniqueId} from 'react-native-device-info';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-native-modal';

import AppLayout from 'src/components/layout/AppLayout';
import Button from 'src/components/common/Button';
import {Text} from 'src/components/common/Texts';
import {PodsCardGradient} from 'src/utils/constants';
import ThreeDotsIcon from 'src/assets/icons/three-dots.svg';
import NavigationService from 'src/navigation/NavigationService';
import {createLinkToken, getExistingLinkToken} from 'src/services/plaid';
import { RootState } from 'src/store';
import { generateTextStyle } from 'src/utils/functions';
import { updateHomeStep } from 'src/store/actions/bankingActions';

import styles from './styles';
import UserHomeModal from 'src/components/common/UserHomeModal';

interface CardProps {
  style?: TextStyle;
  active: boolean;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({active, children, style: propsStyle}) => {
  const style = generateTextStyle(styles.card, propsStyle);
  if (active) {
    return (
      <LinearGradient
        colors={PodsCardGradient}
        style={style}
      >{children}</LinearGradient>
    );
  }

  return (
    <View style={style}>{children}</View>
  );
};

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const { step } = useSelector((state: RootState) => state.bankingReducer);
  const [linkToken, setLinkToken] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    getPlaidLinkToken();

    return () => {
      dispatch(updateHomeStep('account'));
    };
  }, []);

  const getPlaidLinkToken = async () => {
    let token = await AsyncStorage.getItem('@plaid_link_token');

    if (token && (await getExistingLinkToken(token))) {
      return setLinkToken(token);
    }

    token = await createLinkToken(getUniqueId());

    if (token) {
      setLinkToken(token);
      await AsyncStorage.setItem('@plaid_link_token', token);
    }
  };

  const onSetupDirectDeposit = () =>
    NavigationService.navigate('TransferStack', {screen: 'DirectDeposit'});

  const onPlaidSuccessHandler = (success: LinkSuccess) => {
    console.log(success);
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

  const isPods = step === 'pods';

  return (
    <AppLayout containerStyle={styles.container} viewStyle={styles.viewStyle}>
      <View style={styles.dotMenu}>
        <TouchableOpacity onPress={() => onMenu()}>
          <ThreeDotsIcon />
        </TouchableOpacity>
      </View>
      <View style={styles.title}>
        <Text type="Headline/Small">Hi John!</Text>
      </View>
      <View style={styles.subTitle}>
        <Text type="Title/Medium">PLAYER'S ACCOUNT</Text>
      </View>
      <Card active={!isPods} style={styles.accountCard}>
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
              {isPods ? (
                <Button disabled>
                  <Text type="Body/Large">Transfer from another bank</Text>
                </Button>
              ) : (
                <PlaidLink
                  tokenConfig={{
                    token: linkToken,
                    noLoadingState: false,
                  }}
                  onSuccess={(success: LinkSuccess) =>
                    onPlaidSuccessHandler(success)
                  }
                  onExit={(exit: LinkExit) => onPlaidExitHandler(exit)}
                >
                  <View style={styles.transferWrapper}>
                    <Text type="Body/Large" style={styles.transfer}>
                      Transfer from another bank
                    </Text>
                  </View>
                </PlaidLink>
              )}
            </View>
          )}
          <View>
            <Button actionStyle={styles.deposit} onPress={onSetupDirectDeposit} disabled={isPods}>
              <Text type="Body/Large">Set up direct deposit</Text>
            </Button>
          </View>
        </View>
      </Card>
      <View style={styles.subTitle}>
        <Text type="Title/Medium">PODS</Text>
      </View>
      <Card active={isPods}>
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
            <Button onPress={onSetupPods} disabled={!isPods}>
              <Text type="Body/Large">Set up Pods</Text>
            </Button>
          </View>
        </View>
      </Card>
      <Modal isVisible={isModalVisible} style={styles.modal} onBackdropPress={() => setModalVisible(false)}>
        <UserHomeModal />
      </Modal>
    </AppLayout>
  );
};

export default Home;
