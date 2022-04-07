import {StyleSheet} from 'react-native';
import AppColors from 'src/config/colors';
import {scale} from 'src/config/dimentions';

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.coreBlack100,
  },
  containerView: {
    justifyContent: 'center',
  },
  body: {
    marginBottom: scale(40),
  },
  headline: {
    textAlign: 'center',
    marginBottom: scale(16),
  },
  iconWrapper: {
    alignItems: 'center',
    marginBottom: scale(8),
  },
  actionWrapper: {
    width: '100%',
    marginTop: scale(47),
  },
  summaryCard: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: AppColors.coreBlack85,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  summaryCardRight: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  purchaseAmount: {
    fontWeight: '700',
    textDecorationLine: 'line-through',
  },
});

export default styles;
