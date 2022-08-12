import React from 'react';
import {TextStyle, Text as RNText} from 'react-native';
import AppColors from 'src/config/colors';
import {generateTextStyle} from 'src/utils/functions';

import styles from './styles';

interface TextProps {
  style?: TextStyle | TextStyle[];
  type: string;
  variant?: 'white';
  children: React.ReactNode;
  onPress?: () => void;
}

export const Text: React.FC<TextProps> = ({
  children,
  type,
  variant,
  style: propsStyle,
  onPress,
}) => {
  const typeNames = type.toLowerCase().split('/');

  // "Body/Large" => "largeBody"
  const defaultStyleName = `${typeNames[1]}${typeNames[0]
    .charAt(0)
    .toUpperCase()}${typeNames[0].slice(1)}`;
  const style = generateTextStyle(
    {...styles[defaultStyleName as keyof typeof styles], color: variant === "white" ? AppColors.coreWhite100 : AppColors.gray20},
    propsStyle,
  );

  return (
    <RNText style={style} onPress={onPress}>
      {children}
    </RNText>
  );
};
