import {StyleSheet} from 'react-native';
import AppColors from 'src/config/colors';
import {scale} from 'src/config/dimentions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewWrapper: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  contentWrapper: {
    marginBottom: scale(32),
  },
  actionWrapper: {
  },
  joinAction: {
    marginBottom: scale(16),
    backgroundColor: AppColors.gray20,
  }
});

export default styles;
