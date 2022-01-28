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
  searchStyle: {
    backgroundColor: AppColors.coreBlack80,
    color: AppColors.whiteColor,
    borderRadius: scale(100),
    height: scale(40)
  },
  searchInputStyle: {
    fontFamily: 'Lato',
    color: AppColors.whiteColor,
    fontSize: scale(16)
  },
  selectWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: AppColors.placeholderColor,
    paddingHorizontal: scale(16),
    paddingVertical: scale(16),
  },
  selectLabel: {
    color: AppColors.placeholderColor,
  },
  active: {
    color: AppColors.whiteColor,
    borderColor: AppColors.whiteColor,
  },
});

export default styles;