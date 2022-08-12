import {StyleSheet} from 'react-native';
import AppColors from 'src/config/colors';
import {Metrics, scale} from 'src/config/dimentions';

const styles = StyleSheet.create({
  card: {
    borderColor: AppColors.coreWhite100,
    borderWidth: Metrics.pixels.size1,
    borderRadius: Metrics.radius.card,
    minHeight: scale(160),
    marginTop: scale(16)
  },
  imageBackground: {
    flex: 1,
    overflow: 'hidden'
  },
  content: {
    paddingHorizontal: scale(16),
    paddingVertical: scale(12)
  }
});

export default styles;
