import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {format} from 'date-fns';

import SubmitButton from 'src/components/common/SubmitButton';
import {Text} from 'src/components/common/Texts';
import AppLayout from 'src/components/layout/AppLayout';
import TopNav from 'src/components/common/TopNav';
import InfoList, {InfoItemInterface} from 'src/components/common/InfoList';
import Loading from 'src/components/common/Loading';
import EditIcon from 'src/assets/icons/edit.svg';
import {RootState} from 'src/store/root-state';
import * as bankingActions from 'src/store/actions/bankingActions';

import styles from './styles';
import NavigationService from 'src/navigation/NavigationService';

const TransferReview: React.FC = () => {
  const dispatch = useDispatch();
  const {isLoading} = useSelector((state: RootState) => state.loadingReducer);
  const {selectedAccount, transferAmount, unitTokenExpiration} = useSelector(
    (state: RootState) => state.bankingReducer,
  );
  const today = format(new Date(), 'MM/dd/yyyy');

  const onDeposit = () => {
    if (!unitTokenExpiration || Date.now() > unitTokenExpiration) {
      dispatch(bankingActions.initiateUnitVerificationChallenge());
      NavigationService.navigate('DepositUnitAuthVerify');
    } else {
      dispatch(bankingActions.createDeposit());
    }
  };
  const goBack = () => NavigationService.goBack();
  const goToAccountSelection = () =>
    NavigationService.navigate('PodSelectAccount');

  const list: InfoItemInterface[] = [
    {
      label: 'Amount',
      data: (
        <>
          <Text type="Body/Large">${transferAmount}</Text>
          <TouchableOpacity onPress={goBack}>
            <EditIcon style={styles.editIcon} />
          </TouchableOpacity>
        </>
      ),
    },
    {
      label: 'From',
      data: (
        <>
          <Text type="Body/Large">{selectedAccount?.name}</Text>
          <TouchableOpacity onPress={goToAccountSelection}>
            <EditIcon style={styles.editIcon} />
          </TouchableOpacity>
        </>
      ),
    },
    {
      label: 'Date',
      data: <Text type="Body/Large">{today}</Text>,
    },
  ];

  return (
    <AppLayout containerStyle={styles.container} viewStyle={styles.viewWrapper}>
      <View style={styles.nav}>
        <TopNav title="Deposit" goPreviousScreen={goBack} />
      </View>
      <View>
        <Text type="Body/Large">Please review the deposit.</Text>
      </View>
      <View style={styles.contentContainer}>
        <View>
          <InfoList list={list} />
        </View>
        <View>
          <Text style={styles.center} type="Body/Large">
            By clicking 'deposit', I agree to debit the following amount of
            money from my bank account on the date shown above
          </Text>
          <SubmitButton
            isValid={true}
            actionLabel="Deposit"
            style={styles.submit}
            onSubmit={onDeposit}
          />
          <Text style={styles.center} type="Title/Small">
            Transactions made after 3:00pm [ET] or on a weekend or holiday will
            be processed the next business day. It is recommended that you print
            a copy of this automation and maintain it for your record.
          </Text>
        </View>
      </View>
      {isLoading && <Loading />}
    </AppLayout>
  );
};

export default TransferReview;
