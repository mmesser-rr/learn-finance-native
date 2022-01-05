import { StyleSheet } from 'react-native';
import AppColors from 'src/config/colors';
import { scale } from 'src/config/dimentions';

const color = AppColors.whiteColor;

const styles = StyleSheet.create({
  continueActionWrapper: {
    borderRadius: scale(100),
    borderWidth: 1,
    overflow: 'hidden',
  },
  buttonStyle: {
    paddingTop: scale(10),
    paddingBottom: scale(10),
    fontWeight: '500',
    fontSize: scale(16),
    lineHeight: scale(24),
    letterSpacing: 0.5,
    textAlign: 'center',
  },
  continueAction: {
    backgroundColor: AppColors.grayColor,
    color: AppColors.disableColor,
    borderRadius: scale(100),
  },
  linearGradient: {
    borderRadius: scale(100),
  },
  activeContinueAction: {
    width: '100%',
    fontSize: scale(16),
    lineHeight: scale(24),
    fontWeight: '500',
    paddingTop: scale(10),
    paddingBottom: scale(10),
    letterSpacing: 0.5,
    color,
    textAlign: 'center',
  },
});

export default styles;
