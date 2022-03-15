import React from 'react';
import {View, TextStyle} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Button from 'src/components/common/Button';
import {GradientButtonColors} from 'src/utils/constants';
import {Text} from '../Texts';

import styles from './styles';

interface SecondaryButtonProps {
  style?: TextStyle | TextStyle[];
  actionLabel: string;
  isValid: boolean;
  onPress: () => void;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  actionLabel,
  style,
  isValid,
  onPress,
}) => {
  return (
    <View style={style}>
      {isValid ? (
        <LinearGradient
          style={styles.laterActionGradient}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={GradientButtonColors}>
          <Button onPress={onPress}>
            <Text type="Body/Large">{actionLabel}</Text>
          </Button>
        </LinearGradient>
      ) : (
        <View style={styles.continueActionWrapper}>
          <Text
            type="Body/Large"
            style={[styles.buttonStyle, styles.continueAction]}>
            {actionLabel}
          </Text>
        </View>
      )}
    </View>
  );
};

export default SecondaryButton;
