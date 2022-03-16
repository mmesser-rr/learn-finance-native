import React, {useEffect} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {Text} from 'src/components/common/Texts';
import AppLayout from 'src/components/layout/AppLayout';
import NavigationService from 'src/navigation/NavigationService';
import TopNav from 'src/components/common/TopNav';
import Loading from 'src/components/common/Loading';
import GoIcon from 'src/assets/icons/go.svg';
import {twoDecimalFormatter} from 'src/utils/functions';
import * as bankingActions from 'src/store/actions/bankingActions';
import {RootState} from 'src/store/root-state';
import {PlaidAccountDetail} from 'src/types/API';

import styles from './styles';

const PodSelectAccount: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(bankingActions.getAccounts());
  }, []);

  const {accounts} = useSelector((state: RootState) => state.bankingReducer);
  const {isLoading} = useSelector((state: RootState) => state.loadingReducer);

  const onContinue = (account: PlaidAccountDetail) => {
    dispatch(bankingActions.accountSelected(account));
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
        {accounts &&
          !isLoading &&
          accounts.map(account => (
            <View style={styles.accountWrapper} key={account.account_id}>
              <TouchableOpacity
                style={styles.account}
                onPress={() => onContinue(account)}>
                <View>
                  <View>
                    <Text type="Body/Large">
                      {account.name} - {account.mask}
                    </Text>
                  </View>
                  <View>
                    <Text type="Body/Large">
                      $
                      {twoDecimalFormatter.format(
                        account.balances?.available ?? 0,
                      )}
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
      {isLoading && <Loading />}
    </AppLayout>
  );
};

export default PodSelectAccount;
