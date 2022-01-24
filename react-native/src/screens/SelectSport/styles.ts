import { StyleSheet } from 'react-native';
import AppColors from 'src/config/colors';
import { scale } from 'src/config/dimentions';

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.blackColor,
  },
  head: {
    marginBottom: scale(32),
  },
  viewWrapper: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});

export default styles;
