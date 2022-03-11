import React, {useCallback, useEffect, useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import Tooltip from 'react-native-walkthrough-tooltip';
import {useDispatch, useSelector} from 'react-redux';
import {useFocusEffect} from '@react-navigation/native';

import SubmitButton from 'src/components/common/SubmitButton';
import {Slider} from 'src/components/common/Slider';
import {Text} from 'src/components/common/Texts';
import AppLayout from 'src/components/layout/AppLayout';
import AppColors from 'src/config/colors';
import NavigationService from 'src/navigation/NavigationService';
import TopNav from 'src/components/common/TopNav';
import InfoIcon from 'src/assets/icons/info.svg';
import {
  GradientButtonColors,
  PODsSteps,
  RedLinnerGradient,
} from 'src/utils/constants';
import {
  podSettingsUpdated as podSettingsUpdatedAction,
  updateHomeStep,
  updatePodSettings,
} from 'src/store/actions/bankingActions';
import LinearGradient from 'react-native-linear-gradient';
import Button from 'src/components/common/Button';
import {RootState} from 'src/store/root-state';

import styles from './styles';
import Loading from 'src/components/common/Loading';

const sliderMarginHorizontalWidth = 27;

interface ToolTipContentProps {
  text: string;
}

const ToolTipContent: React.FC<ToolTipContentProps> = ({text}) => {
  return (
    <View style={styles.tooltip}>
      <Text style={styles.tooltipContent} type="Title/Medium">
        {text}
      </Text>
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
  const dispatch = useDispatch();
  const {step, podSettingsUpdated} = useSelector(
    (state: RootState) => state.bankingReducer,
  );
  const {isLoading} = useSelector((state: RootState) => state.loadingReducer);

  const isEdit = step === PODsSteps[2];

  // when screen loses focus, reset the podSettingsUpdated state
  useFocusEffect(
    useCallback(() => {
      return () => {
        dispatch(podSettingsUpdatedAction(false));
      };
    }, []),
  );

  useEffect(() => {
    if (podSettingsUpdated) {
      if (isEdit) {
        NavigationService.navigate('HomeStack');
        return;
      }

      dispatch(updateHomeStep(PODsSteps[2]));
      NavigationService.navigate('TransferStack', {screen: 'PodSetupSuccess'});
    }
  }, [podSettingsUpdated]);

  const onDone = () => {
    dispatch(
      updatePodSettings({
        SAVINGS: savings,
        INVESTMENTS: investments,
        SPENDING: spending,
      }),
    );
  };

  const onCancel = () => {
    NavigationService.navigate('HomeStack');
  };

  const total = savings + investments + spending;
  const isValid = total === 100;

  return (
    <AppLayout containerStyle={styles.container} viewStyle={styles.viewWrapper}>
      <View>
        <View style={styles.nav}>
          <TopNav
            title={isEdit ? 'Change Pods Allocations' : 'Set up Pods'}
            goPreviousScreen={() =>
              NavigationService.navigate('TransferStack', {
                screen: 'PodsExplain',
              })
            }
            goCloseScreen={() => NavigationService.navigate('HomeStack')}
          />
        </View>
        <View>
          <Text type="Body/Large" style={styles.body}>
            {isEdit
              ? "How do you want to allocate your money? The change will not apply to what's in the Pods already but apply to the future deposits."
              : 'How do you want to allocate your money? Here is the setup most people start with. You can always adjust later.'}
          </Text>
        </View>
        <View>
          <View style={styles.sliderWrapper}>
            <View style={styles.info}>
              <View style={styles.labelWrapper}>
                <Text type="Title/Medium" style={styles.label}>
                  SAVINGS
                </Text>
                <Tooltip
                  isVisible={savingsTip}
                  content={
                    <ToolTipContent text="Money in Savings Pod supports you in a financial emergency." />
                  }
                  placement="top"
                  backgroundColor="transparent"
                  contentStyle={styles.tooltipBackground}
                  onClose={() => setSavingTip(false)}>
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
                <Text type="Title/Medium" style={styles.label}>
                  INVESTMENTS
                </Text>
                <Tooltip
                  isVisible={investmentsTip}
                  content={
                    <ToolTipContent text="Money in Investments pod allows you to grow your wealth and beat inflation." />
                  }
                  placement="top"
                  backgroundColor="transparent"
                  contentStyle={styles.tooltipBackground}
                  onClose={() => setInvestmentsTip(false)}>
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
                <Text type="Title/Medium" style={styles.label}>
                  SPENDING
                </Text>
                <Tooltip
                  isVisible={spendingTip}
                  content={
                    <ToolTipContent text="Money in Spending Pod is for your daily expenses." />
                  }
                  placement="top"
                  backgroundColor="transparent"
                  contentStyle={styles.tooltipBackground}
                  onClose={() => setSpendingTip(false)}>
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
          actionLabel={isEdit ? 'Change Pod Allocations' : 'Done'}
          onSubmit={onDone}
        />
        {isEdit && (
          <LinearGradient
            style={styles.laterActionGradient}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={GradientButtonColors}>
            <Button onPress={onCancel}>
              <Text type="Body/Large">Cancel</Text>
            </Button>
          </LinearGradient>
        )}
      </View>
      {isLoading && <Loading />}
    </AppLayout>
  );
};

export default SetupPods;
