import { StyleSheet } from 'react-native';
import AppColors from 'src/config/colors';
import { scale } from 'src/config/dimentions';

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.blackColor,
  },
  viewWrapper: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center'
  },
  head: {
    marginBottom: scale(16),
  },
  contentWrapper: {
    position: 'absolute',
    width: '100%',
    top: 0,
    left: 0,
  },
  actionWrapper: {
    width: '100%',
  },
});

export default styles;
