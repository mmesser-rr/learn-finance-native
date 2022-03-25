import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import WithdrawDetails from 'src/screens/UserBanking/WithdrawDetails';
import WithdrawAmount from 'src/screens/UserBanking/WithdrawAmount';
import WithdrawReview from 'src/screens/UserBanking/WithdrawReview';
import WithdrawProcessed from 'src/screens/UserBanking/WithdrawProcessed';
import MoneyMoveProcessed from 'src/screens/UserBanking/MoneyMoveProcessed';
import TransactionHistory from 'src/screens/UserBanking/TransactionHistory';
import MoveMoney from 'src/screens/UserBanking/MoveMoney';
import SpendingPod from 'src/screens/UserBanking/Pods/SpendingPod';
import InvestmentsPod from 'src/screens/UserBanking/Pods/InvestmentsPod';
import SavingsPod from 'src/screens/UserBanking/Pods/SavingsPod';

const Stack = createStackNavigator();

const UserBankingStack: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="WithdrawDetails"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="WithdrawDetails" component={WithdrawDetails} />
      <Stack.Screen name="WithdrawAmount" component={WithdrawAmount} />
      <Stack.Screen name="WithdrawReview" component={WithdrawReview} />
      <Stack.Screen name="WithdrawProcessed" component={WithdrawProcessed} />
      <Stack.Screen name="MoneyMoveProcessed" component={MoneyMoveProcessed} />
      <Stack.Screen name="TransactionHistory" component={TransactionHistory} />
      <Stack.Screen name="MoveMoney" component={MoveMoney} />
      <Stack.Screen name="SpendingPod" component={SpendingPod} />
      <Stack.Screen name="InvestmentsPod" component={InvestmentsPod} />
      <Stack.Screen name="SavingsPod" component={SavingsPod} />
    </Stack.Navigator>
  );
};

export default UserBankingStack;
