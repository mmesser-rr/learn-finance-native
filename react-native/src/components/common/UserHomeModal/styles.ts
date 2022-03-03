import {StyleSheet} from 'react-native';
import AppColors from 'src/config/colors';
import { scale } from 'src/config/dimentions';

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.coreBlack80,
    // paddingnHorizontal: scale(28),
    paddingLeft: scale(28),
    paddingRight: scale(28),
    paddingBottom: scale(34),
    borderTopLeftRadius: scale(10),
    borderTopRightRadius: scale(10)
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: scale(16),
    borderBottomWidth: 1,
    borderBottomColor: AppColors.coreBlack60
  },
  disabled: {
    color: AppColors.coreBlack40
  }
});

export default styles;
