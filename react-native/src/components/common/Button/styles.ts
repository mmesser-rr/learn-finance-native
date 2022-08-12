import {StyleSheet} from 'react-native';
import AppColors from 'src/config/colors';
import {scale} from 'src/config/dimentions';

const styles = StyleSheet.create({
  action: {
    backgroundColor: AppColors.coreBlack100,
    borderRadius: 100,
    width: '100%',
    marginVertical: scale(8)
  },
  label: {
    paddingHorizontal: scale(10),
    paddingVertical: scale(10),
    textAlign: 'center',
    alignItems: 'center',
  },
});

export default styles;
