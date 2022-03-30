import {StyleSheet} from 'react-native';
import AppColors from 'src/config/colors';
import {scale} from 'src/config/dimentions';

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.coreBlack100,
  },
  head: {
    marginBottom: scale(32),
  },
  viewWrapper: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  actionWrapper: {
    marginTop: scale(32),
  }
});

export default styles;
