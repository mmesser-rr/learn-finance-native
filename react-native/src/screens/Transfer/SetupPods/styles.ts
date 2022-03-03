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
    marginBottom: scale(40),
  },
  sliderWrapper: {
    marginBottom: scale(28)
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: scale(8)
  },
  labelWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    marginRight: scale(4)
  },
  total: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: scale(28),
    marginTop: scale(26)
  },
  slider: {
    height: scale(28),
    backgroundColor: 'transparent'
  }
});

export default styles;
