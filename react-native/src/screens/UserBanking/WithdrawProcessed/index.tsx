import React from 'react';
import {View} from 'react-native';

import SubmitButton from 'src/components/common/SubmitButton';
import {Text} from 'src/components/common/Texts';
import AppLayout from 'src/components/layout/AppLayout';
import ProcessIcon from 'src/assets/icons/process.svg';
import InfoList, { InfoItemInterface } from 'src/components/common/InfoList';

import styles from './styles';
import NavigationService from 'src/navigation/NavigationService';

const list: InfoItemInterface[] = [
  {
    label: 'Recipient Name',
    data: <Text type="Body/Large">John Smith</Text>
  },
  {
    label: 'Account Number',
    data: <Text type="Body/Large">835 483 495</Text>
  },
  {
    label: 'Routing Number',
    data: <Text type="Body/Large">584 382 483</Text>
  },
  {
    label: 'Amount',
    data: <Text type="Body/Large">$50.00</Text>
  },
  {
    label: 'Date',
    data: <Text type="Body/Large">12/09/2021</Text>
  }
];

const WithdrawProcessed: React.FC = () => {
  const onDone = () => {
    // NavigationService.navigate('HomeStack');
  };

  return (
    <AppLayout containerStyle={styles.container} viewStyle={styles.viewWrapper}>
      <View>
        <View style={styles.processIcon}>
          <ProcessIcon />
        </View>
        <View style={styles.header}>
          <Text type="Headline/Small" style={styles.center}>Processed</Text>
        </View>
        <View>
          <Text type="Body/Large" style={styles.center}>
            Your withdraw has been processed.
          </Text>
        </View>
        <View style={styles.list}>
          <InfoList list={list} />
        </View>
      </View>
      <View>
        <SubmitButton
          isValid={true}
          actionLabel="Return Home"
          style={styles.submit}
          onSubmit={onDone}
        />
      </View>
    </AppLayout>
  );
};

export default WithdrawProcessed;
