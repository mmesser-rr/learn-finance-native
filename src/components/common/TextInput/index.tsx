import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { TextInput as RNTextInput, HelperText } from 'react-native-paper';

import AppColors from 'src/config/colors';

import styles from './styles';

interface TextInputProps {
  label: string;
  value?: string;
  error?: string;
  defaultValue?: string;
  placeholder?: string;
  maxLength?: number;
  isNumeric?: boolean;
  onChange: (text: string) => void;
  onBlur?: () => void;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  value,
  error,
  defaultValue,
  placeholder,
  maxLength,
  isNumeric,
  onChange,
  onBlur,
}) => {
  const [text, setText] = React.useState(defaultValue || '');
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    setText(value || '');
  }, [value]);

  const textChangeHandler = (txt: string) => {
    const updated = isNumeric ? txt.replace(/[^0-9]/g, '') : txt;
    setText(updated);
    onChange(updated);
  };

  const blurHandler = () => {
    setFocused(false);

    if (onBlur) {
      onBlur();
    }
  };

  const isError = Boolean(error);

  return (
    <View>
      <RNTextInput
        label={label}
        placeholder={focused ? '' : placeholder}
        value={text}
        underlineColor={AppColors.whiteColor}
        activeUnderlineColor={AppColors.whiteColor}
        autoCapitalize='none'
        style={styles.input}
        theme={{
          colors: {
            text: AppColors.whiteColor,
            placeholder: AppColors.placeholderColor,
            accent: AppColors.whiteColor,
          }
        }}
        maxLength={maxLength}
        onChangeText={text => textChangeHandler(text)}
        onFocus={() => setFocused(true)}
        onBlur={() => blurHandler()}
      />
      {isError && (
        <HelperText type='error'>
          {error}
        </HelperText>
      )}
    </View>
  );
};

export default TextInput;
