import { StyleSheet } from 'react-native';
import AppColors from 'src/config/colors';
import { scale } from 'src/config/dimentions';

const color = AppColors.whiteColor;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.blackColor,
  },
  viewContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingTop: scale(43),
    paddingLeft: scale(27),
    paddingRight: scale(27),
    paddingBottom: scale(50),
  },
  head: {
    color,
    fontSize: scale(20),
    lineHeight: scale(28),
    marginBottom: scale(16),
  },
  description: {
    color,
    fontSize: scale(16),
    lineHeight: scale(24),
    marginBottom: scale(32),
  },
  noCodeAction: {
    marginTop: scale(32),
  },
  noCodeActionLabel: {
    marginTop: 0,
    marginBottom: 0,
    color: AppColors.linkColor,
    fontWeight: '500',
    fontSize: scale(16),
    letterSpacing: 0.5,
  },
  continueActionWrapper: {
    borderRadius: 100,
    width: '100%',
  },
  buttonStyle: {
    paddingTop: scale(10),
    paddingBottom: scale(10),
    fontWeight: '500',
    fontSize: scale(16),
    lineHeight: scale(24),
    letterSpacing: 0.5,
    textAlign: 'center',
  },
  continueAction: {
    backgroundColor: AppColors.grayColor,
    color: AppColors.disableColor,
  },
  linearGradient: {
    borderRadius: 100,
  },
  activeContinueAction: {
    width: '100%',
    fontSize: scale(16),
    lineHeight: scale(24),
    fontWeight: '500',
    paddingTop: scale(10),
    paddingBottom: scale(10),
    letterSpacing: 0.5,
    color,
    textAlign: 'center',
  },
});

export default styles;
