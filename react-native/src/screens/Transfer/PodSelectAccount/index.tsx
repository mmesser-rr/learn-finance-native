import React from 'react';
import {TouchableOpacity, View} from 'react-native';

import {Text} from 'src/components/common/Texts';
import AppLayout from 'src/components/layout/AppLayout';
import NavigationService from 'src/navigation/NavigationService';
import TopNav from 'src/components/common/TopNav';
import GoIcon from 'src/assets/icons/go.svg';
import {twoDecimalFormatter} from 'src/utils/functions';

import styles from './styles';

const accounts = [
  {
    id: 1,
    address: 'Wells Fargo Checking - 4931',
    money: 2301.3,
  },
  {
    id: 2,
    address: 'Wells Fargo Saving - 4311',
    money: 323.56,
  },
];

const PodSelectAccount: React.FC = () => {
  const onContinue = (id: any) => {
    NavigationService.navigate('TransferAmount');
  };
  const goPreviousScreen = () => NavigationService.navigate('HomeStack');
  const goCloseScreen = () => NavigationService.navigate('HomeStack');

  return (
    <AppLayout containerStyle={styles.container} viewStyle={styles.viewWrapper}>
      <View style={styles.nav}>
        <TopNav
          title="Deposit"
          goPreviousScreen={goPreviousScreen}
          goCloseScreen={goCloseScreen}
        />
      </View>
      <View>
        <Text type="Body/Large" style={styles.description}>
          Please select the account to debit:
        </Text>
      </View>
      <View>
        {accounts.map(account => (
          <View style={styles.accountWrapper}>
            <TouchableOpacity
              style={styles.account}
              onPress={() => onContinue(account.id)}>
              <View>
                <View>
                  <Text type="Body/Large">{account.address}</Text>
                </View>
                <View>
                  <Text type="Body/Large">
                    ${twoDecimalFormatter.format(account.money)}
                  </Text>
                </View>
              </View>
              <View>
                <GoIcon />
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </AppLayout>
  );
};

export default PodSelectAccount;
