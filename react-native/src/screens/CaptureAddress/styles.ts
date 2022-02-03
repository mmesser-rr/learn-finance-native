import { StyleSheet } from 'react-native';
import AppColors from 'src/config/colors';
import { scale } from 'src/config/dimentions';

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.coreBlack100,
  },
  viewWrapper: {
  },
  head: {
    marginBottom: scale(32),
  },
  inputWrapper: {
    marginBottom: scale(16),
  },
  contentWrapper: {
  },
  actionWrapper: {
    marginTop: scale(48),
  },
});

export default styles;
