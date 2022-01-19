import React, { ReactNode, useEffect, useRef, useState } from 'react';
import {
  View,
  TextInput as RNTextInput,
  Animated,
  TextInputProps as RNTextInputProps,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import AppColors from 'src/config/colors';
import { Text } from '../Texts';
import { scale } from 'src/config/dimentions';

import styles from './styles';

type TextInputProps = RNTextInputProps & {
  label?: string;
  isNumeric?: boolean;
  errorMssage?: string;
  showErrorMessage?: boolean;
  left?: ReactNode;
  onChangeText: (text: string) => void;
  onBlur?: () => void;
};

const TextInput: React.FC<TextInputProps> = ({
  value,
  showErrorMessage,
  errorMssage,
  isNumeric,
  label,
  onChangeText,
  onBlur,
  left,
  ...rest
}) => {
  const [text, setText] = React.useState(value || '');
  const [focused, setFocused] = useState(false);
  const [possibleErrorMessage, setPossibleErrorMessage] = useState(false);
  const translateYAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    setText(value || '');
  }, [value]);

  useEffect(() => {
    const timeoutId = setTimeout(
      () => setPossibleErrorMessage(true),
      1000
    );
    return () => clearTimeout(timeoutId);
  }, [text]);

  const textChangeHandler = (txt: string) => {
    const updated = isNumeric ? txt.replace(/[^0-9]/g, '') : txt;
    setText(updated);
    onChangeText(updated);
  };

  const blurHandler = () => {
    setFocused(false);

    if (!text) {
      Animated.timing(translateYAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }

    if (onBlur) {
      onBlur();
    }
  };

  const focusHandler = () => {
    setFocused(true);
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

  const isError = possibleErrorMessage && !!showErrorMessage && !!errorMssage;

  const labelStyle = {
    color: isError ? AppColors.errorColor : AppColors.placeholderColor,
    fontSize: (focused || !!text) ? scale(14) : scale(16),
  };

  const containerStyle = {
    marginBottom : isError ? scale(24) : 0,
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.inputContainer}>
        <Animated.View style={[
          styles.animatedStyle,
          transformStyle
        ]}>
          <Text style={labelStyle}>{label}</Text>
        </Animated.View>
        <View
          style={[
            styles.inputWrapper,
            { borderBottomColor: isError ? AppColors.errorColor : AppColors.whiteColor }
          ]}
        >
          {!!left && <>{left}</>}
          <RNTextInput
            value={text}
            autoCapitalize='none'
            style={styles.input}
            selectionColor={AppColors.errorColor}
            onChangeText={text => textChangeHandler(text)}
            onFocus={() => focusHandler()}
            onBlur={() => blurHandler()}
            onSelectionChange={() => setPossibleErrorMessage(false)}
            {...rest}
          />
        </View>
      </View>
      {isError && (
        <View style={styles.helperContainer}>
          <MaterialCommunityIcons
            style={styles.helperIcon}
            name="information-outline"
            color={AppColors.errorColor}
            size={16}
          />
          <Text style={styles.helperText}>{errorMssage}</Text>
        </View>
      )}
    </View>
  );
};

export default TextInput;
