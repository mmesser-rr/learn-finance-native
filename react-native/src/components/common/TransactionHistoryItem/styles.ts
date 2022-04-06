import {StyleSheet} from 'react-native';
import AppColors from 'src/config/colors';
import {scale} from 'src/config/dimentions';

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: AppColors.coreBlack40,
    paddingBottom: 8,
  },
  itemLeft: {maxWidth: 210},
  itemRight: {maxWidth: 120},
  itemRightText: {
    textAlign: 'right',
  },
});

export default styles;
