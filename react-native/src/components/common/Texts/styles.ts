import { StyleSheet } from 'react-native';
import AppColors from 'src/config/colors';
import { scale } from 'src/config/dimentions';
import { convertPTToPX } from 'src/utils/functions';

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Lato Regular',
    color: AppColors.whiteColor,
  },
  bigTitle: {
    fontFamily: 'Lato Bold',
    fontSize: scale(28),
    lineHeight: scale(36),
    color: AppColors.whiteColor,
  },
  title: {
    fontFamily: 'Lato Bold',
    fontSize: scale(20),
    lineHeight: scale(28),
    color: AppColors.whiteColor,
  },
  caption: {
    fontFamily: 'Lato Regular',
    fontSize: scale(16),
    lineHeight: scale(24),
    color: AppColors.whiteColor,
  },
  largeHeadline: {
    fontFamily: 'Lato Bold',
    fontSize: scale(32),
    lineHeight: scale(40),
    color: AppColors.whiteColor,
  },
  smallHeadline: {
    fontFamily: 'Lato Bold',
    fontSize: scale(24),
    lineHeight: scale(32),
    color: AppColors.whiteColor,
  },
  mediumTitle: {
    fontFamily: 'Lato-Light',
    fontSize: scale(16),
    lineHeight: scale(24),
    color: AppColors.whiteColor,
  },
  largeBody: {
    fontFamily: 'Lato Medium',
    fontSize: scale(16),
    lineHeight: scale(24),
    color: AppColors.whiteColor,
    letterSpacing: convertPTToPX(0.5),
  },
  mediumBody: {
    fontFamily: 'Lato Medium',
    fontSize: scale(14),
    lineHeight: scale(20),
    color: AppColors.whiteColor,
    letterSpacing: convertPTToPX(0.25),
  },
});

export default styles;