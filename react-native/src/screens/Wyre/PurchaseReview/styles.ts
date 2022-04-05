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
  contentContainer: {
    flex: 1,
    justifyContent: 'space-around',
  },
  inputContainer: {
    alignItems: 'center',
  },
  inputWrapper: {
    display: 'flex',
    flexDirection: 'row',
  },
  submit: {
    marginVertical: scale(16),
  },
  center: {
    textAlign: 'center',
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: scale(20),
    paddingTop: scale(12),
    borderBottomWidth: 1,
    borderColor: AppColors.coreBlack40,
  },
  infoTitle: {
    color: AppColors.coreBlack40,
  },
  infoData: {
    flexDirection: 'row',
  },
  topText: {
    marginBottom: scale(12),
  },
});

export default styles;
