import { StyleSheet } from 'react-native';
import AppColors from 'src/config/colors';
import { scale } from 'src/config/dimentions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewWrapper: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  logo: {
    marginBottom: scale(40),
  },
  title: {
    marginBottom: scale(16),
  },
  proActionWrapper: {
    marginBottom: scale(16),
  },
  collegeAction: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: AppColors.whiteColor
  },
});

export default styles;
