import { StyleSheet } from 'react-native';
import AppColors from 'src/config/colors';
import { scale } from 'src/config/dimentions';

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.coreBlack100,
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
    height: scale(78),
  },
  actionWrapper: {
    width: '100%',
  },
  iconWrapper: {
    height: scale(62),
    justifyContent: 'center',
  },
});

export default styles;
