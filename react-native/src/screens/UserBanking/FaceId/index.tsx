import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ReactNativeBiometrics from 'react-native-biometrics';

import {Text} from 'src/components/common/Texts';
import SubmitButton from 'src/components/common/SubmitButton';
import AppLayout from 'src/components/layout/AppLayout';
import Button from 'src/components/common/Button';
import {GradientButtonColors} from 'src/utils/constants';
import FaceIDIcon from 'src/assets/icons/face-id.svg';

import styles from './styles';

const UserFaceId: React.FC = () => {
  const [isFaceID, setIsFaceID] = useState(false);

  useEffect(() => {
    checkBiometricsSupport();
  }, []);

  const checkBiometricsSupport = async () => {
    const { available, biometryType } = await ReactNativeBiometrics.isSensorAvailable();
    setIsFaceID(available && biometryType === ReactNativeBiometrics.FaceID);
  };

  const onTurnOnFaceID = async () => {
    let {success, error} = await ReactNativeBiometrics.simplePrompt({
      promptMessage: 'Sign in with Touch ID',
      cancelButtonText: 'Close',
    });
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
      <View style={styles.style}>
        <FaceIDIcon />
      </View>
      <View>
        <SubmitButton
          isValid={isFaceID}
          actionLabel="Turn on Face ID"
          style={styles.submit}
          onSubmit={onTurnOnFaceID}
        />
        <LinearGradient
          style={styles.laterActionGradient}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={GradientButtonColors}>
          <Button>
            <Text type="Body/Large">Maybe Later</Text>
          </Button>
        </LinearGradient>
      </View>
    </AppLayout>
  );
};

export default UserFaceId;
