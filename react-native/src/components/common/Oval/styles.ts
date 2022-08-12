import { StyleSheet } from 'react-native';
import { scale } from 'src/config/dimentions';

const styles = StyleSheet.create({
  oval: {
    width: scale(8),
    height: scale(8),
    backgroundColor: 'white',
    borderRadius: 100,
    marginHorizontal: scale(5)
  }
});

export default styles;
