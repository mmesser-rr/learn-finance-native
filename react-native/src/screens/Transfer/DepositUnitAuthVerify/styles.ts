import {StyleSheet} from 'react-native';
import AppColors from 'src/config/colors';
import {scale} from 'src/config/dimentions';

const color = AppColors.gray20;

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
  editIcon: {
    marginLeft: scale(8),
  },
  head: {
    marginBottom: scale(24),
  },
  description: {
    marginBottom: scale(32),
  },
  askAction: {
    marginTop: scale(32),
  },
  askActionLabel: {
    marginTop: 0,
    marginBottom: 0,
    color: AppColors.interactionBlue,
    fontSize: scale(16),
    letterSpacing: 0.5,
    textAlign: 'center',
  },
  agreementWrapper: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: scale(16),
  },
  agreementText: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    color,
  },
  agreementLink: {
    color: AppColors.interactionBlue,
  },
  firstName: {
    marginBottom: scale(16),
  },
  helperContainer: {
    marginTop: scale(4),
    flexDirection: 'row',
    alignItems: 'center',
  },
  helperIcon: {
    marginRight: scale(8),
  },
  helperText: {
    fontSize: scale(14),
    color: AppColors.coreWhite100,
    flex: 1,
  },
});

export default styles;
