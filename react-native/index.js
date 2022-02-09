/**
 * @format
 */

import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import App from './src/Entrypoint';
import { name as appName } from './app.json';
import { enableScreens } from 'react-native-screens';

//talk to amplify
import Amplify from 'aws-amplify'
import awsconfig from './src/aws-exports'
Amplify.configure(awsconfig)

enableScreens();

AppRegistry.registerComponent(appName, () => App);
