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
  block: {
    marginBottom: scale(32),
  },
  logo: {
    marginBottom: scale(40),
  },
  title: {
    fontSize: scale(22),
    fontWeight: '300',
    marginBottom: scale(8),
  },
});

export default styles;
