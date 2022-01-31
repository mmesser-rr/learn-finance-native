import { StyleSheet } from 'react-native';
import AppColors from 'src/config/colors';
import { scale } from 'src/config/dimentions';
import { convertPTToPX } from 'src/utils/functions';

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Lato Regular',
    color: AppColors.whiteColor,
  },

  largeDisplay: {
    fontFamily: 'Lato Bold',
    fontSize: scale(57),
    lineHeight: scale(64),
    color: AppColors.whiteColor,
    letterSpacing: convertPTToPX(-0.25),
  },
  mediumDisplay: {
    fontFamily: 'Lato Bold',
    fontSize: scale(45),
    lineHeight: scale(52),
    color: AppColors.whiteColor,
  },
  smallDisplay: {
    fontFamily: 'Lato Bold',
    fontSize: scale(36),
    lineHeight: scale(44),
    color: AppColors.whiteColor,
  },
  largeHeadline: {
    fontFamily: 'Lato Bold',
    fontSize: scale(28),
    lineHeight: scale(36),
    color: AppColors.whiteColor,
  },
  mediumHeadline: {
    fontFamily: 'Lato Bold',
    fontSize: scale(28),
    lineHeight: scale(36),
    color: AppColors.whiteColor,
  },
  smallHeadline: {
    fontFamily: 'Lato Bold',
    fontSize: scale(20),
    lineHeight: scale(28),
    color: AppColors.whiteColor,
  },
  largeTitle: {
    fontFamily: 'Lato-Light',
    fontSize: scale(22),
    lineHeight: scale(28),
    color: AppColors.whiteColor,
  },
  mediumTitle: {
    fontFamily: 'Lato-Light',
    fontSize: scale(16),
    lineHeight: scale(24),
    color: AppColors.whiteColor,
    letterSpacing: convertPTToPX(0.1),
  },
  smallTitle: {
    fontFamily: 'Lato-Light',
    fontSize: scale(14),
    lineHeight: scale(20),
    color: AppColors.whiteColor,
    letterSpacing: convertPTToPX(0.1),
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
  smallBody: {
    fontFamily: 'Lato Medium',
    fontSize: scale(12),
    lineHeight: scale(16),
    color: AppColors.whiteColor,
    letterSpacing: convertPTToPX(0.4),
  },
});

export default styles;