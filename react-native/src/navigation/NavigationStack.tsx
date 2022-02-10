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
import SelectSport from 'src/screens/SelectSport';
import SelectTeam from 'src/screens/SelectTeam';
import BankAccountIntro from 'src/screens/BankAccountIntro';
import CaptureDOB from 'src/screens/CaptureDOB';
import CaptureAddress from 'src/screens/CaptureAddress';
import CaptureSSN from 'src/screens/CaptureSSN';
import AccountCreateSuccess from 'src/screens/AccountCreateSuccess';
import AccountCreateFailure from 'src/screens/AccountCreateFailure';
import ProfileIntro from 'src/screens/ProfileIntro';
import SelectPlayerTag from 'src/screens/SelectPlayerTag';
import VerifyEmailCode from 'src/screens/VerifyEmailCode';
import HomeStack from './HomeStack';
import TransferStack from './TransferStack';
import LastStepWelcome from 'src/screens/LastStepWelcome';

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
        <RootStack.Screen
          name="SelectSport"
          component={SelectSport}
        />
        <RootStack.Screen
          name="SelectTeam"
          component={SelectTeam}
        />
        <RootStack.Screen
          name="BankAccountIntro"
          component={BankAccountIntro}
        />
        <RootStack.Screen
          name="CaptureDOB"
          component={CaptureDOB}
        />
        <RootStack.Screen
          name="CaptureAddress"
          component={CaptureAddress}
        />
        <RootStack.Screen
          name="CaptureSSN"
          component={CaptureSSN}
        />
        <RootStack.Screen
          name="AccountCreateSuccess"
          component={AccountCreateSuccess}
        />
        <RootStack.Screen
          name="AccountCreateFailure"
          component={AccountCreateFailure}
        />
        <RootStack.Screen
          name="ProfileIntro"
          component={ProfileIntro}
        />
        <RootStack.Screen
          name="SelectPlayerTag"
          component={SelectPlayerTag}
        />
        <RootStack.Screen
          name="VerifyEmailCode"
          component={VerifyEmailCode}
        />
        <RootStack.Screen
          name="LastStepWelcome"
          component={LastStepWelcome}
        />
        <RootStack.Screen
          name="HomeStack"
          component={HomeStack}
        />
        <RootStack.Screen
          name="TransferStack"
          component={TransferStack}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
