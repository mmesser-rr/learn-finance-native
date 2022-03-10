import {StyleSheet} from 'react-native';
import AppColors from 'src/config/colors';
import {scale} from 'src/config/dimentions';

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.coreBlack100,
  },
  viewWrapper: {
  },
  nav: {
    marginBottom: scale(24),
  },
  description: {
    marginBottom: scale(28),
  },
  accountWrapper: {
    paddingBottom: scale(7),
    marginBottom: scale(16),
    borderBottomWidth: 1,
    borderBottomColor: AppColors.coreBlack40
  },
  account: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
});

export default styles;
