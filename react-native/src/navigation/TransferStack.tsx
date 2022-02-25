import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TransferAmount from 'src/screens/Transfer/Amount';
import TransferReview from 'src/screens/Transfer/Review';
import DirectDeposit from 'src/screens/Transfer/DirectDeposit';
import ProcessDeposit from 'src/screens/Transfer/ProcessDeposit';
import PodsExplain from 'src/screens/Transfer/PodsExplain';

const Stack = createStackNavigator();

const TransferStack: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="TransferAmount"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="TransferAmount" component={TransferAmount} />
      <Stack.Screen name="TransferReview" component={TransferReview} />
      <Stack.Screen name="DirectDeposit" component={DirectDeposit} />
      <Stack.Screen name="ProcessDeposit" component={ProcessDeposit} />
      <Stack.Screen name="PodsExplain" component={PodsExplain} />
    </Stack.Navigator>
  );
};

export default TransferStack;
