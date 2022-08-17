import React, { useEffect, useState } from 'react';

import AppLayout from 'src/components/layout/AppLayout';
import { Text } from 'src/components/common/Texts';

import styles from './styles';
import { WealthBalanceEle } from '../..';
import LearnItem from '..';
import Button from 'src/components/common/Button';
import AppStyles from 'src/config/styles';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store/root-state';
import { Learn } from 'src/types/API';
import NavigationService from 'src/navigation/NavigationService';
import { log } from 'src/utils/functions';
import { ExerciseResultProps } from 'src/types/opportunitiesRouterTypes';

const ExerciseResult: React.FC<ExerciseResultProps> = ({
  navigation,
  route
}) => {
  log("title", "ExerciseResult")
  const [myKey, setMyKey] = useState(0)
  const { learns } = useSelector((state: RootState) => state.learnsReducer)
  const { learnItemId, passedDepositIndex, wealthBalance } = useSelector((state: RootState) => state.learnStatusReducer)
  const data: Learn = learns.filter(o => o.id === learnItemId)[0]
  const nDeposits = data.deposits.length

  const onPressNextDeposit = () => {
    NavigationService.navigate('OpportunitiesStack', {screen: 'LearnVideo'})
  }

  const onPressBacktoDashboard = () => {
    NavigationService.navigate('OpportunitiesStack', {screen: 'Opportunities'})
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      log("content", "ExerciseResult -> focus")
      setMyKey(Math.random())
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <AppLayout containerStyle={AppStyles.container} viewStyle={AppStyles.viewWrapper} scrollEnabled={false}>
      <View>
        <WealthBalanceEle balance={wealthBalance} />
        <Text type="Headline/Large" variant='white' style={styles.headline}>
          Congratulations!
        </Text>
        <Text type="Body/Medium" variant="white">{passedDepositIndex === nDeposits - 1 ? `You have earned ${data.reward} $WEALTH!` : ""}</Text>
        <LearnItem data={data} myKey={myKey} />
      </View>
      <View>
        {passedDepositIndex < nDeposits - 1 && (
          <Button variant="red" onPress={onPressNextDeposit}>
            <Text type="Body/Large" variant="white">Begin Next Deposit</Text>
          </Button>
        )}
        <Button variant="transparent" onPress={onPressBacktoDashboard}>
          <Text type="Body/Large" variant="white">Back to Dashboard</Text>
        </Button>
      </View>

    </AppLayout>
  );
};

export default ExerciseResult;
