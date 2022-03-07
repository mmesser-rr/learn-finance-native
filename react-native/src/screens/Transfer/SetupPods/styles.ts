import {StyleSheet} from 'react-native';
import AppColors from 'src/config/colors';
import {scale} from 'src/config/dimentions';

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.coreBlack100,
  },
  viewWrapper: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  nav: {
    marginBottom: scale(24),
  },
  body: {
    marginBottom: scale(40),
  },
  sliderWrapper: {
    marginBottom: scale(28)
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: scale(8)
  },
  labelWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    marginRight: scale(4)
  },
  total: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: scale(26)
  },
  tooltip: {
  },
  tooltipContent: {
    color: AppColors.coreBlack100,
  },
  tooltipBackground: {
    backgroundColor: AppColors.gray20,
    paddingHorizontal: scale(16),
    paddingVertical: scale(12),
  },
  error: {
    color: AppColors.accentRed100
  },
  errorWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  gradient: {
    height: scale(4),
    zIndex: -1,
    borderRadius: 3,
  },
  gradientWrap: {
    borderRadius: 3,
    marginTop: scale(12)
  },
  sliderThumb: {
    width: scale(28),
    height: scale(28),
    backgroundColor: AppColors.gray20,
  }
});

export default styles;
