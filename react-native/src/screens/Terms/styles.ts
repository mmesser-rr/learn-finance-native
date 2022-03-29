import {StyleSheet} from 'react-native';
import AppColors from 'src/config/colors';
import {scale} from 'src/config/dimentions';

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.coreBlack100,
  },
  viewStyle: {
    marginTop: 0,
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
  text: {
    color: AppColors.gray20,
    marginBottom: scale(20),
  },
});

export default styles;
