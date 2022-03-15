import {StyleSheet} from 'react-native';
import AppColors from 'src/config/colors';
import {scale} from 'src/config/dimentions';

const color = AppColors.gray20;

const styles = StyleSheet.create({
  continueActionWrapper: {
    borderRadius: scale(100),
    borderWidth: 1,
    overflow: 'hidden',
  },
  buttonStyle: {
    paddingTop: scale(10),
    paddingBottom: scale(10),
    textAlign: 'center',
  },
  continueAction: {
    backgroundColor: AppColors.coreBlack80,
    color: AppColors.gray120,
    borderRadius: scale(100),
  },
  linearGradient: {
    borderRadius: scale(100),
  },
  activeContinueAction: {
    width: '100%',
    paddingTop: scale(10),
    paddingBottom: scale(10),
    color,
    textAlign: 'center',
  },
  laterActionGradient: {
    marginTop: scale(16),
    borderRadius: scale(100),
    padding: 1,
  },
});

export default styles;
