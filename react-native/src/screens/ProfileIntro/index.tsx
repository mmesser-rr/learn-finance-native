import React from 'react';
import {View} from 'react-native';

import NavigationService from 'src/navigation/NavigationService';
import {Text} from 'src/components/common/Texts';
import Button from 'src/components/common/Button';
import OnBoardingStartLayout from 'src/components/layout/OnBoardingStartLayout';

import styles from './styles';

const ProfileIntro: React.FC = () => {
  const onFinish = () => NavigationService.navigate('SelectPlayerTag');

  const contentEle = () => {
    return (
      <>
        <View style={styles.block}>
          <Text type="Headline/Large">One last thing</Text>
        </View>
        <View style={styles.block}>
          <Text type="Title/Large" style={styles.title}>
            Create your players tag
          </Text>
          <Text type="Body/Large">
            Choose your username to join the community.
          </Text>
        </View>
        <View style={styles.block}>
          <Text type="Title/Large" style={styles.title}>
            Verify your email
          </Text>
          <Text type="Body/Large">
            Confirming your email address helps to protect your personal info.
          </Text>
        </View>
      </>
    );
  };

  const actionEle = () => {
    return (
      <Button onPress={onFinish} actionStyle={styles.actionStyle}>
        <Text type="Body/Large" style={styles.actionLabel}>Next: Finish account setup</Text>
      </Button>
    );
  };

  return (
    <OnBoardingStartLayout
      content={contentEle()}
      action={actionEle()}
    />
  );
};

export default ProfileIntro;
