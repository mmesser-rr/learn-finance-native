import * as React from 'react';
import { NavigationContainer, Theme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { navigationRef } from './NavigationService';
import { RootStackParamList } from 'src/types/routerTypes';
import { SignUpSteps } from 'src/utils/constants';
import Welcome from 'src/screens/Welcome';
import SignUp from 'src/screens/SignUp';
import Terms from 'src/screens/Terms';
import SelectLevel from 'src/screens/SelectLevel';

interface IProps {
  theme: Theme;
}

const RootStack = createStackNavigator<RootStackParamList>();

const App: React.FC<IProps> = (props: IProps) => {
  const { theme } = props;

  return (
    <NavigationContainer ref={navigationRef} theme={theme}>
      <RootStack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerShown: false
        }}
      >
        <RootStack.Screen
          name="Welcome"
          component={Welcome}
        />
        <RootStack.Screen
          name="SignUp"
          component={SignUp}
          initialParams={{ step: SignUpSteps[0] }}
        />
        <RootStack.Screen
          name="Terms"
          component={Terms}
        />
        <RootStack.Screen
          name="SelectLevel"
          component={SelectLevel}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
