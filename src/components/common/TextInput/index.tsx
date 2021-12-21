import React, { useState } from 'react';
import { View } from 'react-native';
import { TextInput as RNTextInput } from 'react-native-paper';
import AppColors from 'src/config/colors';

import styles from './styles';

interface TextInputProps {
  label: string;
  defaultValue?: string;
  placeholder?: string;
  maxLength?: number;
  isNumeric?: boolean;
  changeValue: (text: string) => void
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  defaultValue,
  placeholder,
  maxLength,
  isNumeric,
  changeValue,
}) => {
  const [text, setText] = React.useState(defaultValue || '');
  const [focused, setFocused] = useState(false);

  const textChangeHandler = (txt: string) => {
    const updated = isNumeric ? txt.replace(/[^0-9]/g, '') : txt;
    setText(updated);
    changeValue(updated);
  };

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
        onBlur={() => setFocused(false)}
      />
    </View>
  );
};

export default TextInput;
