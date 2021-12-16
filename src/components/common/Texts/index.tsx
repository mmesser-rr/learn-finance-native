import React from 'react';
import { TextStyle } from 'react-native';
import Text from 'src/components/common/Text';

import styles from './styles';

interface TextProps {
  children: React.ReactNode;
  style?: TextStyle;
}

export const BigTitle: React.FC<TextProps> = ({
  children,
  style,
}) => {
  return (
    <Text style={[styles.bigTitle, style ? style : {}]}>{children}</Text>
  );
};

export const Title: React.FC<TextProps> = ({
  children,
  style,
}) => {
  return (
    <Text style={[styles.title, style ? style : {}]}>{children}</Text>
  );
};

export const Caption: React.FC<TextProps> = ({
  children,
  style,
}) => {
  return (
    <Text style={[styles.caption, style ? style : {}]}>{children}</Text>
  );
};
