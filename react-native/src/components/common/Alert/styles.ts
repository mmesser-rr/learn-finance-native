import {StyleSheet} from 'react-native';
import AppColors from 'src/config/colors';
import {scale} from 'src/config/dimentions';

const styles = StyleSheet.create({
  helperContainer: {
    marginTop: scale(4),
    flexDirection: 'row',
  },
  helperIcon: {
    marginRight: scale(8),
    marginTop: scale(4),
  },
  helperText: {
    fontSize: scale(14),
    color: AppColors.accentRed100,
    flex: 1,
  },
});

export default styles;
