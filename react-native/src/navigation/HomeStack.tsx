import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from 'src/screens/Banking/Home';
import Opportunities from 'src/screens/Banking/Opportunities';
import Community from 'src/screens/Banking/Community';
import Profile from 'src/screens/Banking/Profile';
import {Text} from 'src/components/common/Texts';
import AppColors from 'src/config/colors';
import ActiveHomeIcon from 'src/assets/icons/footer-nav-home-red.svg';
import HomeIcon from 'src/assets/icons/footer-nav-home.svg';
import ActiveOpportunitiesIcon from 'src/assets/icons/footer-nav-opportunities-red.svg';
import OpportunitiesIcon from 'src/assets/icons/footer-nav-opportunities.svg';
import ActiveCommunityIcon from 'src/assets/icons/footer-nav-community-red.svg';
import CommunityIcon from 'src/assets/icons/footer-nav-community.svg';
import ActiveProfileIcon from 'src/assets/icons/footer-nav-profile-red.svg';
import ProfileIcon from 'src/assets/icons/footer-nav-profile.svg';
import {scale} from 'src/config/dimentions';

const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: AppColors.coreBlack90,
          borderTopWidth: 0,
          paddingTop: scale(12),
        },
      }}
      tabBarOptions={{
        activeBackgroundColor: AppColors.coreBlack90,
        inactiveBackgroundColor: AppColors.coreBlack90,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? <ActiveHomeIcon /> : <HomeIcon />,
          tabBarLabel: ({focused}) => (
            <Text
              type="Body/Small"
              style={focused ? {color: AppColors.accentRed100} : {}}
            >
              Home
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Opportunities"
        component={Opportunities}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? <ActiveOpportunitiesIcon /> : <OpportunitiesIcon />,
          tabBarLabel: ({focused}) => (
            <Text
              type="Body/Small"
              style={focused ? {color: AppColors.accentRed100} : {}}
            >
              Opportunities
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Community"
        component={Community}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? <ActiveCommunityIcon /> : <CommunityIcon />,
          tabBarLabel: ({focused}) => (
            <Text
              type="Body/Small"
              style={focused ? {color: AppColors.accentRed100} : {}}
            >
              Community
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? <ActiveProfileIcon /> : <ProfileIcon />,
          tabBarLabel: ({focused}) => (
            <Text
              type="Body/Small"
              style={focused ? {color: AppColors.accentRed100} : {}}
            >
              Profile
            </Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeStack;
