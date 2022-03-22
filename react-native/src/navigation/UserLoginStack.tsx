import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import UserFaceId from 'src/screens/UserBanking/FaceId';
import UserLogin from 'src/screens/UserBanking/UserLogin';
import ForgotPassword from 'src/screens/UserBanking/ForgotPassword';

const Stack = createStackNavigator();

const UserLoginStack: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="UserLogin"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="UserLogin" component={UserLogin} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="UserFaceId" component={UserFaceId} />
    </Stack.Navigator>
  );
};

export default UserLoginStack;
