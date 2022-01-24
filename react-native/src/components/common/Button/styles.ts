import { StyleSheet } from 'react-native';
import AppColors from 'src/config/colors';
import { scale } from 'src/config/dimentions';

const styles = StyleSheet.create({
  action: {
    backgroundColor: AppColors.blackColor,
    borderRadius: 100,
    width: '100%',
  },
  label: {
    letterSpacing: 0.5,
    paddingTop: scale(10),
    paddingBottom: scale(10),
    textAlign: 'center',
  },
});

export default styles;
