import React from 'react';
import {View} from 'react-native';

import NavigationService from 'src/navigation/NavigationService';
import {Text} from 'src/components/common/Texts';
import Button from 'src/components/common/Button';
import OnBoardingStartLayout from 'src/components/layout/OnBoardingStartLayout'

import styles from './styles';

const Welcome: React.FC = () => {
  const onJoin = () => NavigationService.navigate('SignUp');
  const onLogin = () => NavigationService.navigate('UserLoginStack');

  const contentEle = () => {
    return (
      <>
        <View style={styles.title}>
          <Text type="Headline/Large">
            Banking for the People
          </Text>
        </View>
        <View>
          <Text type="Title/Large">
            Where equal access provides equal opportunity.
          </Text>
        </View>
      </>
    );
  };

  const actionEle = () => {
    return (
      <>
        <View>
          <Button actionStyle={styles.joinAction} onPress={onJoin}>
            <Text type="Body/Large" style={styles.joinLabel}>Join the club</Text>
          </Button>
        </View>
        <View>
          <Button actionStyle={styles.loginAction} onPress={onLogin}>
            <Text type="Body/Large">Log in</Text>
          </Button>
        </View>
      </>
    );
  };

  return (
    <OnBoardingStartLayout
      content={contentEle()}
      action={actionEle()}
    />
  );
};

export default Welcome;
