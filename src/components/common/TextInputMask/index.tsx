import React, { useState } from 'react';
import { View } from 'react-native';
import RNTextInputMask from 'react-native-text-input-mask';
import { TextInput } from 'react-native-paper';

import AppColors from 'src/config/colors';

import styles from './styles';

interface TextInputMaskProps {
  label: string;
  mask: string;
  defaultValue?: string;
  autoFocus?: boolean;
  changeValue: (text: string) => void
}

const TextInputMask: React.FC<TextInputMaskProps> = ({
  label,
  mask,
  defaultValue,
  autoFocus,
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
        autoFocus={!!autoFocus}
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
          <RNTextInputMask
            value={props.value}
            style={styles.inputMask}
            selectionColor={AppColors.whiteColor}
            mask={mask}
            onChangeText={(formatted, extracted) => {
              textChangeHandler(extracted);
            }}
          />
        }
      />
    </View>
  );
};

export default TextInputMask;
