import React, { useState } from 'react';
import {View, TouchableOpacity} from 'react-native';
// import Slider from '@react-native-community/slider';
// import {Slider} from '@miblanchard/react-native-slider';
import {Slider} from 'src/components/common/Slider';
import Tooltip from 'react-native-walkthrough-tooltip';

import SubmitButton from 'src/components/common/SubmitButton';
import {Text} from 'src/components/common/Texts';
import AppLayout from 'src/components/layout/AppLayout';
import AppColors from 'src/config/colors';
import NavigationService from 'src/navigation/NavigationService';
import TopNav from 'src/components/common/TopNav';
import InfoIcon from 'src/assets/icons/info.svg';
import {RedLinnerGradient} from 'src/utils/constants';

import styles from './styles';

const sliderMarginHorizontalWidth = 27;

interface ToolTipContentProps {
  text: string;
}

const ToolTipContent: React.FC<ToolTipContentProps> = ({ text }) => {
  return (
    <View style={styles.tooltip}>
      <Text style={styles.tooltipContent} type="Title/Medium">{text}</Text>
    </View>
  );
};

const SetupPods: React.FC = () => {
  const [savings, setSavings] = useState(30);
  const [investments, setInvestments] = useState(40);
  const [spending, setSpending] = useState(30);
  const [savingsTip, setSavingTip] = useState(false);
  const [investmentsTip, setInvestmentsTip] = useState(false);
  const [spendingTip, setSpendingTip] = useState(false);
  const onDone = () => NavigationService.navigate('TransferStack', {screen: 'PodSetupSuccess'});

  const total = savings + investments + spending;
  const isValid = total === 100;

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
                <Tooltip
                  isVisible={savingsTip}
                  content={
                    <ToolTipContent
                      text="Money in Savings Pod supports you in a financial emergency."
                    />
                  }
                  placement="top"
                  backgroundColor="transparent"
                  contentStyle={styles.tooltipBackground}
                  onClose={() => setSavingTip(false)}
                >
                  <TouchableOpacity onPress={() => setSavingTip(true)}>
                    <InfoIcon />
                  </TouchableOpacity>
                </Tooltip>
              </View>
              <Text type="Headline/Small">{savings}%</Text>
            </View>
            <Slider
              type="Single"
              min={0}
              max={100}
              step={5}
              value={savings}
              onChange={(low: number, high: number) => setSavings(low)}
              minimumTrackTintColor={AppColors.accentRed100}
              maximumTrackTintColor={AppColors.gray20}
              thumbStyle={styles.sliderThumb}
              gradientColors={RedLinnerGradient}
              marginHorizontalWidth={sliderMarginHorizontalWidth}
            />
          </View>
          <View style={styles.sliderWrapper}>
            <View style={styles.info}>
              <View style={styles.labelWrapper}>
                <Text type="Title/Medium" style={styles.label}>INVESTMENTS</Text>
                <Tooltip
                  isVisible={investmentsTip}
                  content={
                    <ToolTipContent
                      text="Money in Investments pod allows you to grow your wealth and beat inflation."
                    />
                  }
                  placement="top"
                  backgroundColor="transparent"
                  contentStyle={styles.tooltipBackground}
                  onClose={() => setInvestmentsTip(false)}
                >
                  <TouchableOpacity onPress={() => setInvestmentsTip(true)}>
                    <InfoIcon />
                  </TouchableOpacity>
                </Tooltip>
              </View>
              <Text type="Headline/Small">{investments}%</Text>
            </View>
            <Slider
              type="Single"
              min={0}
              max={100}
              step={5}
              value={investments}
              onChange={(low: number, high: number) => setInvestments(low)}
              minimumTrackTintColor={AppColors.accentRed100}
              maximumTrackTintColor={AppColors.gray20}
              thumbStyle={styles.sliderThumb}
              gradientColors={RedLinnerGradient}
              marginHorizontalWidth={sliderMarginHorizontalWidth}
            />
          </View>
          <View style={styles.sliderWrapper}>
            <View style={styles.info}>
              <View style={styles.labelWrapper}>
                <Text type="Title/Medium" style={styles.label}>SPENDING</Text>
                <Tooltip
                  isVisible={spendingTip}
                  content={
                    <ToolTipContent
                      text="Money in Spending Pod is for your daily expenses."
                    />
                  }
                  placement="top"
                  backgroundColor="transparent"
                  contentStyle={styles.tooltipBackground}
                  onClose={() => setSpendingTip(false)}
                >
                  <TouchableOpacity onPress={() => setSpendingTip(true)}>
                    <InfoIcon />
                  </TouchableOpacity>
                </Tooltip>
              </View>
              <Text type="Headline/Small">{spending}%</Text>
            </View>
            <Slider
              type="Single"
              min={0}
              max={100}
              step={5}
              value={spending}
              onChange={(low: number, high: number) => setSpending(low)}
              minimumTrackTintColor={AppColors.accentRed100}
              maximumTrackTintColor={AppColors.gray20}
              thumbStyle={styles.sliderThumb}
              gradientColors={RedLinnerGradient}
              marginHorizontalWidth={sliderMarginHorizontalWidth}
            />
          </View>
        </View>
        <View style={styles.total}>
          <Text type="Title/Medium">TOTAL</Text>
          <Text type="Headline/Small" style={!isValid ? styles.error : {}}>
            {total}%
          </Text>
        </View>
        {!isValid && (
          <View style={styles.errorWrapper}>
            <Text type="Body/Medium" style={styles.error}>
              Re-adjust to make total 100%
            </Text>
          </View>
        )}
      </View>
      <View>
        <SubmitButton
          isValid={isValid}
          actionLabel="Done"
          onSubmit={onDone}
        />
      </View>
    </AppLayout>
  );
};

export default SetupPods;
