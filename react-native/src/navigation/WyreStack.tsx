import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import WyreIntro from 'src/screens/Wyre/WyreIntro';

const Stack = createStackNavigator();

const WyreStack: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="WyreIntro" component={WyreIntro} />
    </Stack.Navigator>
  );
};

export default WyreStack;
