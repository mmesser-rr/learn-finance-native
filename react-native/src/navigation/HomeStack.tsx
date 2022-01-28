import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Home from 'src/screens/Banking/Home';
import Opportunities from 'src/screens/Banking/Opportunities';
import Community from 'src/screens/Banking/Community';
import Profile from 'src/screens/Banking/Profile';
import { Text } from 'src/components/common/Texts';

const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false
        }}
        tabBarOptions={{
          style: {
            backgroundColor: 'red',
            paddingTop: 16,
            borderTopWidth: 1,
            height: 83,
          },
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          // options={{
          //   // tabBarIcon: ({ focused }) => (focused ? <HomeSvg /> : <HomeSvg />),
          //   tabBarLabel: ({ focused }) => <Text>Home</Text>,
          // }}
        />
        <Tab.Screen
          name="Opportunities"
          component={Opportunities}
          // options={{
          //   // tabBarIcon: ({ focused }) => (focused ? <BookSvg /> : <BookSvg />),
          //   tabBarLabel: ({ focused }) => (
          //     <Text>Opportunities</Text>
          //   ),
          // }}
        />
        <Tab.Screen
          name="Community"
          component={Community}
          // options={{
          //   // tabBarIcon: ({ focused }) => (focused ? <BookSvg /> : <BookSvg />),
          //   tabBarLabel: ({ focused }) => (
          //     <Text>Community</Text>
          //   ),
          // }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          // options={{
          //   // tabBarIcon: ({ focused }) => (focused ? <UserSvg /> : <UserSvg />),
          //   tabBarLabel: ({ focused }) => (
          //     <Text>Profile</Text>
          //   ),
          // }}
        />
      </Tab.Navigator>
    </>
  );
};

export default HomeStack;
