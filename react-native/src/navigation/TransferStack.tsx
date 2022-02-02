import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TransferAmount from 'src/screens/Transfer/Amount';
import TransferReview from 'src/screens/Transfer/Review';

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
    </Stack.Navigator>
  );
};

export default TransferStack;
