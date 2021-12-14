import * as React from 'react';
import { NavigationContainer, Theme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { navigationRef } from './NavigationService';
import Welcome from '../screens/Welcome';
import Verification from '../screens/Verification';

const Stack = createStackNavigator();

interface IProps {
  theme: Theme;
}

const App: React.FC<IProps> = (props: IProps) => {
  const { theme } = props;

  return (
    <NavigationContainer ref={navigationRef} theme={theme}>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen
          name="Welcome"
          component={Welcome}
        />
        <Stack.Screen
          name="Verification"
          component={Verification}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
