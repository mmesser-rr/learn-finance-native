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
    width: scale(188),
    height: scale(200),
  },
  title: {
    marginBottom: scale(44),
  },
  actionWrapper: {
    marginTop: scale(96),
  },
  joinAction: {
    marginBottom: scale(16),
    backgroundColor: AppColors.gray20,
  },
  loginAction: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: AppColors.gray20,
  },
  joinLabel: {
    color: AppColors.coreBlack100,
  }
});

export default styles;
