import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TransferAmount from 'src/screens/Transfer/Amount';
import TransferReview from 'src/screens/Transfer/Review';
import DirectDeposit from 'src/screens/Transfer/DirectDeposit';

const Stack = createStackNavigator();


const TransferStack: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="TransferAmount"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen
        name="TransferAmount"
        component={TransferAmount}
      />
      <Stack.Screen
        name="TransferReview"
        component={TransferReview}
      />
      <Stack.Screen
        name="DirectDeposit"
        component={DirectDeposit}
      />
    </Stack.Navigator>
  );
};

export default TransferStack;
