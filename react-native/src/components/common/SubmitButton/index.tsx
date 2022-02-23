import React from 'react';
import {View, TouchableOpacity, TextStyle} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {GradientButtonColors} from 'src/utils/constants';
import {Text} from '../Texts';

import styles from './styles';

interface SubmitButtonProps {
  style?: TextStyle | TextStyle[];
  actionLabel: string;
  isValid: boolean;
  onSubmit: () => void;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
  actionLabel,
  style,
  isValid,
  onSubmit,
}) => {
  return (
    <View style={style}>
      {isValid ? (
        <LinearGradient
          style={styles.linearGradient}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          locations={[0, 0, 0.2388, 1]}
          colors={GradientButtonColors}
        >
          <TouchableOpacity onPress={onSubmit}>
            <Text type="Body/Large" style={styles.activeContinueAction}>
              {actionLabel}
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      ) : (
        <View style={styles.continueActionWrapper}>
          <Text
            type="Body/Large"
            style={[styles.buttonStyle, styles.continueAction]}
          >
            {actionLabel}
          </Text>
        </View>
      )}
    </View>
  );
};

export default SubmitButton;
