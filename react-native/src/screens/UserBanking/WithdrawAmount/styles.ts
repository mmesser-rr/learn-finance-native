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
    marginBottom: scale(80),
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
  available: {
    marginTop: scale(8),
    alignItems: 'center'
  },
  availableText: {
    width: scale(182),
    textAlign: 'center'
  },
  error: {
    marginTop: scale(8),
    marginBottom: scale(24),
    alignItems: 'center'
  },
  errorText: {
    textAlign: 'center',
    color: AppColors.accentRed100
  }
});

export default styles;
