import { StyleSheet } from 'react-native';
import AppColors from 'src/config/colors';
import { scale } from 'src/config/dimentions';

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Lato',
  },
  bigTitle: {
    fontSize: scale(28),
    lineHeight: scale(36),
    fontWeight: 'bold',
    color: AppColors.whiteColor,
  },
  title: {
    fontSize: scale(20),
    lineHeight: scale(28),
    fontWeight: 'bold',
    color: AppColors.whiteColor,
  },
  caption: {
    fontSize: scale(16),
    lineHeight: scale(24),
    fontWeight: '400',
    color: AppColors.whiteColor,
    letterSpacing: scale(0.5),
  },
});

export default styles;
