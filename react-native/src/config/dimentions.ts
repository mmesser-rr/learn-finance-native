import {PixelRatio, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const guidelineBaseWidth = 375;
const guidePadBaseWidth = 520;

const isWideDevice = () => {
  const pixelDensity = PixelRatio.get();
  const adjustedWidth = width * pixelDensity;
  const adjustedHeight = height * pixelDensity;
  if (pixelDensity < 2 && (adjustedWidth >= 1000 || adjustedHeight >= 1000)) {
    return true;
  } else
    return (
      pixelDensity === 2 && (adjustedWidth >= 1920 || adjustedHeight >= 1920)
    );
};

export const scale = (size: number) => {
  const baseWidth = isWideDevice() ? guidePadBaseWidth : guidelineBaseWidth;
  const shorterWindowDimension = width > height ? height : width;
  return Math.floor((shorterWindowDimension / baseWidth) * size);
};

export const Metrics = {
  screenWidth: width,
  screenHeight: height,
  height: {
    nav: scale(54),
    input: scale(44),
    button: scale(48),
    smallBtn: scale(40),
  },
  radius: {
    button: scale(6),
    input: scale(2),
  },
  padding: {
    horizontal: scale(20),
    vertical: scale(26),
    bottom: scale(50),
  },
  fontSize: {
    xsm: 11,
    sm: 14,
    md: 16,
    lg: 18,
    xlg: 22,
    title: 32,
    subTitle: 20,
  },
  icons: {
    tiny: scale(15),
    normal: scale(24),
    xl: scale(183),
  },
};
