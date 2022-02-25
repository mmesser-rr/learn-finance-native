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
    marginHorizontal: 0,
  },
  nav: {
    marginBottom: scale(24),
    marginHorizontal: scale(27),
  },
  body: {
    marginBottom: scale(57),
    marginHorizontal: scale(27),
  },
  diagram: {
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
  },
  swiperView: {
    flex: 1,
  },
  action: {
    marginHorizontal: scale(27),
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
    backgroundColor: AppColors.coreWhite100
  },
});

export default styles;
