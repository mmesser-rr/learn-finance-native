import React from 'react';
import {View} from 'react-native';
import Swiper from 'react-native-swiper';
import LinearGradient from 'react-native-linear-gradient';

import SubmitButton from 'src/components/common/SubmitButton';
import {Text} from 'src/components/common/Texts';
import AppLayout from 'src/components/layout/AppLayout';
import DepositNav from 'src/components/common/DepositNav';
import UnionIcon from 'src/assets/icons/union.svg';
import SpendingIcon from 'src/assets/icons/spending.svg';
import InvestmentIcon from 'src/assets/icons/investment.svg';
import SavingIcon from 'src/assets/icons/saving.svg';
import {GradientButtonColors} from 'src/utils/constants';

import styles from './styles';

const PodsExplain: React.FC = () => {
  const onNext = () => {};

  const ActiveDot = () => {
    return (
      <LinearGradient colors={GradientButtonColors} style={styles.dot}>
        <View />
      </LinearGradient>
    );
  };

  const Dot = () => <View style={styles.dot} />;

  return (
    <AppLayout containerStyle={styles.container} viewStyle={styles.viewWrapper}>
      <View style={styles.nav}>
        <DepositNav />
      </View>
      <View style={styles.swiperView}>
        <Swiper
          dot={<Dot />}
          activeDot={<ActiveDot />}
          height={100}
        >
          <View>
            <View>
              <Text type="Body/Large" style={styles.body}>
                All incoming payments will be divided among your pods.
              </Text>
            </View>
            <View style={styles.diagram}>
              <UnionIcon style={styles.union} />
              <View style={styles.description}>
                <View style={styles.leftDescription}>
                  <Text type="Body/Large">Deposit</Text>
                </View>
                <View style={styles.rightDescription}>
                  <View style={styles.spending}>
                    <SpendingIcon style={styles.icon} />
                    <Text type="Body/Large">Spending</Text>
                  </View>
                  <View style={styles.investment}>
                    <InvestmentIcon style={styles.icon} />
                    <Text type="Body/Large">Investments</Text>
                  </View>
                  <View style={styles.saving}>
                    <SavingIcon style={styles.icon} />
                    <Text type="Body/Large">Savings</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View>
            <Text type="Headline/Small">
              Watch how Pods work
            </Text>
          </View>
        </Swiper>
      </View>
      <View style={styles.action}>
        <SubmitButton
          isValid={true}
          actionLabel="Next"
          onSubmit={onNext}
        />
      </View>
    </AppLayout>
  );
};

export default PodsExplain;
