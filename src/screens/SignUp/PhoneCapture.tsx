import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Text from 'src/components/Text';
import PhoneInput from 'src/components/PhoneInput';

import styles from './styles';
import { gradientButtonColors } from 'src/utils/constants';

interface PhoneCaptureProps {
  goToNextStep: () => void;
}

const actionLabel = 'Continue';

const PhoneCapture: React.FC<PhoneCaptureProps> = ({
  goToNextStep,
}) => {
  const [isValid, setIsValid] = useState(false);

  const changeValue = (value: string) => {
    setIsValid(value.length === 10);
  };

  return (
    <View style={styles.viewContainer}>
      <View>
        <View>
          <View>
            <Text style={styles.head}>To continue, verify your phone number</Text>
          </View>
          <View>
            <Text style={styles.description}>We'll text a verification code to this number.</Text>
          </View>
          <View>
            <PhoneInput
              label='Phone Number'
              changeValue={changeValue}
            />
          </View>
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

export default PhoneCapture;
