import {StyleSheet} from 'react-native';
import AppColors from 'src/config/colors';
import {scale} from 'src/config/dimentions';

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Lato-Regular',
    color: AppColors.gray20,
  },

  largeDisplay: {
    fontFamily: 'Lato-Bold',
    fontSize: scale(57),
    lineHeight: scale(64),
    color: AppColors.gray20,
    letterSpacing: scale(-0.25),
  },
  mediumDisplay: {
    fontFamily: 'Lato-Bold',
    fontSize: scale(45),
    lineHeight: scale(52),
    color: AppColors.gray20,
  },
  smallDisplay: {
    fontFamily: 'Lato-Bold',
    fontSize: scale(36),
    lineHeight: scale(44),
    color: AppColors.gray20,
  },
  largeHeadline: {
    fontFamily: 'Lato-Bold',
    fontSize: scale(28),
    lineHeight: scale(36),
    color: AppColors.gray20,
  },
  mediumHeadline: {
    fontFamily: 'Lato-Bold',
    fontSize: scale(24),
    lineHeight: scale(32),
    color: AppColors.gray20,
  },
  smallHeadline: {
    fontFamily: 'Lato-Bold',
    fontSize: scale(20),
    lineHeight: scale(28),
    color: AppColors.gray20,
  },
  largeTitle: {
    fontFamily: 'Lato-Light',
    fontSize: scale(20),
    lineHeight: scale(28),
    color: AppColors.gray20,
  },
  mediumTitle: {
    fontFamily: 'Lato-Light',
    fontSize: scale(16),
    lineHeight: scale(24),
    color: AppColors.gray20,
    letterSpacing: scale(0.1),
  },
  smallTitle: {
    fontFamily: 'Lato-Light',
    fontSize: scale(14),
    lineHeight: scale(20),
    color: AppColors.gray20,
    letterSpacing: scale(0.1),
  },
  largeBody: {
    fontFamily: 'Lato-Medium',
    fontSize: scale(16),
    lineHeight: scale(24),
    color: AppColors.gray20,
    letterSpacing: scale(0.5),
  },
  mediumBody: {
    fontFamily: 'Lato-Medium',
    fontSize: scale(14),
    lineHeight: scale(20),
    color: AppColors.gray20,
    letterSpacing: scale(0.25),
  },
  smallBody: {
    fontFamily: 'Lato-Medium',
    fontSize: scale(12),
    lineHeight: scale(16),
    color: AppColors.gray20,
    letterSpacing: scale(0.4),
  },
  largeParagraph: {
    fontFamily: 'Lato-Medium',
    fontSize: scale(16),
    lineHeight: scale(24),
    color: AppColors.gray20,
    letterSpacing: scale(0.5),
  },
  mediumParagraph: {
    fontFamily: 'Lato-Medium',
    fontSize: scale(14),
    lineHeight: scale(16),
    color: AppColors.gray20,
    letterSpacing: scale(0.25),
  },
  smallParagraph: {
    fontFamily: 'Lato-Medium',
    fontSize: scale(12),
    lineHeight: scale(16),
    color: AppColors.gray20,
    letterSpacing: scale(0.4),
  },
});

export default styles;
