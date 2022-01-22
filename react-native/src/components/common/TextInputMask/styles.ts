import { StyleSheet } from 'react-native';
import AppColors from 'src/config/colors';
import { scale } from 'src/config/dimentions';

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'transparent',
    color: AppColors.whiteColor
  },
  inputMask: {
    color: AppColors.whiteColor,
    fontSize: scale(16),
    marginTop: scale(28),
    paddingLeft: scale(12),
  },
});

export default styles;
