import {StyleSheet} from 'react-native';
import AppColors from 'src/config/colors';
import { scale } from 'src/config/dimentions';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: scale(8)
  },
  signIn: {
    color: AppColors.interactionBlue
  }
});

export default styles;
