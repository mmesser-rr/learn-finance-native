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
import {twoDecimalFormatter} from 'src/utils/functions';

import styles from './styles';

const PurchaseReview: React.FC = () => {
  const onPurchase = () => {
    // TODO:
  };

  const list: InfoItemInterface[] = [
    {
      label: 'Total',
      data: (
        <>
          <Text type="Body/Large">John Smith</Text>
          <EditIcon style={styles.editIcon} />
        </>
      ),
    },
    {
      label: 'Transaction Fee',
      data: (
        <>
          <Text type="Body/Large">584 382 483</Text>
          <EditIcon style={styles.editIcon} />
        </>
      ),
    },
    {
      label: 'Purchase',
      data: (
        <>
          <Text type="Body/Large">835 483 495</Text>
          <EditIcon style={styles.editIcon} />
        </>
      ),
    },
  ];

  return (
    <AppLayout containerStyle={styles.container} viewStyle={styles.viewWrapper}>
      <View style={styles.nav}>
        <TopNav
          title="Purchase"
          goPreviousScreen={() => {}}
          goCloseScreen={() => {}}
        />
      </View>
      <View>
        <Text type="Body/Large">Please review the transaction.</Text>
      </View>
      <View style={styles.contentContainer}>
        <View>
          <InfoList list={list} />
        </View>
        <View>
          <Text style={styles.center} type="Body/Large">
            By clicking ‘purchase’, I agree to lorem ipsum dolor sit amet,
            consectetur adipiscing elit. In praesent at egestas facilisi. (need
            legal language)
          </Text>
          <SubmitButton
            isValid={true}
            actionLabel="Purchase"
            style={styles.submit}
            onSubmit={onPurchase}
          />
          <Text style={styles.center} type="Title/Small">
            Transactions made after 3:00pm [ET] or on a weekend or holiday will
            be processed the next business day. It is recommended that you print
            a copy of this automation and maintain it for your record.
          </Text>
        </View>
      </View>
    </AppLayout>
  );
};

export default PurchaseReview;
