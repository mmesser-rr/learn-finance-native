import React from 'react';
import {View} from 'react-native';
import { useSelector } from 'react-redux';

import {Text} from 'src/components/common/Texts';
import NavigationService from 'src/navigation/NavigationService';
import { RootState } from 'src/store/root-state';

import styles from './styles';

const OnboardingSteps: React.FC = () => {
  const {step, isSignInLink} = useSelector((state: RootState) => state.onboardingReducer);

  const goToSignIn = () => {
    NavigationService.navigate('UserLoginStack', {screen: 'UserLogin'});
  };

  return (
    <View style={styles.container}>
      <Text type="Title/Small">
        {step}/13
      </Text>
      {isSignInLink && (
        <Text type="Body/Large" style={styles.signIn} onPress={goToSignIn}>
          Log in
        </Text>
      )}
    </View>
  );
};

export default OnboardingSteps;
