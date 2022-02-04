import { StyleSheet } from 'react-native';
import AppColors from 'src/config/colors';
import { scale } from 'src/config/dimentions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewWrapper: {
    flexDirection: 'column',
  },
  logo: {
    marginBottom: scale(40),
  },
  title: {
    marginBottom: scale(8),
  },
  actionLabelWrapper: {
    marginTop: scale(72),
    marginBottom: scale(16),
    alignItems: 'center'
  },
  joinActionWrapper: {
    marginBottom: scale(16),
  },
  loginAction: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: AppColors.gray20
  },
});

export default styles;