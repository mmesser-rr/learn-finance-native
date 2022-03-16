import React, { useState } from 'react';
import {TouchableOpacity, View} from 'react-native';

import {Text} from 'src/components/common/Texts';
import AppLayout from 'src/components/layout/AppLayout';
import NavigationService from 'src/navigation/NavigationService';
import TopNav from 'src/components/common/TopNav';
import {twoDecimalFormatter} from 'src/utils/functions';

import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import { GradientButtonColors } from 'src/utils/constants';

const histories = [
  {
    id: 1,
    date: '2021-12-06',
    transfer: 'Automatic transfer',
    from: 'Spending',
    to: 'Investments',
    isPosted: true,
    amount: 200
  },
  {
    id: 2,
    date: '2021-12-06',
    transfer: 'Automatic transfer',
    from: 'Spending',
    to: 'Investments',
    isPosted: true,
    amount: -200
  },
  {
    id: 3,
    date: '2021-12-06',
    transfer: 'Automatic transfer',
    from: 'Spending',
    to: 'Savings',
    isPosted: true,
    amount: 100
  },
  {
    id: 4,
    date: '2021-12-06',
    transfer: 'Automatic transfer',
    from: 'Spending',
    to: 'Savings',
    isPosted: true,
    amount: -100
  },
  {
    id: 5,
    date: '2021-11-30',
    transfer: 'Deposit',
    from: 'Plaid',
    to: 'Spending',
    isPosted: true,
    amount: 500
  }
];

const tabs = [
  'All',
  'Spending',
  'Investments',
  'Savings'
];

const TransactionHistory: React.FC = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <AppLayout containerStyle={styles.container} viewStyle={styles.viewWrapper}>
      <View style={styles.nav}>
        <TopNav
          title="Transaction History"
          goPreviousScreen={() => {}}
        />
      </View>
      <View style={styles.tabs}>
        {tabs.map((tab, index) => (
          <View style={styles.tab}>
            {tabIndex === index ? (
              <LinearGradient
                style={styles.activeGradient}
                colors={GradientButtonColors}
                locations={[0, 0, 0.2388, 1]}
              >
                <Text type="Body/Medium">{tab}</Text>
              </LinearGradient>
            ) : (
              <TouchableOpacity
                key={`tab_${index}`}
                style={styles.inactiveButton}
                onPress={() => setTabIndex(index)}
              >
                <Text type="Title/Small">{tab}</Text>
              </TouchableOpacity>
            )}
          </View>
        ))}
      </View>
      <View>
        {histories.map(history => (
          <View style={styles.history}>
            <View style={styles.info}>
              <View style={styles.details}>
                <View>
                  <Text type="Body/Small">{history.date}</Text>
                </View>
                <View style={styles.method}>
                  <View>
                    <Text type="Body/Large">{history.transfer}</Text>
                  </View>
                  <View>
                    <Text type="Body/Large">from {history.from} to {history.to}</Text>
                  </View>
                </View>
              </View>
              <View>
                <Text type="Body/Large">
                  {history.amount > 0 ? '+' : '-'}${twoDecimalFormatter.format(Math.abs(history.amount))}
                </Text>
              </View>
            </View>
            <View>
              <Text type="Title/Medium">Posted</Text>
            </View>
          </View>
        ))}
      </View>
    </AppLayout>
  );
};

export default TransactionHistory;
