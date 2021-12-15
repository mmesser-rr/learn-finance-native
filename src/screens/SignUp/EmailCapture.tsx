import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Text from 'src/components/Text';
import TextInput from 'src/components/TextInput';
import { gradientButtonColors } from 'src/utils/constants';

import styles from './styles';

interface EmailCaptureProps {
  goToNextStep: () => void;
}

const actionLabel = 'Sign Up';

const EmailCapture: React.FC<EmailCaptureProps> = ({
  goToNextStep,
}) => {
  const [isValid, setIsValid] = useState(false);

  const codeChangeHandler = (value: string) => {
    setIsValid(!!value);
  };

  return (
    <View style={styles.viewContainer}>
      <View>
        <View>
          <Text style={styles.head}>What's your email?</Text>
        </View>
        <View>
          <TextInput
            label='Email Address'
            placeholder='Email Address'
            changeValue={codeChangeHandler}
          />
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

export default EmailCapture;
