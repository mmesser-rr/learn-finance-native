import {StyleSheet} from 'react-native';
import AppColors from 'src/config/colors';
import {scale} from 'src/config/dimentions';

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.coreBlack100,
  },
  containerView: {
    marginTop: 0,
    justifyContent: 'center',
  },
  nav: {
    marginBottom: scale(37),
  },
  headline: {
    textAlign: 'center',
    marginBottom: scale(40),
  },
  body: {
    textAlign: 'center',
    marginBottom: scale(40),
  },
  optionWrapper: {
    marginBottom: scale(13),
    borderBottomWidth: 1,
    borderBottomColor: AppColors.coreBlack40,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: scale(16),
  },
  iconWrapper: {
    alignItems: 'center',
    marginBottom: scale(16),
  },
  actionWrapper: {
    width: '100%',
  },
});

export default styles;
