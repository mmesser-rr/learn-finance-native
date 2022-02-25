import {StyleSheet} from 'react-native';
import AppColors from 'src/config/colors';
import {scale} from 'src/config/dimentions';

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.coreBlack100,
  },
  viewWrapper: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  nav: {
    marginBottom: scale(24),
  },
  body: {
    marginBottom: scale(57),
  },
  diagram: {
    marginHorizontal: scale(-27),
    position: 'relative',
  },
  union: {
    flex: 1
  },
  description: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftDescription: {
    justifyContent: 'center',
    marginLeft: scale(27),
  },
  rightDescription: {
    justifyContent: 'space-between',
    marginRight: scale(27),
  },
  spending: {
    marginTop: scale(20),
    flexDirection: 'row',
    alignItems: 'center',
  },
  saving: {
    marginBottom: scale(20),
    flexDirection: 'row',
    alignItems: 'center',
  },
  investment: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: scale(8),
  }
});

export default styles;
