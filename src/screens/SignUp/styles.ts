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
    fontWeight: 'bold',
  },
  description: {
    color,
    fontSize: scale(16),
    lineHeight: scale(24),
    marginBottom: scale(32),
  },
  askAction: {
    marginTop: scale(32),
  },
  askActionLabel: {
    marginTop: 0,
    marginBottom: 0,
    color: AppColors.linkColor,
    fontWeight: '500',
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
    fontSize: scale(16),
    lineHeight: scale(24),
  },
  agreementLink: {
    color: AppColors.linkColor,
    fontSize: scale(16),
    lineHeight: scale(24),
  },
});

export default styles;
