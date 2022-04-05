import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import Swiper from 'react-native-swiper';
import LinearGradient from 'react-native-linear-gradient';

import { Text } from 'src/components/common/Texts';
import AppLayout from 'src/components/layout/AppLayout';
import { GradientButtonColors, PodsCardGradient } from 'src/utils/constants';
import Button from 'src/components/common/Button';
import ArrowRightIcon from 'src/assets/icons/arrow-right.svg';

import styles from './styles';

const Dot = () => <View style={styles.dot} />;

const ActiveDot = () => {
  return (
    <LinearGradient colors={GradientButtonColors} style={styles.dot}>
      <View />
    </LinearGradient>
  );
};

const Profile: React.FC = () => {
  const [swiperIndex, setSwiperIndex] = useState(1);
  const [swiperHeight, setSwiperHeight] = useState(200);

  const handleChangeSwiper = (index: number) => {
    setSwiperIndex(index);
  };

  return (
    <AppLayout containerStyle={styles.container}>
      <View style={styles.avatarContainer}>
        <View style={styles.avatar}></View>
        <View>
          <Text type="Headline/Small">@johnsmith</Text>
        </View>
      </View>
      <View style={styles.swiperView}>
        <Swiper
          dot={<Dot />}
          activeDot={<ActiveDot />}
          showsVerticalScrollIndicator={true}
          loop={false}
          height={swiperHeight + 56}
          onIndexChanged={handleChangeSwiper}
        >
          <View onLayout={(event) => {
            const {height} = event.nativeEvent.layout;
            setSwiperHeight(height);
          }}>
            <LinearGradient colors={PodsCardGradient} style={styles.card}>
              <View>
                <Text type="Headline/Small">
                  Be neighborly
                </Text>
              </View>
              <View style={styles.swiperBody}>
                <Text type="Body/Large">
                  A profile picture will help you connect within the BankDAO community. 
                </Text>
              </View>
              <View>
                <View>
                  <Button>
                    <Text type="Body/Large">Add a Profile Photo</Text>
                  </Button>
                </View>
                <View>
                  <Button actionStyle={styles.laterAction}>
                    <Text type="Body/Large">Maybe later</Text>
                  </Button>
                </View>
              </View>
            </LinearGradient>
          </View>
          <View>
            <LinearGradient colors={PodsCardGradient} style={styles.card}>
              <View>
                <Text type="Headline/Small">
                  Say hi to the community
                </Text>
              </View>
              <View style={styles.swiperBody}>
                <Text type="Body/Large">
                  Introduce yourself to the community by adding a short bio.
                </Text>
              </View>
              <View>
                <View>
                  <Button>
                    <Text type="Body/Large">Add a Bio</Text>
                  </Button>
                </View>
                <View>
                  <Button actionStyle={styles.laterAction}>
                    <Text type="Body/Large">Maybe later</Text>
                  </Button>
                </View>
              </View>
            </LinearGradient>
          </View>
        </Swiper>
      </View>
      <View style={styles.settingCard}>
        <View>
          <Text type="Title/Medium">ACCOUNT</Text>
        </View>
        <View>
          <View style={styles.settingRow}>
            <Text type="Body/Large">Account Number</Text>
            <ArrowRightIcon />
          </View>
          <View style={styles.settingRow}>
            <Text type="Body/Large">Statements</Text>
            <ArrowRightIcon />
          </View>
        </View>
      </View>
      <View style={styles.settingCard}>
        <View>
          <Text type="Title/Medium">APP</Text>
        </View>
        <View>
          <View style={styles.settingRow}>
            <Text type="Body/Large">Face ID</Text>
            <ArrowRightIcon />
          </View>
          <View style={styles.settingRow}>
            <Text type="Body/Large">Legal</Text>
            <ArrowRightIcon />
          </View>
          <View style={styles.settingRow}>
            <Text type="Body/Large">Contact Us</Text>
            <ArrowRightIcon />
          </View>
          <View style={styles.settingRow}>
            <Text type="Body/Large">About</Text>
            <Text type="Title/Medium">Version 1.21.01</Text>
          </View>
          <View style={styles.settingRow}>
            <Text type="Body/Large">Sign out</Text>
            <ArrowRightIcon />
          </View>
        </View>
      </View>
    </AppLayout>
  );
};

export default Profile;
