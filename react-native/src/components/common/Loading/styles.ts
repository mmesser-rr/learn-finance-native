import {StyleSheet} from 'react-native';
import AppColors from 'src/config/colors';

const styles = StyleSheet.create({
  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColors.overlayBackdrop,
  },
  spinnerContainer: {
    transform: [{translateY: -56}],
  },
  spinner: {
    height: 56,
    width: 56,
  },
});

export default styles;
