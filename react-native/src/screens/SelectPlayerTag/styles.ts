import {StyleSheet} from 'react-native';
import AppColors from 'src/config/colors';
import {scale} from 'src/config/dimentions';

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.coreBlack100,
  },
  viewWrapper: {},
  head: {
    marginBottom: scale(16),
  },
  caption: {
    marginBottom: scale(32),
  },
  contentWrapper: {
    flex: 1,
  },
  textAffixColor: {
    color: AppColors.gray20,
  },
  left: {
    fontSize: scale(16),
    color: AppColors.gray20,
  }
});

export default styles;
