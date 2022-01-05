import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { TextInput as RNTextInput } from 'react-native-paper';
import { TextInputProps as RNTextInputProps } from 'react-native-paper/lib/typescript/components/TextInput/TextInput';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import AppColors from 'src/config/colors';
import { Text } from '../Texts';

import styles from './styles';

type TextInputProps = Omit<RNTextInputProps, 'theme'> & {
  errorMssage?: string;
  isNumeric?: boolean;
  onChangeText: (text: string) => void;
  onBlur?: () => void;
};

const TextInput: React.FC<TextInputProps> = ({
  value,
  errorMssage,
  defaultValue,
  placeholder,
  isNumeric,
  onChangeText,
  onBlur,
  ...rest
}) => {
  const [text, setText] = React.useState(defaultValue || '');
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    setText(value || '');
  }, [value]);

  const textChangeHandler = (txt: string) => {
    const updated = isNumeric ? txt.replace(/[^0-9]/g, '') : txt;
    setText(updated);
    onChangeText(updated);
  };

  const blurHandler = () => {
    setFocused(false);

    if (onBlur) {
      onBlur();
    }
  };

  return (
    <View>
      <RNTextInput
        placeholder={focused ? '' : placeholder}
        value={text}
        underlineColor={!!errorMssage ? AppColors.errorColor : AppColors.whiteColor}
        activeUnderlineColor={!!errorMssage ? AppColors.errorColor : AppColors.whiteColor}
        autoCapitalize='none'
        style={styles.input}
        theme={{
          colors: {
            text: AppColors.whiteColor,
            placeholder: AppColors.placeholderColor,
            accent: AppColors.whiteColor,
          }
        }}
        onChangeText={text => textChangeHandler(text)}
        onFocus={() => setFocused(true)}
        onBlur={() => blurHandler()}
        {...rest}
      />
      {!!errorMssage && (
        <View style={styles.helperWrapper}>
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
