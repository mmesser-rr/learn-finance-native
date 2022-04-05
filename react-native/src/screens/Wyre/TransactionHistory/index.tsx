import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector} from 'react-redux';

import styles from './styles';
import {Text} from 'src/components/common/Texts';
import AppLayout from 'src/components/layout/AppLayout';
import NavigationService from 'src/navigation/NavigationService';
import TopNav from 'src/components/common/TopNav';
import {twoDecimalFormatter} from 'src/utils/functions';
import {GradientButtonColors} from 'src/utils/constants';
import {RootState} from 'src/store/root-state';
import TransactionHistoryItem from 'src/components/common/TransactionHistoryItem';

const tabs = ['All', 'Rewards'];

const TransactionHistory: React.FC = () => {
  const [tabIndex, setTabIndex] = useState(1);
  const transactionHistory = useSelector((state: RootState) =>
    (state.bankingReducer.transactionHistory ?? []).filter(entry =>
      entry.attributes?.description?.includes('Rewards'),
    ),
  );

  const goBack = () => NavigationService.goBack();

  return (
    <AppLayout containerStyle={styles.container} viewStyle={styles.viewWrapper}>
      <View style={styles.nav}>
        <TopNav title="Transaction History" goPreviousScreen={goBack} />
      </View>
      <View style={styles.tabs}>
        {tabs.map((tab, index) => (
          <View style={styles.tab} key={index}>
            {tabIndex === index ? (
              <LinearGradient
                style={styles.activeGradient}
                colors={GradientButtonColors}
                locations={[0, 0, 0.2388, 1]}>
                <Text type="Body/Medium">{tab}</Text>
              </LinearGradient>
            ) : (
              <TouchableOpacity
                key={`tab_${index}`}
                style={styles.inactiveButton}
                onPress={() => setTabIndex(index)}>
                <Text type="Title/Small">{tab}</Text>
              </TouchableOpacity>
            )}
          </View>
        ))}
      </View>
      <View>
        {transactionHistory.map((entry, index) => (
          <TransactionHistoryItem
            historyEntry={entry}
            key={index}
            mainTextType="Body/Large"
            secondaryTextType="Title/Medium"
          />
        ))}
        {/* {transactionHistory.map(history => (
          <View style={styles.history} key={history.id}>
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
                    <Text type="Body/Large">
                      from {history.from} to {history.to}
                    </Text>
                  </View>
                </View>
              </View>
              <View>
                <Text type="Body/Large">
                  {history.amount > 0 ? '+' : '-'}$
                  {twoDecimalFormatter.format(Math.abs(history.amount))}
                </Text>
              </View>
            </View>
            <View>
              <Text type="Title/Medium">Posted</Text>
            </View>
          </View>
        ))} */}
      </View>
    </AppLayout>
  );
};

export default TransactionHistory;
