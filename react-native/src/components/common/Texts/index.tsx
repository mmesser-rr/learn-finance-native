import React from 'react';
import {TextStyle, Text as RNText} from 'react-native';
import {generateTextStyle} from 'src/utils/functions';

import styles from './styles';

interface TextProps {
  style?: TextStyle | TextStyle[];
  type: String;
  children: React.ReactNode;
  onPress?: () => void;
}

export const Text: React.FC<TextProps> = ({
  children,
  type,
  style: propsStyle,
  onPress,
}) => {
  const typeNames = type.toLowerCase().split('/');
  const defaultStyleName = `${typeNames[1]}${typeNames[0]
    .charAt(0)
    .toUpperCase()}${typeNames[0].slice(1)}`;
  const style = generateTextStyle(
    styles[defaultStyleName as keyof typeof styles],
    propsStyle,
  );

  return (
    <RNText style={style} onPress={onPress}>
      {children}
    </RNText>
  );
};
