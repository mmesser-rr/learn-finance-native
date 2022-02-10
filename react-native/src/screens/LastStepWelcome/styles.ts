import { StyleSheet } from 'react-native';
import { scale } from 'src/config/dimentions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewWrapper: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    marginBottom: scale(48),
    alignItems: 'center',
  },
});

export default styles;
