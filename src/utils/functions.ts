import { TextStyle } from "react-native";

export const generateTextStyle = (
  ownStyle: TextStyle,
  propsStyle?: TextStyle | TextStyle[],
): TextStyle[] => {
  let style: TextStyle[] = [];

  if (propsStyle) {
    style = Array.isArray(propsStyle) ? [...propsStyle] : [propsStyle];
  }
  
  return [ownStyle, ...style];
};
