import React from 'react';
import { TextStyle, TouchableOpacity } from 'react-native';
import { generateTextStyle } from 'src/utils/functions';

import { Caption } from '../Texts';

import styles from './styles';

interface ButtonProps {
  children: React.ReactNode;
  propsActionStyle?: TextStyle | TextStyle[];
  propsLabelStyle?: TextStyle | TextStyle[];
  onPress?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  propsActionStyle,
  propsLabelStyle,
  onPress,
}) => {
  const actionStyle = generateTextStyle(styles.action, propsActionStyle);
  const labelStyle = generateTextStyle(styles.label, propsLabelStyle);

  return (
    <TouchableOpacity onPress={onPress} style={actionStyle}>
      <Caption style={labelStyle}>{children}</Caption>
    </TouchableOpacity>
  );
};

export default Button;
