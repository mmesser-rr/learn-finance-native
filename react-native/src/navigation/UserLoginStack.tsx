import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import UserFaceId from 'src/screens/UserBanking/FaceId';
import WithdrawDetails from 'src/screens/UserBanking/WithdrawDetails';
import WithdrawAmount from 'src/screens/UserBanking/WithdrawAmount';
import WithdrawReview from 'src/screens/UserBanking/WithdrawReview';

const Stack = createStackNavigator();

const UserLoginStack: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="UserFaceId"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="UserFaceId" component={UserFaceId} />
      <Stack.Screen name="WithdrawDetails" component={WithdrawDetails} />
      <Stack.Screen name="WithdrawAmount" component={WithdrawAmount} />
      <Stack.Screen name="WithdrawReview" component={WithdrawReview} />
    </Stack.Navigator>
  );
};

export default UserLoginStack;
