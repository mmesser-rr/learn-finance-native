import { StyleSheet } from 'react-native';
import AppColors from 'src/config/colors';
import { scale } from 'src/config/dimentions';

const styles = StyleSheet.create({
  slideContainer: { 
    flex: 1, 
    justifyContent: 'space-between' 
  },
  closeIcon: {
    marginBottom: '30%', 
    alignSelf: 'flex-start'
  }
});

export default styles;
