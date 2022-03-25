import {StyleSheet} from 'react-native';
import AppColors from 'src/config/colors';
import {scale} from 'src/config/dimentions';

const color = AppColors.gray20;

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.coreBlack100
  },
  viewWrapper: {
    marginTop: scale(17),
  },
  head: {
    marginBottom: scale(32),
  },
  phoneNumber: {
  },
  signUpLabel: {
    color: AppColors.interactionBlue
  },
  helpLink: {
    alignItems: 'center',
    marginTop: scale(32),
  },
  helpLinkLabel: {
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
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  }
});

export default styles;
