import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import WithdrawDetails from 'src/screens/UserBanking/WithdrawDetails';
import WithdrawAmount from 'src/screens/UserBanking/WithdrawAmount';
import WithdrawReview from 'src/screens/UserBanking/WithdrawReview';
import WithdrawProcessed from 'src/screens/UserBanking/WithdrawProcessed';
import MoneyMoveProcessed from 'src/screens/UserBanking/MoneyMoveProcessed';
import TransactionHistory from 'src/screens/UserBanking/TransactionHistory';

const Stack = createStackNavigator();

const UserBankingStack: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="WithdrawDetails"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="WithdrawDetails" component={WithdrawDetails} />
      <Stack.Screen name="WithdrawAmount" component={WithdrawAmount} />
      <Stack.Screen name="WithdrawReview" component={WithdrawReview} />
      <Stack.Screen name="WithdrawProcessed" component={WithdrawProcessed} />
      <Stack.Screen name="MoneyMoveProcessed" component={MoneyMoveProcessed} />
      <Stack.Screen name="TransactionHistory" component={TransactionHistory} />
    </Stack.Navigator>
  );
};

export default UserBankingStack;
