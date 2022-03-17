import React, {useEffect, useState} from 'react';
import {View, TextInput} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import AppLayout from 'src/components/layout/AppLayout';
import {Text} from 'src/components/common/Texts';
import TopNav from 'src/components/common/TopNav';
import { PodType } from 'src/types/common';
import { GradientButtonColors } from 'src/utils/constants';
import { decimalFormatter } from 'src/utils/functions';
import SubmitButton from 'src/components/common/SubmitButton';
import AppColors from 'src/config/colors';
import PodCard from 'src/components/common/PodCard';

import styles from './styles';
import NavigationService from 'src/navigation/NavigationService';

interface MoveAmountProps {
  amount: number;
  onChangeValue: (value: string) => void;
}

const MoveAmount: React.FC<MoveAmountProps> = ({amount, onChangeValue}) => {
  const [value, setValue] = useState('0.00');

  const textChangeHandler = (txt: string) => {
    if (!txt) {
      setValue('0.00');
    }

    const decimalIndex = txt.indexOf('.');
    const newValue =
      decimalIndex >= 0
        ? txt.slice(0, decimalIndex) + txt.slice(decimalIndex, decimalIndex + 3)
        : txt;
    setValue(newValue);
    onChangeValue(newValue);
  };

  return (
    <View>
      <LinearGradient
        style={styles.podGradient}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={GradientButtonColors}
      >
        <View style={styles.moveAmount}>
          <Text type="Title/Small" style={styles.balanceLabel}>
            Available to move ${decimalFormatter(2, 2).format(amount)}
          </Text>
          <View style={styles.inputContainer}>
            <View style={styles.inputWrapper}>
              <Text type="Headline/Large">$</Text>
              <TextInput
                keyboardType="decimal-pad"
                value={value}
                style={styles.input}
                autoFocus={true}
                selectionColor={AppColors.accentRed100}
                onChangeText={text => textChangeHandler(text)}
                placeholder="0.00"
              />
            </View>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

const steps = ['home', 'from', 'to'];
const pods: PodType[] = ['spending', 'investments', 'savings'];
const amounts = {
  spending: 100,
  investments: 200,
  savings: 100
};

const MoveMoney: React.FC = () => {
  const [step, setStep] = useState(steps[0]);
  const [from, setFrom] = useState<PodType>('spending');
  const [to, setTo] = useState<PodType>('investments');
  const [fromAmount, setFromAmount] = useState<number>(0);
  const [toAmount, setToAmount] = useState<number>(0);
  const [moveAmount, setMoveAmount] = useState<number>(0);

  useEffect(() => {
    setFromAmount(amounts[from]);
  }, [from]);

  useEffect(() => {
    setToAmount(amounts[to]);
  }, [to]);

  const onSelectFrom = () => {
    setStep(steps[1]);
  };

  const onSelectTo = () => {
    setStep(steps[2]);
  };

  const onChangeAmount = (value: string) => {
    setMoveAmount(Number(value));
  };

  const renderHome = () => {
    const isError = moveAmount > fromAmount;

    return (
      <>
        <View>
          <View style={styles.podCard}>
            <Text type="Body/Large" style={styles.podCardLabel}>
              From
            </Text>
            <PodCard type={from} balance={fromAmount} onSelect={onSelectFrom} />
          </View>
          <View style={styles.podCard}>
            <Text type="Body/Large" style={styles.podCardLabel}>
              To
            </Text>
            <PodCard type={to} balance={toAmount} onSelect={onSelectTo} />
          </View>
          <View style={styles.podCard}>
            <Text type="Body/Large" style={styles.podCardLabel}>
              Amount to move
            </Text>
            <MoveAmount amount={fromAmount} onChangeValue={onChangeAmount} />
            {isError && (
              <View style={styles.errorWrapper}>
                <Text type="Body/Medium" style={styles.errorMove}>
                  There is not sufficient fund to move. 
                </Text>
              </View>
            )}
          </View>
        </View>
        <SubmitButton
          style={styles.submit}
          isValid={!isError && moveAmount > 0}
          actionLabel='Move money between pods'
          onSubmit={() => NavigationService.navigate('UserBankingStack', {screen: 'MoneyMoveProcessed'})}
        />
      </>
    );
  };

  const renderFrom = () => {
    const onSelectFromPod = (p: PodType) => {
      setFrom(p);
      setStep(steps[0]);
    };

    return (
      <>
        <Text type="Body/Large" style={styles.description}>
          Where do you want to move money from?
        </Text>
        {pods.map((p, index) => (
          <View style={styles.podCard} key={`from_${index}`}>
            <PodCard type={p} balance={amounts[p]} onSelect={() => onSelectFromPod(p)} />
          </View>
        ))}
      </>
    );
  };

  const renderTo = () => {
    const onSelectToPod = (p: PodType) => {
      setTo(p);
      setStep(steps[0]);
    };

    const toPods = pods.filter(p => p !== from);

    return (
      <>
        <Text type="Body/Large" style={styles.description}>
          Where do you want to move money to?
        </Text>
        {toPods.map((p, index) => (
          <View style={styles.podCard} key={`from_${index}`}>
            <PodCard type={p} balance={amounts[p]} onSelect={() => onSelectToPod(p)} />
          </View>
        ))}
      </>
    );
  };

  return (
    <AppLayout containerStyle={styles.container} viewStyle={styles.viewStyle}>
      <View style={styles.nav}>
        {step === steps[0] ? (
          <TopNav
            title="Move between Pods"
            goCloseScreen={() => {}}
          />
        ) : (
          <TopNav
            title="Move between Pods"
            goPreviousScreen={() => setStep(steps[0])}
          />
        )}
      </View>
      {step === steps[0] && renderHome()}
      {step === steps[1] && renderFrom()}
      {step === steps[2] && renderTo()}
    </AppLayout>
  );
};

export default MoveMoney;
