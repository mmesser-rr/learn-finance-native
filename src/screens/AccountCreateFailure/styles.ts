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
    marginTop: scale(18),
    marginBottom: scale(18),
  },
  caption: {
    marginBottom: scale(48),
    textAlign: 'center',
  },
  actionWrapper: {
    width: '100%',
  },
});

export default styles;
