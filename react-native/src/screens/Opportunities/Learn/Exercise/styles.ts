import { StyleSheet } from 'react-native';
import AppColors from 'src/config/colors';
import { Metrics, scale } from 'src/config/dimentions';
import AppStyles from 'src/config/styles';

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
    backgroundColor: AppColors.transparent,
    borderWidth: Metrics.pixels.size1,
    borderColor: AppColors.coreWhite100
  },
  correctAnswerButton: {
    marginTop: scale(4),
    backgroundColor: AppColors.transparent,
    borderWidth: Metrics.pixels.size1,
    borderColor: '#00FF00'
  },
  wrongAnswerButton: {
    marginTop: scale(4),
    backgroundColor: AppColors.transparent,
    borderWidth: Metrics.pixels.size1,
    borderColor: '#FFFF00'
  }
});

export default styles;
