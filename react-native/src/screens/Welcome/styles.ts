import {StyleSheet} from 'react-native';
import AppColors from 'src/config/colors';
import {scale} from 'src/config/dimentions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewWrapper: {
    flexDirection: 'column',
  },
  logo: {
    marginTop: scale(21),
    marginBottom: scale(96),
  },
  title: {
    marginBottom: scale(8),
  },
  actionWrapper: {
    marginTop: scale(96),
  },
  joinAction: {
    marginBottom: scale(16),
  },
  loginAction: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: AppColors.gray20,
  },
});

export default styles;
