import React from 'react';
import {View} from 'react-native';

import SubmitButton from 'src/components/common/SubmitButton';
import {Text} from 'src/components/common/Texts';
import AppLayout from 'src/components/layout/AppLayout';
import SuccessIcon from 'src/assets/icons/account-creation-success.svg';
import InfoList, { InfoItemInterface } from 'src/components/common/InfoList';

import styles from './styles';
import NavigationService from 'src/navigation/NavigationService';

const list: InfoItemInterface[] = [
  {
    label: 'From',
    data: <Text type="Body/Large">Spending</Text>
  },
  {
    label: 'To',
    data: <Text type="Body/Large">Investment</Text>
  },
  {
    label: 'Amount',
    data: <Text type="Body/Large">$50.00</Text>
  }
];

const MoneyMoveProcessed: React.FC = () => {
  const onDone = () => {
    NavigationService.navigate('HomeStack');
  };

  return (
    <AppLayout containerStyle={styles.container} viewStyle={styles.viewWrapper}>
      <View>
        <View style={styles.processIcon}>
          <SuccessIcon />
        </View>
        <View style={styles.header}>
          <Text type="Headline/Small" style={styles.center}>Nice Move!</Text>
        </View>
        <View>
          <Text type="Body/Large" style={styles.center}>
            You just moved money between pods.
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

export default MoneyMoveProcessed;
