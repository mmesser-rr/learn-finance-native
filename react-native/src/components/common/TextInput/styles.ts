import { StyleSheet } from 'react-native';
import AppColors from 'src/config/colors';
import { scale } from 'src/config/dimentions';

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'transparent',
  },
  helperWrapper: {
    marginTop: scale(4),
    flexDirection: 'row',
    alignItems: 'center'
  },
  helperText: {
    fontSize: scale(14),
    lineHeight: scale(20),
    fontWeight: '500',
    color: AppColors.errorColor,
  },
  helperIcon: {
    marginLeft: scale(16),
    marginRight: scale(8),
  }
});

export default styles;
