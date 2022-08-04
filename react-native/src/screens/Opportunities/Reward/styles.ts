import {StyleSheet} from 'react-native';
import {scale} from 'src/config/dimentions';

const styles = StyleSheet.create({
  wealthAmount: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  wealthIcon: {
    width: scale(16),
    height: scale(16),
    marginRight: scale(4)
  },
  body: {
    flexDirection: 'row'
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: scale(12),
    flex: 1
  },
  content: {
    flex: 3
  }
});

export default styles;
