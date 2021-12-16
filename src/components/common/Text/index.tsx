import React from 'react';
import { TextStyle } from 'react-native';
import { Text as RNText } from 'react-native-paper';

interface TextProps {
  style: TextStyle | TextStyle[];
  children: React.ReactNode;
  onPress?: () => void;
}

const Text: React.FC<TextProps> = ({children, style: propsStyle, onPress}) => {
  let styles = Array.isArray(propsStyle) ? [...propsStyle] : [propsStyle];
  styles = [{fontFamily: 'Lato'}, ...styles];

  return (
    <RNText style={styles} onPress={onPress}>{children}</RNText>
  );
};

export default Text;
