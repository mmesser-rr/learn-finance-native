import {StyleSheet} from 'react-native';
import AppColors from 'src/config/colors';
import {scale} from 'src/config/dimentions';

const color = AppColors.gray20;

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.coreBlack100
  },
  viewWrapper: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: scale(17),
  },
  head: {
    marginBottom: scale(32),
  },
  phoneNumber: {
    marginBottom: scale(32),
  },
  signUpLabel: {
    color: AppColors.interactionBlue
  },
  forgotPassword: {
    alignItems: 'center',
  },
  forgotPasswordLabel: {
    color: AppColors.interactionBlue
  },
  misMatchAlert: {
    marginBottom: scale(32)
  },
  phoneNumberAlert: {
    marginLeft: scale(16),
    marginTop: scale(4),
  },
  nav: {
    marginBottom: scale(24)
  }
});

export default styles;
