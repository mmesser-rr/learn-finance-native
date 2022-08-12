import { Dimensions, StyleSheet } from 'react-native';
import { scale } from 'src/config/dimentions';
const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    height: '100%',
    padding: scale(20),
    borderRadius: scale(8)
  }
});

export default styles;
