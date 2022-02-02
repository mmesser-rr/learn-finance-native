import React from 'react';
import { View } from 'react-native';
import SubmitButton from 'src/components/common/SubmitButton';
import { TextNew as Text } from 'src/components/common/Texts';
import AppLayout from 'src/components/layout/AppLayout';
import DepositNav from 'src/components/common/DepositNav';
import EditIcon from 'src/assets/icons/edit.svg';

import styles from './styles';

const TransferReview: React.FC = () => {
  return (
    <AppLayout containerStyle={styles.container} viewStyle={styles.viewWrapper}>
      <View style={styles.nav}>
        <DepositNav />
      </View>
      <View>
        <Text type='Body/Large'>
          Please review the deposit.
        </Text>
      </View>
      <View style={styles.contentContainer}>
        <View>
          <View style={styles.info}>
            <Text style={styles.infoTitle} type='Body/Large'>Deposit</Text>
            <View style={styles.infoData}>
              <Text type='Body/Large'>$500.00</Text>
              <EditIcon style={styles.editIcon} />
            </View>
          </View>
          <View style={styles.info}>
            <Text style={styles.infoTitle} type='Body/Large'>Plaid Account Name</Text>
            <View style={styles.infoData}>
              <Text type='Body/Large'>Total Checking</Text>
              <EditIcon style={styles.editIcon} />
            </View>
          </View>
          <View style={styles.info}>
            <Text style={styles.infoTitle} type='Body/Large'>Date</Text>
            <Text type='Body/Large'>12/09/2021</Text>
          </View>
        </View>
        <View>
          <Text style={styles.center} type='Body/Large'>
            By clicking 'deposit', I agree to debit the following amount of money from my bank account on the date shown above
          </Text>
          <SubmitButton
            isValid={true}
            actionLabel='Continue'
            style={styles.submit}
            onSubmit={() => {}}
          />
          <Text style={styles.center} type='Title/Small'>
            Transactions made after 3:00pm [ET] or on a weekend or holiday will be processed the next business day. It is recommended that you print a copy of this automation and maintain it for your record.
          </Text>
        </View>
      </View>
    </AppLayout>
  );
};

export default TransferReview;
