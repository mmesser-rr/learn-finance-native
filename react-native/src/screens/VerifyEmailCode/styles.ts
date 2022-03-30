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
    marginTop: 0
  },
  head: {
    marginBottom: scale(16),
  },
  caption: {
    marginBottom: scale(32),
  },
  contentWrapper: {
    flex: 1,
  },
  actionWrapper: {
    width: '100%'
  },
  submit: {
    marginTop: scale(-22),
  },
  askAction: {
    marginTop: scale(32),
    marginBottom: scale(64),
  },
  askActionLabel: {
    marginTop: 0,
    marginBottom: 0,
    color: AppColors.interactionBlue,
    fontSize: scale(16),
    letterSpacing: 0.5,
    textAlign: 'center',
  },
  laterActionGradient: {
    marginTop: scale(16),
    borderRadius: scale(100),
    padding: 1,
  },
  step: {
    marginBottom: scale(8)
  }
});

export default styles;
