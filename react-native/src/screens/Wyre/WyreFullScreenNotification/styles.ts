import {StyleSheet} from 'react-native';
import AppColors from 'src/config/colors';
import {scale} from 'src/config/dimentions';

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.coreBlack100,
  },
  head: {
    marginBottom: scale(16),
    textAlign: 'center',
  },
  caption: {
    marginBottom: scale(40),
    textAlign: 'center',
  },
  contentWrapper: {
    flex: 1,
  },
  submit: {},
  videoContainer: {
    marginBottom: 24,
  },
});

export default styles;
