import {StyleSheet} from 'react-native';
import AppColors from 'src/config/colors';
import {Metrics, scale} from 'src/config/dimentions';

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.coreBlack100
  },
  bold: {
    fontWeight: 'bold'
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  redText: {
    color: AppColors.accentRed100
  },
  progressBarContainer: {
    borderColor: AppColors.gray20,
    borderWidth: Metrics.pixels.size1,
    borderRadius: scale(3)
  },
  metaIcon: {
    marginRight: scale(8)
  }
});

export default styles;
