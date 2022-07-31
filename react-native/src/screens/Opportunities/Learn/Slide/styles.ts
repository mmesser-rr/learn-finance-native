import { StyleSheet } from 'react-native';
import AppColors from 'src/config/colors';
import { scale } from 'src/config/dimentions';

const styles = StyleSheet.create({
  slideContainer: { 
    flex: 1, 
    justifyContent: 'space-between' 
  },
  answerButton: {
    marginTop: scale(4),
    backgroundColor: 'transparent',
    borderWidth: scale(1),
    borderColor: 'white'
  }
});

export default styles;
