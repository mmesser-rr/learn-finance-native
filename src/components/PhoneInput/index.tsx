import React, { useState } from 'react';
import { View } from 'react-native';
import TextInputMask from 'react-native-text-input-mask';
import { TextInput } from 'react-native-paper';

import AppColors from 'src/config/colors';

import styles from './styles';

interface PhoneInputProps {
  label: string;
  defaultValue?: string;
  changeValue: (text: string) => void
}

const PhoneInput: React.FC<PhoneInputProps> = ({
  label,
  defaultValue,
  changeValue,
}) => {
  const [text, setText] = useState(defaultValue || '');

  const textChangeHandler = (txt: string | undefined) => {
    setText(txt || '');
    changeValue(txt || '');
  };

  return (
    <View>
      <TextInput
        autoFocus={true}
        label={label}
        value={text}
        underlineColor={AppColors.whiteColor}
        activeUnderlineColor={AppColors.whiteColor}
        style={styles.input}
        theme={{
          colors: {
            text: AppColors.whiteColor,
            placeholder: AppColors.placeholderColor,
          }
        }}
        render={props =>
          <TextInputMask
            value={props.value}
            style={styles.inputMask}
            selectionColor={AppColors.whiteColor}
            mask="+1 [000] [000] [0000]"
            onChangeText={(formatted, extracted) => {
              textChangeHandler(extracted);
            }}
          />
        }
      />
    </View>
  );
};

export default PhoneInput;
