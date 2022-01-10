import React, { useState } from 'react';
import { KeyboardType, View } from 'react-native';
import RNTextInputMask from 'react-native-text-input-mask';
import { TextInput } from 'react-native-paper';

import AppColors from 'src/config/colors';
import EyeSlashIcon from 'src/assets/icons/eye-slash.svg';
import EyeIcon from 'src/assets/icons/eye.svg';

import styles from './styles';

interface TextInputMaskProps {
  label: string;
  mask: string;
  value?: string;
  autoFocus?: boolean;
  isSecure?: boolean;
  keyboardType?: KeyboardType;
  changeValue: (text: string) => void
}

const TextInputMask: React.FC<TextInputMaskProps> = ({
  label,
  mask,
  value,
  autoFocus,
  isSecure,
  keyboardType,
  changeValue,
}) => {
  const [text, setText] = useState(value || '');
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
        autoFocus={!!autoFocus}
        activeUnderlineColor={AppColors.whiteColor}
        style={styles.input}
        keyboardType={keyboardType}
        theme={{
          colors: {
            text: AppColors.whiteColor,
            placeholder: AppColors.placeholderColor,
          }
        }}
        render={props => {
          const {ref, ...rest} = props;
          return <RNTextInputMask
            {...rest}
            style={styles.inputMask}
            selectionColor={AppColors.whiteColor}
            mask={mask}
            secureTextEntry={isSecure && securityState}
            onChangeText={(formatted, extracted) => {
              textChangeHandler(extracted);
            }}
          />;
        }}
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
