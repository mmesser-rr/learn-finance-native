import React, {useEffect} from 'react';
import {ActivityIndicator} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
import SplashScreen from 'react-native-splash-screen';
import Amplify from 'aws-amplify';

import Navigator from './navigation';
import configureStore from './store';

//talk to amplify
import awsconfig from 'src/aws-exports';
Amplify.configure(awsconfig);

const {persistor, store} = configureStore();

const EntryPoint: React.FC = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
        <Navigator />
      </PersistGate>
    </Provider>
  );
};

export default EntryPoint;
