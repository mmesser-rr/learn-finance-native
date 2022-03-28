import {StyleSheet} from 'react-native';
import AppColors from 'src/config/colors';
import {scale} from 'src/config/dimentions';

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.coreBlack100,
  },
  viewStyle: {
    marginTop: 0,
    marginBottom: 0,
  },
  nav: {
    marginVertical: scale(24),
  },
  balanceLabel: {
    marginBottom: scale(2),
  },
  podGradient: {
    padding: 1,
    borderRadius: scale(8),
  },
  podCard: {
    marginBottom: scale(24),
  },
  podCardLabel: {
    marginBottom: scale(4),
  },
  balance: {
    alignItems: 'flex-end',
  },
  moveAmount: {
    backgroundColor: AppColors.coreBlack85,
    borderRadius: scale(8),
    paddingVertical: scale(8),
    paddingHorizontal: scale(16),
    alignItems: 'flex-end',
  },
  submit: {
    marginTop: scale(20),
  },
  description: {
    marginBottom: scale(24),
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
    fontSize: scale(28),
    lineHeight: scale(36),
  },
  errorWrapper: {
    alignItems: 'flex-end',
    marginTop: scale(4),
  },
  errorMove: {
    color: AppColors.accentRed100,
  },
});

export default styles;
