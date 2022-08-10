import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Opportunities from 'src/screens/Opportunities';
import LearnVideo from 'src/screens/Opportunities/Learn/LearnVideo';
import Exercise from 'src/screens/Opportunities/Learn/Exercise';
import Redeem from 'src/screens/Opportunities/Reward/Redeem';
import { OpportunitiesStackParamList } from 'src/types/opportunitiesRouterTypes';
import AboutEvent from 'src/screens/Opportunities/Event/AboutEvent';

const Stack = createStackNavigator<OpportunitiesStackParamList>();

const OpportunitiesStack: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Opportunities">
      
      <Stack.Screen name="Opportunities" component={Opportunities} options={{ headerShown: false }} />
      <Stack.Screen name="LearnVideo" component={LearnVideo} options={{ headerShown: false }} />
      <Stack.Screen name="Exercise" component={Exercise} initialParams={{started: false}} options={{ headerShown: false }} />
      <Stack.Screen name="Redeem" component={Redeem} options={{ headerShown: false }} />
      <Stack.Screen name="AboutEvent" component={AboutEvent} options={{ headerShown: false }} />

    </Stack.Navigator>
  );
};

export default OpportunitiesStack;
