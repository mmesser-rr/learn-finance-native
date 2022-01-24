import { StyleSheet } from 'react-native';
import AppColors from 'src/config/colors';
import { scale } from 'src/config/dimentions';

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.blackColor,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginBottom: scale(32),
  },
  closeIcon: {
    position: 'absolute',
    left: 0,
  },
  title: {
    fontFamily: 'Lato-Light',
    fontSize: scale(22),
    lineHeight: scale(28),
  },
  text: {
    fontSize: scale(14),
    lineHeight: scale(20),
    letterSpacing: 0.25,
    color: AppColors.whiteColor,
    marginBottom: scale(20),
  },
});

export default styles;