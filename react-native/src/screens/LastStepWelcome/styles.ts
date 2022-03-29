import {StyleSheet} from 'react-native';
import {scale} from 'src/config/dimentions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewWrapper: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginBottom: scale(200)
  },
  logo: {
    alignItems: 'center',
    width: scale(188),
    height: scale(200),
  },
});

export default styles;
