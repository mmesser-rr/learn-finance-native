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
  inputContainer: {
    alignItems: 'center',
  },
  inputWrapper: {
    display: 'flex',
    flexDirection: 'row',
  },
  input: {
    fontFamily: 'Lato-Bold',
    color: AppColors.gray20,
    fontSize: scale(36),
    lineHeight: scale(44),
  },
  error: {
    color: AppColors.accentRed100,
  },
  errorWrapper: {
    marginTop: 10,
  },
});

export default styles;
