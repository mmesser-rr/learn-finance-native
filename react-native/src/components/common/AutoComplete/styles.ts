import {StyleSheet} from 'react-native';
import AppColors from 'src/config/colors';
import {scale} from 'src/config/dimentions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  labelStyle: {
    fontFamily: 'Lato-Medium',
    color: AppColors.gray20,
  },
  searchStyle: {
    backgroundColor: AppColors.coreBlack80,
    color: AppColors.gray20,
    borderRadius: scale(100),
    height: scale(40),
  },
  searchInputStyle: {
    fontFamily: 'Lato-Medium',
    color: AppColors.gray20,
    fontSize: scale(16),
    alignSelf: 'center',
  },
  selectWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: AppColors.coreBlack40,
    paddingHorizontal: scale(16),
    paddingVertical: scale(16),
  },
  selectLabel: {
    color: AppColors.coreBlack40,
    marginRight: scale(8),
    flex: 1,
  },
  active: {
    color: AppColors.gray20,
    borderColor: AppColors.gray20,
  },
  checkIcon: {
    fontFamily: 'SF Pro Display Light',
  },
});

export default styles;
