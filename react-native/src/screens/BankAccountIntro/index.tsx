import React from 'react';
import {View} from 'react-native';

import NavigationService from 'src/navigation/NavigationService';
import {Text} from 'src/components/common/Texts';
import Button from 'src/components/common/Button';
import OnBoardingStartLayout from 'src/components/layout/OnBoardingStartLayout';

import styles from './styles';

const BankAccountIntro: React.FC = () => {
  const onVerify = () => NavigationService.navigate('CaptureDOB');

  const contentEle = () => {
    return (
      <>
        <View style={styles.block}>
          <Text type="Headline/Large">Open your BankDAO accounts</Text>
        </View>
        <View style={styles.block}>
          <Text type="Title/Large" style={styles.title}>
            Verify Identity
          </Text>
          <Text type="Body/Large">
            You will need to enter your date of birth, address, and social security number. This has no impact on your credit nor will your social security number be stored.
          </Text>
        </View>
        <View style={styles.block}>
          <Text type="Title/Large" style={styles.title}>
            Open the bank accounts
          </Text>
          <Text type="Body/Large">
            Once your identity is verified, your BankDAO accounts will be established.
          </Text>
        </View>
      </>
    );
  };

  const actionEle = () => {
    return (
      <Button onPress={onVerify} actionStyle={styles.actionStyle}>
        <Text type="Body/Large" style={styles.actionLabel}>Next: Verify identify</Text>
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

export default BankAccountIntro;
