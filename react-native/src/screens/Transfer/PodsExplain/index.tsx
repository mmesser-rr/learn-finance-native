import React, { useState } from 'react';
import {View} from 'react-native';
import Swiper from 'react-native-swiper';
import LinearGradient from 'react-native-linear-gradient';
import VideoPlayer from 'react-native-video-player';

import SubmitButton from 'src/components/common/SubmitButton';
import {Text} from 'src/components/common/Texts';
import AppLayout from 'src/components/layout/AppLayout';
import TopNav from 'src/components/common/TopNav';
import UnionIcon from 'src/assets/icons/union.svg';
import SpendingIcon from 'src/assets/icons/spending.svg';
import InvestmentIcon from 'src/assets/icons/investment.svg';
import SavingIcon from 'src/assets/icons/saving.svg';
import {GradientButtonColors} from 'src/utils/constants';
import NavigationService from 'src/navigation/NavigationService';

import styles from './styles';

const PodsExplain: React.FC = () => {
  const [swiperIndex, setSwiperIndex] = useState(1);
  const onNext = () => NavigationService.navigate('TransferStack', {screen: 'SetupPods'});

  const ActiveDot = () => {
    return (
      <LinearGradient colors={GradientButtonColors} style={styles.dot}>
        <View />
      </LinearGradient>
    );
  };

  const Dot = () => <View style={styles.dot} />;

  const handleChangeSwiper = (index: number) => {
    setSwiperIndex(index);
  };

  const onClose = () => NavigationService.navigate('HomeStack');

  return (
    <AppLayout containerStyle={styles.container} viewStyle={styles.viewWrapper}>
      <View style={styles.nav}>
        <TopNav title="Set up Pods" goCloseScreen={onClose} />
      </View>
      <View style={styles.swiperView}>
        <Swiper
          dot={<Dot />}
          activeDot={<ActiveDot />}
          height={100}
          showsVerticalScrollIndicator={true}
          loop={false}
          onIndexChanged={handleChangeSwiper}
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
            <View>
              <VideoPlayer
                video={{ uri: 'https://www.w3schools.com/html/mov_bbb.mp4' }}
              />
            </View>
            <View style={styles.videoContent}>
              <Text type="Headline/Small">
                Watch how Pods work
              </Text>
              <Text type="Body/Large" style={styles.videoDescription}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices mi in elit vitae sed.
              </Text>
              <Text type="Body/Large">
                Egestas iaculis venenatis et ac. Fringilla risus, tempor consectetur egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              </Text>
            </View>
          </View>
        </Swiper>
      </View>
      <View style={styles.action}>
        <SubmitButton
          isValid={true}
          actionLabel={swiperIndex === 0 ? 'Next' : 'Set up Pods'}
          onSubmit={onNext}
        />
      </View>
    </AppLayout>
  );
};

export default PodsExplain;
