import {StyleSheet} from 'react-native';
import AppColors from 'src/config/colors';
import {scale} from 'src/config/dimentions';

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.coreBlack100,
  },
  containerView: {
    marginTop: 0,
  },
  nav: {
    marginVertical: scale(24),
  },
  headline: {
    marginBottom: scale(16),
  },
  body: {
    marginBottom: scale(40),
  },
  submit: {},
  videoContainer: {
    marginBottom: 24,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});

export default styles;
