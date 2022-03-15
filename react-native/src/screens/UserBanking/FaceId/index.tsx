import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import ReactNativeBiometrics from 'react-native-biometrics';

import {Text} from 'src/components/common/Texts';
import SubmitButton from 'src/components/common/SubmitButton';
import AppLayout from 'src/components/layout/AppLayout';
import FaceIDIcon from 'src/assets/icons/face-id.svg';

import styles from './styles';
import NavigationService from 'src/navigation/NavigationService';
import SecondaryButton from 'src/components/common/SecondaryButton';

const UserFaceId: React.FC = () => {
  const [isFaceID, setIsFaceID] = useState(false);

  useEffect(() => {
    checkBiometricsSupport();
  }, []);

  const checkBiometricsSupport = async () => {
    const {available, biometryType} =
      await ReactNativeBiometrics.isSensorAvailable();
    setIsFaceID(available && biometryType === ReactNativeBiometrics.FaceID);
  };

  const onTurnOnFaceID = async () => {
    let {success, error} = await ReactNativeBiometrics.simplePrompt({
      promptMessage: 'Sign in with Touch ID',
      cancelButtonText: 'Close',
    });

    if (success) {
    }
  };

  const onLater = () => {
    NavigationService.navigate('UserBankingStack', {screen: 'WithdrawDetails'});
  };

  const next = () => {
    NavigationService.navigate('TransferStack', {screen: 'DepositResult'});
  };

  return (
    <AppLayout containerStyle={styles.container}>
      <View>
        <Text type="Headline/Small" style={styles.head}>
          Turn on Face ID
        </Text>
      </View>
      <View>
        <Text type="Body/Large" style={styles.caption}>
          Would you like to turn on Face ID for your future login?
        </Text>
      </View>
      <View style={styles.faceId}>
        <FaceIDIcon />
      </View>
      <View>
        <SubmitButton
          isValid={isFaceID}
          actionLabel="Turn on Face ID"
          style={styles.submit}
          onSubmit={onTurnOnFaceID}
        />
        <SecondaryButton
          isValid={true}
          actionLabel="Maybe Later"
          onPress={next}
        />
      </View>
    </AppLayout>
  );
};

export default UserFaceId;
