import React from 'react';
import { Text as RNText } from 'react-native-paper';

interface TextProps {
  style: Object;
  children: React.ReactNode;
}

const Text: React.FC<TextProps> = ({children, style: propsStyle}) => {
  const textStyle = {
    ...propsStyle,
    fontFamily: 'Lato',
  };

  return (
    <RNText style={textStyle}>{children}</RNText>
  );
};

export default Text;
