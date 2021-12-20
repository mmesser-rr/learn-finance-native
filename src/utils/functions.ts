import { useEffect, useState } from "react";
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

export const useDebounce = (value: string | number, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(
    () => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      return () => {
        clearTimeout(handler);
      };
    },
    [value, delay]
  );
  return debouncedValue;
}