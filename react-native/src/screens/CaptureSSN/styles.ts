import {StyleSheet} from 'react-native';
import AppColors from 'src/config/colors';
import {scale} from 'src/config/dimentions';

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.coreBlack100,
  },
  viewWrapper: {
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  head: {
    marginBottom: scale(16),
  },
  contentWrapper: {
    flex: 1,
  },
  error: {
    color: AppColors.accentRed100,
  },
  errorWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  }
});

export default styles;
