import {StyleSheet} from 'react-native';
import AppColors from 'src/config/colors';
import {scale} from 'src/config/dimentions';

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.coreBlack100,
  },
  viewWrapper: {
    justifyContent: 'space-around'
  },
  header: {
    marginBottom: scale(16),
  },
  processIcon: {
    alignItems: 'center',
    marginBottom: scale(8),
  },
  center: {
    textAlign: 'center'
  },
  list: {
    marginTop: scale(24),
  },
  submit: {
    marginTop: scale(24),
  },
});

export default styles;
