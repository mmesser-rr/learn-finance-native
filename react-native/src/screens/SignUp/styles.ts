import {StyleSheet} from 'react-native';
import AppColors from 'src/config/colors';
import {scale} from 'src/config/dimentions';

const color = AppColors.gray20;

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.coreBlack100,
  },
  viewWrapper: {
  },
  contentWrapper: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
  },
  head: {
    marginBottom: scale(16),
  },
  description: {
    marginBottom: scale(16),
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
  rulesWrapper: {
    marginTop: scale(16)
  },
  rule: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  ruleLable: {
    marginLeft: scale(8)
  },
  error: {
    marginLeft: scale(16),
    marginTop: scale(4),
  },
  step: {
    marginBottom: scale(8)
  }
});

export default styles;
