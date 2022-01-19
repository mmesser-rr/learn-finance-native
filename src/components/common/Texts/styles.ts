import { StyleSheet } from 'react-native';
import AppColors from 'src/config/colors';
import { scale } from 'src/config/dimentions';

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
});

export default styles;
