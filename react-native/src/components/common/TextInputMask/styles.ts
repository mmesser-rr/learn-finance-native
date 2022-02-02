import { StyleSheet } from 'react-native';
import AppColors from 'src/config/colors';
import { scale } from 'src/config/dimentions';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    marginBottom: scale(24),
  },
  inputContainer: {
    position: 'relative',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: AppColors.gray20,
    paddingHorizontal: scale(16),
    paddingBottom: scale(8),
    paddingTop: scale(24),
    zIndex: 100,
  },
  input: {
    fontFamily: 'Lato Regular',
    color: AppColors.gray20,
    fontSize: scale(16),
    letterSpacing: 0.25,
    flex: 1,
  },
  animatedStyle: {
    position: 'absolute',
    bottom: scale(16),
    left: scale(16),
    zIndex: 10,
  },
  helperContainer: {
    position: 'absolute',
    bottom: scale(-24),
    left: 0,
    marginTop: scale(4),
    flexDirection: 'row',
    alignItems: 'center'
  },
  helperText: {
    fontSize: scale(14),
    color: AppColors.accentRed100,
  },
  labelStyle: {
    color: AppColors.coreBlack40,
  },
});

export default styles;