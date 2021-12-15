import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Text from 'src/components/Text';
import { gradientButtonColors } from 'src/utils/constants';

import styles from './styles';

interface SubmitButtonProps {
  actionLabel: string;
  isValid: boolean;
  onSubmit: () => void;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
  actionLabel,
  isValid,
  onSubmit,
}) => {
  return (
    <View>
      {isValid ?
        (
          <LinearGradient
            style={styles.linearGradient}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={gradientButtonColors}
          >
            <TouchableOpacity onPress={onSubmit} >
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
  );
};

export default SubmitButton;
