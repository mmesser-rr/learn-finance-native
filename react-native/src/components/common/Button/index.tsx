import React from 'react';
import { TextStyle, TouchableOpacity, View } from 'react-native';
import AppColors from 'src/config/colors';
import { Metrics } from 'src/config/dimentions';

import { generateTextStyle } from 'src/utils/functions';

import styles from './styles';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'black' | 'red' | 'transparent',
  actionStyle?: TextStyle | TextStyle[];
  labelStyle?: TextStyle | TextStyle[];
  disabled?: boolean;
  onPress?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  actionStyle: propsActionStyle,
  labelStyle: propsLabelStyle,
  disabled,
  onPress,
}) => {
  const backgroundColor = variant === 'red'
    ? AppColors.accentRed100
    : (variant === 'transparent'
      ? AppColors.transparent
      : AppColors.coreBlack100)
  const borderColor = AppColors.coreWhite100
  const borderWidth = variant === 'transparent' ? Metrics.pixels.size1 : 0

  const actionStyle = generateTextStyle(
    {
      ...styles.action,
      backgroundColor,
      borderColor,
      borderWidth
    },
    propsActionStyle
  );
  const labelStyle = generateTextStyle(styles.label, propsLabelStyle);

  return (
    <TouchableOpacity onPress={onPress} style={actionStyle} disabled={disabled}>
      <View style={labelStyle}>{children}</View>
    </TouchableOpacity>
  );
};

export default Button;
