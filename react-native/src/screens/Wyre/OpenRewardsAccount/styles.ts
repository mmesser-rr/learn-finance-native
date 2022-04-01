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
    marginBottom: scale(125),
  },
  body: {
    textAlign: 'center',
    marginBottom: scale(40),
  },
  headline: {
    textAlign: 'center',
    marginBottom: scale(40),
  },
  iconWrapper: {
    alignItems: 'center',
    marginBottom: scale(16),
  },
  actionWrapper: {
    width: '100%',
  },
});

export default styles;
