import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import WyreIntro from 'src/screens/Wyre/WyreIntro';
import CountrySelection from 'src/screens/Wyre/CountrySelection';
import NonUS from 'src/screens/Wyre/NonUS';

const Stack = createStackNavigator();

const WyreStack: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="WyreIntro" component={WyreIntro} />
      <Stack.Screen name="CountrySelection" component={CountrySelection} />
      <Stack.Screen name="NonUS" component={NonUS} />
    </Stack.Navigator>
  );
};

export default WyreStack;
