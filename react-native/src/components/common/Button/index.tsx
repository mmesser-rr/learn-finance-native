import React from 'react';
import { TextStyle, TouchableOpacity, View } from 'react-native';

import { generateTextStyle } from 'src/utils/functions';

import styles from './styles';

interface ButtonProps {
  children: React.ReactNode;
  actionStyle?: TextStyle | TextStyle[];
  labelStyle?: TextStyle | TextStyle[];
  onPress?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  actionStyle: propsActionStyle,
  labelStyle: propsLabelStyle,
  onPress,
}) => {
  const actionStyle = generateTextStyle(styles.action, propsActionStyle);
  const labelStyle = generateTextStyle(styles.label, propsLabelStyle);

  return (
    <TouchableOpacity onPress={onPress} style={actionStyle}>
      <View style={labelStyle}>{children}</View>
    </TouchableOpacity>
  );
};

export default Button;
