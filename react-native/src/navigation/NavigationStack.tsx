import * as React from 'react';
import {NavigationContainer, Theme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {navigationRef} from './NavigationService';
import {RootStackParamList} from 'src/types/routerTypes';
import {SignUpSteps} from 'src/utils/constants';
import Welcome from 'src/screens/Welcome';
import SignUp from 'src/screens/SignUp';
import Privacy from 'src/screens/Terms/Privacy';
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
import UserLoginStack from './UserLoginStack';
import UserBankingStack from './UserBankingStack';
import Disclosures from 'src/screens/Disclosures';
import WyreFullScreenNotification from 'src/screens/Wyre/WyreFullScreenNotification';
import WyreStack from './WyreStack';
import Agreement from 'src/screens/Terms/Agreement';
import SelectPlayer from 'src/screens/SelectPlayer';
import UniversalError from 'src/screens/UniversalError';

interface IProps {
  theme: Theme;
}

const RootStack = createStackNavigator<RootStackParamList>();

const App: React.FC<IProps> = (props: IProps) => {
  const {theme} = props;

  return (
    <NavigationContainer ref={navigationRef} theme={theme}>
      <RootStack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerShown: false,
        }}>
        <RootStack.Screen name="Welcome" component={Welcome} />
        <RootStack.Screen
          name="SignUp"
          component={SignUp}
          initialParams={{step: SignUpSteps[0]}}
        />
        <RootStack.Screen name="Privacy" component={Privacy} />
        <RootStack.Screen name="Agreement" component={Agreement} />
        <RootStack.Screen name="Disclosures" component={Disclosures} />
        <RootStack.Screen name="SelectLevel" component={SelectLevel} />
        <RootStack.Screen name="SelectSport" component={SelectSport} />
        <RootStack.Screen name="SelectTeam" component={SelectTeam} />
        <RootStack.Screen
          name="BankAccountIntro"
          component={BankAccountIntro}
        />
        <RootStack.Screen name="CaptureDOB" component={CaptureDOB} />
        <RootStack.Screen name="CaptureAddress" component={CaptureAddress} />
        <RootStack.Screen name="CaptureSSN" component={CaptureSSN} />
        <RootStack.Screen
          name="AccountCreateSuccess"
          component={AccountCreateSuccess}
        />
        <RootStack.Screen
          name="AccountCreateFailure"
          component={AccountCreateFailure}
        />
        <RootStack.Screen name="ProfileIntro" component={ProfileIntro} />
        <RootStack.Screen name="SelectPlayer" component={SelectPlayer} />
        <RootStack.Screen name="SelectPlayerTag" component={SelectPlayerTag} />
        <RootStack.Screen name="VerifyEmailCode" component={VerifyEmailCode} />
        <RootStack.Screen name="LastStepWelcome" component={LastStepWelcome} />
        <RootStack.Screen
          name="WyreFullScreenNotification"
          component={WyreFullScreenNotification}
        />
        <RootStack.Screen name="UniversalError" component={UniversalError} />
        <RootStack.Screen name="HomeStack" component={HomeStack} />
        <RootStack.Screen name="TransferStack" component={TransferStack} />
        <RootStack.Screen name="UserLoginStack" component={UserLoginStack} />
        <RootStack.Screen
          name="UserBankingStack"
          component={UserBankingStack}
        />
        <RootStack.Screen name="WyreStack" component={WyreStack} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
