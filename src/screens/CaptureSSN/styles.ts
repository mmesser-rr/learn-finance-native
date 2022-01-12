import { StyleSheet } from 'react-native';
import AppColors from 'src/config/colors';
import { scale } from 'src/config/dimentions';

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.blackColor,
  },
  viewWrapper: {
  },
  head: {
    marginBottom: scale(16),
  },
  contentWrapper: {
    flex: 1,
  },
  actionWrapper: {
    flex: 1,
  },
  submit: {
    marginTop: scale(-22),
  },
});

export default styles;
