import {StyleSheet} from 'react-native';
import AppColors from 'src/config/colors';
import {scale} from 'src/config/dimentions';

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.coreBlack100
  },
  bold: {
    fontWeight: 'bold'
  },
  sponsor: {
    marginTop: scale(52)
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});

export default styles;
