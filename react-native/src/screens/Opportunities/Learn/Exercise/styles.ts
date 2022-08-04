import { StyleSheet } from 'react-native';
import AppColors from 'src/config/colors';
import { scale } from 'src/config/dimentions';

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.coreBlack100
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
    backgroundColor: AppColors.coreWhite100
  },
  slideWrapper: {
    height: '88%'
  },
  answerButton: {
    marginTop: scale(4),
    backgroundColor: 'transparent',
    borderWidth: scale(1),
    borderColor: 'white'
  },
  correctAnswerButton: {
    marginTop: scale(4),
    backgroundColor: 'transparent',
    borderWidth: scale(1),
    borderColor: '#00FF00'
  },
  wrongAnswerButton: {
    marginTop: scale(4),
    backgroundColor: 'transparent',
    borderWidth: scale(1),
    borderColor: '#FFFF00'
  }
});

export default styles;
