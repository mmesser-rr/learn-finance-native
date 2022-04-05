import {StyleSheet} from 'react-native';
import AppColors from 'src/config/colors';
import {scale} from 'src/config/dimentions';

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.coreBlack100,
  },
  containerView: {
    justifyContent: 'center',
  },
  body: {
    textAlign: 'center',
    marginBottom: scale(16),
  },
  headline: {
    textAlign: 'center',
    marginBottom: scale(16),
  },
  iconWrapper: {
    alignItems: 'center',
    marginBottom: scale(8),
  },
  actionWrapper: {
    width: '100%',
    marginTop: scale(58),
  },
});

export default styles;
