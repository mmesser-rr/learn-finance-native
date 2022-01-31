import { StyleSheet } from 'react-native';
import AppColors from 'src/config/colors';
import { scale } from 'src/config/dimentions';

const color = AppColors.whiteColor;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewWrapper: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  descriptionWrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  actionWrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  loginAction: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: AppColors.whiteColor,
    marginTop: scale(16),
  },
});

export default styles;