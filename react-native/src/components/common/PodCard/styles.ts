import {StyleSheet} from 'react-native';
import AppColors from 'src/config/colors';
import {scale} from 'src/config/dimentions';

const styles = StyleSheet.create({
  podLabel: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  podLabelText: {
    marginLeft: scale(8),
  },
  balanceLabel: {
    marginBottom: scale(2),
  },
  podGradient: {
    padding: 1,
    borderRadius: scale(8),
  },
  podItem: {
    paddingVertical: scale(8),
    paddingHorizontal: scale(16),
    backgroundColor: AppColors.coreBlack85,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: scale(8),
  },
  balance: {
    alignItems: 'flex-end',
  },
});

export default styles;
