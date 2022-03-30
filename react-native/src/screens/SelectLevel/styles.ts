import {StyleSheet} from 'react-native';
import AppColors from 'src/config/colors';
import {scale} from 'src/config/dimentions';

const styles = StyleSheet.create({
  title: {
    marginBottom: scale(16),
  },
  proAction: {
    marginBottom: scale(16),
    backgroundColor: AppColors.gray20,
  },
  proLabel: {
    color: AppColors.coreBlack100,
  },
  collegeAction: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: AppColors.gray20,
  },
});

export default styles;
