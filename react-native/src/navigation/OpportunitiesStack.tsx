import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Opportunities from 'src/screens/Opportunities';
import LearnVideo from 'src/screens/Opportunities/Learn/LearnVideo';
import Exercise from 'src/screens/Opportunities/Learn/Exercise';
import Redeem from 'src/screens/Opportunities/Reward/redeem';
import { OpportunitiesStackParamList } from 'src/types/opportunitiesRouterTypes';

const Stack = createStackNavigator<OpportunitiesStackParamList>();

const OpportunitiesStack: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Opportunities">
      
      <Stack.Screen name="Opportunities" component={Opportunities} />
      <Stack.Screen name="LearnVideo" component={LearnVideo} />
      <Stack.Screen name="Exercise" component={Exercise} initialParams={{started: false}} />
      <Stack.Screen name="Redeem" component={Redeem} />

    </Stack.Navigator>
  );
};

export default OpportunitiesStack;
