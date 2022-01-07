import React, { useState, createRef, useRef, useEffect } from 'react';
import { View, TextInput as RNTextInput } from 'react-native';
import RNTextInputMask from 'react-native-text-input-mask';
import { TextInput } from 'react-native-paper';

import AppColors from 'src/config/colors';
import EyeSlashIcon from 'src/assets/icons/eye-slash.svg';
import EyeIcon from 'src/assets/icons/eye.svg';

import styles from './styles';

interface TextInputMaskProps {
  label: string;
  mask: string;
  defaultValue?: string;
  autoFocus?: boolean;
  isSecure?: boolean;
  changeValue: (text: string) => void
}

const TextInputMask: React.FC<TextInputMaskProps> = ({
  label,
  mask,
  defaultValue,
  autoFocus,
  isSecure,
  changeValue,
}) => {
  const [text, setText] = useState(defaultValue || '');
  const [securityState, setSecurityState] = useState(true);

  const textChangeHandler = (txt: string | undefined) => {
    setText(txt || '');
    changeValue(txt || '');
  };

  return (
    <View>
      <TextInput
        label={label}
        value={text}
        underlineColor={AppColors.whiteColor}
        autoFocus={true}
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
            autoFocus={!!autoFocus}
            value={props.value}
            style={styles.inputMask}
            selectionColor={AppColors.whiteColor}
            mask={mask}
            secureTextEntry={isSecure && securityState}
            returnKeyType='next'
            keyboardType={'numeric'}
            onChangeText={(formatted, extracted) => {
              textChangeHandler(extracted);
            }}
          />
        }
        right={
          isSecure && (
            <TextInput.Icon
              name={() => securityState ? <EyeSlashIcon /> : <EyeIcon />}
              color={AppColors.errorColor}
              onPress={() => setSecurityState(!securityState)}
            />
          )
        }
      />
    </View>
  );
};

export default TextInputMask;
