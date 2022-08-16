import * as React from 'react';
import {NavigationContainerRef} from '@react-navigation/native';
import { log } from 'src/utils/functions';

// NavigationContainer is referred here - Check NavigationStack
export const navigationRef = React.createRef<NavigationContainerRef>();

function navigate(name: string, params?: any) {
  log('content', `Navigating to ${name}`);
  navigationRef.current?.navigate(name, params);
}

function goBack() {
  navigationRef.current?.goBack();
}

export default {
  navigate,
  goBack,
};
