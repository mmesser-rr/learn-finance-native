import {StyleSheet} from 'react-native';
import AppColors from 'src/config/colors';
import {scale} from 'src/config/dimentions';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
    backgroundColor: AppColors.coreBlack90,
    width: '100%',
  },
  cardLeft: {
    flexDirection: 'row',
  },
  cardRight: {
    alignItems: 'flex-end',
  },
  icon: {
    width: 30,
    height: 38,
    marginHorizontal: 8,
  },
  label: {
    marginHorizontal: 8,
  },
});

export default styles;
