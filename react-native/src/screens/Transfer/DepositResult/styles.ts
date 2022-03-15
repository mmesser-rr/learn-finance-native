import {StyleSheet} from 'react-native';
import AppColors from 'src/config/colors';
import {scale} from 'src/config/dimentions';

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.coreBlack100,
  },
  viewWrapper: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  head: {
    marginTop: scale(8),
    marginBottom: scale(16),
  },
  captionContainer: {
    width: '100%',
    alignContent: 'flex-start',
  },
  caption: {
    marginBottom: 16,
  },
  actionWrapper: {
    width: '100%',
  },
  iconWrapper: {
    height: scale(62),
    justifyContent: 'center',
  },
  depositCardSuccess: {
    marginBottom: 36,
  },
  depositCardNoPods: {
    marginBottom: 74,
  },
  depositCardFailure: {
    marginBottom: 50,
  },
  strikethrough: {
    textDecorationLine: 'line-through',
  },
  podsAllocationContainer: {
    width: '100%',
  },
  podsAllocation: {
    marginBottom: 16,
  },
  podsExplanation: {
    marginBottom: 58,
  },
});

export default styles;
