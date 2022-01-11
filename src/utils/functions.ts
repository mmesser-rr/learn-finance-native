import { useEffect, useState } from "react";
import { TextStyle, Dimensions } from "react-native";
import SafeArea from 'react-native-safe-area';

import { scale } from 'src/config/dimentions';

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
};

export const calculateContentHeight = async () => {
  let top = 0;
  let bottom = 0;
  const { safeAreaInsets } = await SafeArea.getSafeAreaInsetsForRootView();

  if (safeAreaInsets) {
    top = safeAreaInsets.top;
    bottom = safeAreaInsets.bottom;
  }

  const windowHeight = Dimensions.get('window').height;
  return windowHeight - top - bottom - scale(28) * 2;
};