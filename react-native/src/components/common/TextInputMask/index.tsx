import React, { useRef, useState } from 'react';
import { KeyboardType, View, Animated, TouchableOpacity } from 'react-native';
import RNTextInputMask from 'react-native-text-input-mask';

import AppColors from 'src/config/colors';
import EyeSlashIcon from 'src/assets/icons/eye-slash.svg';
import EyeIcon from 'src/assets/icons/eye.svg';
import InfoIcon from 'src/assets/icons/info.svg';
import { scale } from 'src/config/dimentions';
import { Text } from '../Texts';

import styles from './styles';

interface TextInputMaskProps {
  label: string;
  mask: string;
  value?: string;
  error?: string;
  autoFocus?: boolean;
  isSecure?: boolean;
  keyboardType?: KeyboardType;
  changeValue: (text: string) => void
}

const TextInputMask: React.FC<TextInputMaskProps> = ({
  label,
  mask,
  value,
  error,
  autoFocus,
  isSecure,
  keyboardType,
  changeValue,
}) => {
  const [text, setText] = useState(value || '');
  const [securityState, setSecurityState] = useState(true);
  const translateYAnim = useRef(new Animated.Value(0)).current;

  const textChangeHandler = (txt: string | undefined) => {
    setText(txt || '');
    changeValue(txt || '');
  };

  const blurHandler = () => {
    if (!text) {
      Animated.timing(translateYAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };

  const focusHandler = () => {
    Animated.timing(translateYAnim, {
      toValue: scale(-16),
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const transformStyle = {
    transform : [{ 
      translateY : translateYAnim,
    }],
  };

  const labelStyle = !!error ? styles.errorLabel : styles.label;

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Animated.View style={[
          styles.animatedStyle,
          transformStyle
        ]}>
          <Text type='Body/Medium' style={labelStyle}>{label}</Text>
        </Animated.View>
        <View style={styles.inputWrapper}>
          <RNTextInputMask
            value={text}
            autoFocus={!!autoFocus}
            style={styles.input}
            keyboardType={keyboardType}
            selectionColor={AppColors.accentRed100}
            mask={mask}
            secureTextEntry={isSecure && securityState}
            onChangeText={(formatted, extracted) => {
              textChangeHandler(extracted);
            }}
            onFocus={() => focusHandler()}
            onBlur={() => blurHandler()}
          />
          {isSecure && (
            <TouchableOpacity onPress={() => setSecurityState(!securityState)}>
              {securityState ? <EyeSlashIcon /> : <EyeIcon />}
            </TouchableOpacity>
          )}
        </View>
      </View>
      {!!error && (
        <View style={styles.helperContainer}>
          <InfoIcon style={styles.helperIcon} />
          <Text type='Body/Medium' style={styles.helperText}>{error}</Text>
        </View>
        )}
    </View>
  );
};

export default TextInputMask;