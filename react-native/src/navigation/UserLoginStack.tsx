import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import UserFaceId from 'src/screens/UserBanking/FaceId';

const Stack = createStackNavigator();

const UserLoginStack: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="UserFaceId"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="UserFaceId" component={UserFaceId} />
    </Stack.Navigator>
  );
};

export default UserLoginStack;
