import {StyleSheet} from 'react-native';
import {scale} from 'src/config/dimentions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewWrapper: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 0
  },
  block: {
    marginBottom: scale(32),
  },
  logo: {
    width: scale(188),
    height: scale(200),
  },
  title: {
    fontFamily: 'Lato-Light',
    fontSize: scale(22),
    marginBottom: scale(8),
  },
});

export default styles;
