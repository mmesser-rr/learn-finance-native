import React from 'react';

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

const ExerciseResult = () => {
  const { learns }= useSelector((state: RootState) => state.learnsReducer)
  const { learnItemId, passedDepositIndex } = useSelector((state: RootState) => state.learnStatusReducer)
  const data: Learn = learns.filter(o => o.id === learnItemId)[0]
  const nDeposits = data.deposits.length

  const onPressNextDeposit = () => {
    // NavigationService.navigate('LearnVideo')
  }

  const onPressBacktoDashboard = () => {
    // NavigationService.navigate('OpportunitiesStack')
  }

  return (
    <AppLayout containerStyle={AppStyles.container} viewStyle={AppStyles.viewWrapper} scrollEnabled={false}>
      <View>
        <WealthBalanceEle />
        <Text type="Headline/Large" variant='white' style={styles.headline}>
          Congratulations!
        </Text>
        <Text type="Body/Medium" variant="white">{passedDepositIndex === nDeposits - 1 ? `You have earned ${data.reward} $WEALTH!` : ""}</Text>
        <LearnItem data={data} />
      </View>
      <View>
        <Button variant="red" onPress={onPressNextDeposit}>
          <Text type="Body/Large" variant="white">Begin Next Deposit</Text>
        </Button>
        <Button variant="transparent" onPress={onPressBacktoDashboard}>
          <Text type="Body/Large" variant="white">Back to Dashboard</Text>
        </Button>
      </View>

    </AppLayout>
  );
};

export default ExerciseResult;
