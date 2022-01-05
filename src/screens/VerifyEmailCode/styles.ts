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
  caption: {
    marginBottom: scale(32),
  },
  contentWrapper: {
    position: 'absolute',
    width: '100%',
    top: 0,
    left: 0,
  },
  actionWrapper: {
    width: '100%',
    marginTop: scale(64),
  },
  askAction: {
    marginTop: scale(32),
  },
  askActionLabel: {
    marginTop: 0,
    marginBottom: 0,
    color: AppColors.linkColor,
    fontWeight: '500',
    fontSize: scale(16),
    letterSpacing: 0.5,
    textAlign: 'center'
  },
  laterActionGradient: {
    marginTop: scale(16),
    borderRadius: scale(100),
    padding: 1,
  },
});

export default styles;
