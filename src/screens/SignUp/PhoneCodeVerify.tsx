import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Text from 'src/components/Text';
import TextInput from 'src/components/TextInput';
import { gradientButtonColors } from 'src/utils/constants';

import styles from './styles';

interface PhoneCodeVerifyProps {
  goToNextStep: () => void;
}

const actionLabel = 'Verify Code';

const PhoneCodeVerify: React.FC<PhoneCodeVerifyProps> = ({
  goToNextStep,
}) => {
  const [isValid, setIsValid] = useState(false);

  const changeValue = (value: string) => {
    setIsValid(value.length === 6);
  };

  return (
    <View style={styles.viewContainer}>
      <View>
        <View>
          <Text style={styles.head}>Enter your verification code</Text>
        </View>
        <View>
          <Text style={styles.description}>We sent a verification code to (333) 666 9999</Text>
        </View>
        <View>
          <TextInput
            label='Enter 6-digit Code'
            placeholder='Enter 6-digit Codee'
            changeValue={changeValue}
          />
        </View>
        <View>
          <TouchableOpacity style={styles.askAction} onPress={() => {}}>
            <Text style={styles.askActionLabel}>Resend code</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        {isValid ?
          (
            <LinearGradient
              style={styles.linearGradient}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={gradientButtonColors}
            >
              <TouchableOpacity onPress={goToNextStep} >
                <Text style={styles.activeContinueAction}>{actionLabel}</Text>
              </TouchableOpacity>
            </LinearGradient>
          ) :
          (
            <View style={styles.continueActionWrapper}>
              <Text style={[styles.buttonStyle, styles.continueAction]}>{actionLabel}</Text>
            </View>
          )}
      </View>
    </View>
  );
};

export default PhoneCodeVerify;
