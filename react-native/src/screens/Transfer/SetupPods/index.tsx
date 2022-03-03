import React from 'react';
import {View} from 'react-native';
import Slider from '@react-native-community/slider';

import SubmitButton from 'src/components/common/SubmitButton';
import {Text} from 'src/components/common/Texts';
import AppLayout from 'src/components/layout/AppLayout';
import AppColors from 'src/config/colors';
import NavigationService from 'src/navigation/NavigationService';
import TopNav from 'src/components/common/TopNav';
import InfoIcon from 'src/assets/icons/info.svg';

import styles from './styles';

const SetupPods: React.FC = () => {
  const onDone = () => {};

  return (
    <AppLayout containerStyle={styles.container} viewStyle={styles.viewWrapper}>
      <View>
        <View style={styles.nav}>
          <TopNav
            title="Set up Pods"
            goPreviousScreen={() => NavigationService.navigate('TransferStack', {screen: 'PodsExplain'})}
            goCloseScreen={() => NavigationService.navigate('HomeStack')}
          />
        </View>
        <View>
          <Text type="Body/Large" style={styles.body}>
            How do you want to allocate your money? Here is the setup most people start with. You can always adjust later.
          </Text>
        </View>
        <View>
          <View style={styles.sliderWrapper}>
            <View style={styles.info}>
              <View style={styles.labelWrapper}>
                <Text type="Title/Medium" style={styles.label}>SAVINGS</Text>
                <InfoIcon />
              </View>
              <Text type="Headline/Small">30%</Text>
            </View>
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={100}
              value={30}
              minimumTrackTintColor={AppColors.accentRed100}
              maximumTrackTintColor={AppColors.coreWhite100}
            />
          </View>
          <View style={styles.sliderWrapper}>
            <View style={styles.info}>
              <View style={styles.labelWrapper}>
                <Text type="Title/Medium" style={styles.label}>INVESTMENTS</Text>
                <InfoIcon />
              </View>
              <Text type="Headline/Small">40%</Text>
            </View>
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={100}
              value={40}
              minimumTrackTintColor={AppColors.accentRed100}
              maximumTrackTintColor={AppColors.coreWhite100}
            />
          </View>
          <View style={styles.sliderWrapper}>
            <View style={styles.info}>
              <View style={styles.labelWrapper}>
                <Text type="Title/Medium" style={styles.label}>SPENDING</Text>
                <InfoIcon />
              </View>
              <Text type="Headline/Small">30%</Text>
            </View>
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={100}
              value={30}
              minimumTrackTintColor={AppColors.accentRed100}
              maximumTrackTintColor={AppColors.coreWhite100}
            />
          </View>
        </View>
        <View style={styles.total}>
          <Text type="Title/Medium">TOTAL</Text>
          <Text type="Headline/Small">100%</Text>
        </View>
      </View>
      <View>
        <SubmitButton
          isValid={true}
          actionLabel="Done"
          onSubmit={onDone}
        />
      </View>
    </AppLayout>
  );
};

export default SetupPods;
