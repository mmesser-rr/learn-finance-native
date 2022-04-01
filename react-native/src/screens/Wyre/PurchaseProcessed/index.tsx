import React from 'react';
import {View} from 'react-native';

import SubmitButton from 'src/components/common/SubmitButton';
import {Text} from 'src/components/common/Texts';
import AppLayout from 'src/components/layout/AppLayout';
import ProcessIcon from 'src/assets/icons/process.svg';
import InfoList, {InfoItemInterface} from 'src/components/common/InfoList';

import styles from './styles';
import NavigationService from 'src/navigation/NavigationService';

const list: InfoItemInterface[] = [
  {
    label: 'Total',
    data: <Text type="Body/Large">$50.00</Text>,
  },
  {
    label: 'Transaction Fee',
    data: <Text type="Body/Large">$50.00</Text>,
  },
  {
    label: 'Purchase',
    data: <Text type="Body/Large">$50.00</Text>,
  },
];

const PurchaseProcessed: React.FC = () => {
  const onDone = () => {
    NavigationService.navigate('HomeStack');
  };

  return (
    <AppLayout containerStyle={styles.container} viewStyle={styles.viewWrapper}>
      <View>
        <View style={styles.processIcon}>
          <ProcessIcon />
        </View>
        <View style={styles.header}>
          <Text type="Headline/Small" style={styles.center}>
            Submitted
          </Text>
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

export default PurchaseProcessed;
