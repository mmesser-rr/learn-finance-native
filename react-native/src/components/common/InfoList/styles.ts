import {StyleSheet} from 'react-native';
import AppColors from 'src/config/colors';
import {scale} from 'src/config/dimentions';

const styles = StyleSheet.create({
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: scale(20),
    paddingTop: scale(12),
    borderBottomWidth: 1,
    borderColor: AppColors.coreBlack40,
  },
  label: {
    color: AppColors.coreBlack40,
  },
  data: {
    flexDirection: 'row',
  },
});

export default styles;
