import React from 'react';
import { Button as RNButton } from 'react-native-paper';

interface ButtonProps {
  style: Object;
  labelStyle: Object;
  uppercase?: Boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  style,
  labelStyle: labelStyleProps,
  uppercase,
}) => {
  const labelStyle = {
    ...labelStyleProps,
    fontFamily: 'Lato',
  };

  return (
    <RNButton style={style} uppercase={!!uppercase} labelStyle={labelStyle}>{children}</RNButton>
  );
};

export default Button;
