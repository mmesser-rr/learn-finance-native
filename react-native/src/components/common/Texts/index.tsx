import React from 'react';
import { TextStyle, Text as RNText } from 'react-native';
import { generateTextStyle } from 'src/utils/functions';

import styles from './styles';

interface TextProps {
  style?: TextStyle | TextStyle[];
  children: React.ReactNode;
  onPress?: () => void;
}

export const Text: React.FC<TextProps> = ({children, style: propsStyle, onPress}) => {
  const style = generateTextStyle(styles.text, propsStyle);

  return (
    <RNText style={style} onPress={onPress}>{children}</RNText>
  );
};

export const BigTitle: React.FC<TextProps> = ({
  children,
  style: propsStyle,
}) => {
  const style = generateTextStyle(styles.bigTitle, propsStyle);

  return (
    <Text style={style}>{children}</Text>
  );
};

export const Title: React.FC<TextProps> = ({
  children,
  style: propsStyle,
}) => {
  const style = generateTextStyle(styles.title, propsStyle);

  return (
    <Text style={style}>{children}</Text>
  );
};

export const Caption: React.FC<TextProps> = ({
  children,
  style: propsStyle,
}) => {
  const style = generateTextStyle(styles.caption, propsStyle);

  return (
    <Text style={style}>{children}</Text>
  );
};
