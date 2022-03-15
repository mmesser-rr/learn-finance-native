import React from 'react';
import {View} from 'react-native';
import dayjs from 'dayjs';

import SubmitButton from 'src/components/common/SubmitButton';
import {Text} from 'src/components/common/Texts';
import AppLayout from 'src/components/layout/AppLayout';
import TopNav from 'src/components/common/TopNav';
import EditIcon from 'src/assets/icons/edit.svg';
import NavigationService from 'src/navigation/NavigationService';
import InfoList, {InfoItemInterface} from 'src/components/common/InfoList';
import { twoDecimalFormatter } from 'src/utils/functions';

import styles from './styles';

const WithdrawReview: React.FC = () => {
  const onWithdraw = () => NavigationService.navigate('UserBankingStack', {screen: 'WithdrawProcessed'});

  const list: InfoItemInterface[] = [
    {
      label: 'Recipient Name',
      data: (
        <>
          <Text type="Body/Large">John Smith</Text>
          <EditIcon style={styles.editIcon} />
        </>
      )
    },
    {
      label: 'Routing Number',
      data: (
        <>
          <Text type="Body/Large">584 382 483</Text>
          <EditIcon style={styles.editIcon} />
        </>
      )
    },
    {
      label: 'Account Number',
      data: (
        <>
          <Text type="Body/Large">835 483 495</Text>
          <EditIcon style={styles.editIcon} />
        </>
      )
    },
    {
      label: 'Amount',
      data: (
        <>
          <Text type="Body/Large">${twoDecimalFormatter.format(50)}</Text>
          <EditIcon style={styles.editIcon} />
        </>
      )
    },
    {
      label: 'Date',
      data: <Text type="Body/Large">{dayjs('2021-12-09').format('MM/DD/YYYY')}</Text>
    }
  ];

  return (
    <AppLayout containerStyle={styles.container} viewStyle={styles.viewWrapper}>
      <View style={styles.nav}>
        <TopNav
          title="Withdraw"
          goPreviousScreen={() => NavigationService.navigate('UserBankingStack', {screen: 'WithdrawAmount'})}
          goCloseScreen={() => {}}
        />
      </View>
      <View>
        <Text type="Body/Large">Please review the transfer.</Text>
      </View>
      <View style={styles.contentContainer}>
        <View>
          <InfoList list={list} />
        </View>
        <View>
          <Text style={styles.center} type="Body/Large">
            By clicking 'withdraw', I agree to withdraw the above amount of money from my bank account on the date shown above
          </Text>
          <SubmitButton
            isValid={true}
            actionLabel="Withdraw"
            style={styles.submit}
            onSubmit={onWithdraw}
          />
          <Text style={styles.center} type="Title/Small">
            Transactions made after 3:00pm [ET] or on a weekend or holiday will be processed the next business day. It is recommended that you print a copy of this automation and maintain it for your record.
          </Text>
        </View>
      </View>
    </AppLayout>
  );
};

export default WithdrawReview;
