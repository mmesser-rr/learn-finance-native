import React from 'react';
import { Text as RNText } from 'react-native-paper';

interface TextProps {
  style: Object | Object[];
  children: React.ReactNode;
}

const Text: React.FC<TextProps> = ({children, style: propsStyle}) => {
  let styles = Array.isArray(propsStyle) ? [...propsStyle] : [propsStyle];
  styles = [[{fontFamily: 'Lato'}], ...styles];

  return (
    <RNText style={styles}>{children}</RNText>
  );
};

export default Text;
