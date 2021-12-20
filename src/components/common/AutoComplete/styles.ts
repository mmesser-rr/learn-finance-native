import { StyleSheet } from 'react-native';
import AppColors from 'src/config/colors';
import { scale } from 'src/config/dimentions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  labelStyle: {
    fontFamily: 'Lato',
    color: AppColors.whiteColor,
  },
  radioStyle: {
    borderBottomWidth: 1,
    borderColor: AppColors.whiteColor,
  },
  searchStyle: {
    backgroundColor: AppColors.grayColor,
    color: AppColors.whiteColor,
    borderRadius: scale(100),
    height: scale(40)
  },
  searchInputStyle: {
    fontFamily: 'Lato',
    color: AppColors.whiteColor,
    fontSize: scale(16)
  },
});

export default styles;
