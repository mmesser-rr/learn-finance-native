import { StyleSheet } from 'react-native';
import AppColors from 'src/config/colors';
import { scale } from 'src/config/dimentions';

const color = AppColors.gray20;

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.coreBlack100,
  },
  viewWrapper: {
    flexDirection: 'column',
    justifyContent: 'space-between',
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
    textAlign: 'center'
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
});

export default styles;