import {StyleSheet} from 'react-native';
import AppColors from 'src/config/colors';
import {scale} from 'src/config/dimentions';

const styles = StyleSheet.create({
  block: {
    marginBottom: scale(32),
  },
  title: {
    fontSize: scale(22),
    marginBottom: scale(8),
  },
  actionStyle: {
    backgroundColor: AppColors.gray20
  },
  actionLabel: {
    color: AppColors.coreBlack100
  }
});

export default styles;
