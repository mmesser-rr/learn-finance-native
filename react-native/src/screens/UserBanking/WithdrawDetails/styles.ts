import {StyleSheet} from 'react-native';
import AppColors from 'src/config/colors';
import {scale} from 'src/config/dimentions';

const color = AppColors.gray20;

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.coreBlack100,
  },
  viewWrapper: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: scale(0),
    marginBottom: scale(37),
  },
  topNav: {
    marginBottom: scale(24),
  },
  description: {
    marginBottom: scale(24),
  },
  recipient: {
    marginBottom: scale(24),
  },
});

export default styles;
