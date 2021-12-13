import React from 'react';
import { Button as RNButton } from 'react-native-paper';

interface ButtonProps {
  style: Object;
  labelStyle: Object;
  uppercase?: Boolean;
  children: React.ReactNode;
  onPress?: () => void
}

const Button: React.FC<ButtonProps> = ({
  children,
  style,
  labelStyle: labelStyleProps,
  uppercase,
  onPress,
}) => {
  const labelStyle = {
    ...labelStyleProps,
    fontFamily: 'Lato',
  };

  return (
    <RNButton
      style={style}
      uppercase={!!uppercase}
      labelStyle={labelStyle}
      onPress={onPress}
    >{children}</RNButton>
  );
};

export default Button;
