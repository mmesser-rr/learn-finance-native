import React from 'react';
import { View } from 'react-native';
import { TextInput as RNTextInput } from 'react-native-paper';
import AppColors from 'src/config/colors';

import styles from './styles';

interface TextInputProps {
  label: string;
  defaultValue?: string;
  changeValue: (text: string) => void
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  defaultValue,
  changeValue,
}) => {
  const [text, setText] = React.useState(defaultValue || '');

  const textChangeHandler = (txt: string) => {
    setText(txt);
    changeValue(txt);
  };

  return (
    <View>
      <RNTextInput
        autoFocus={true}
        label={label}
        value={text}
        underlineColor={AppColors.whiteColor}
        activeUnderlineColor={AppColors.whiteColor}
        style={styles.input}
        theme={{ colors: { text: AppColors.whiteColor } }}
        onChangeText={text => textChangeHandler(text)}
      />
    </View>
  );
};

export default TextInput;
