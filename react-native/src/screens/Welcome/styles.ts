import {StyleSheet} from 'react-native';
import AppColors from 'src/config/colors';
import {scale} from 'src/config/dimentions';

const styles = StyleSheet.create({
  title: {
    marginBottom: scale(44),
  },
  joinAction: {
    backgroundColor: AppColors.gray20,
  },
  loginAction: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: AppColors.gray20,
  },
  joinLabel: {
    color: AppColors.coreBlack100,
  }
});

export default styles;
