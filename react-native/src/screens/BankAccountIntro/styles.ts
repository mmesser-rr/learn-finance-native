import {StyleSheet} from 'react-native';
import AppColors from 'src/config/colors';
import {scale} from 'src/config/dimentions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewWrapper: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 0
  },
  block: {
    marginBottom: scale(32),
  },
  logo: {
    width: scale(188),
    height: scale(200),
  },
  title: {
    fontFamily: 'Lato-Light',
    fontSize: scale(22),
    marginBottom: scale(8),
  },
  actionStyle: {
    backgroundColor: AppColors.gray20,
  },
  actionLabel: {
    color: AppColors.coreBlack100,
  }
});

export default styles;
