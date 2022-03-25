import {StyleSheet} from 'react-native';
import AppColors from 'src/config/colors';
import {scale} from 'src/config/dimentions';

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.coreBlack100,
  },
  viewWrapper: {
    marginTop: 0,
  },
  nav: {
    marginBottom: scale(24),
  },
  description: {
    marginBottom: scale(28),
  },
  accountWrapper: {
    paddingBottom: scale(7),
    marginBottom: scale(16),
    borderBottomWidth: 1,
    borderBottomColor: AppColors.coreBlack40,
  },
  account: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoCardMargin: {
    marginBottom: 24,
  },
  wyrePromoCard: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: AppColors.coreBlack85,
    borderRadius: 8,
    marginBottom: 24,
  },
  wyrePromoHeadline: {
    marginBottom: scale(4),
  },
  learnMoreButton: {
    marginTop: scale(16),
  },
  maybeLaterButton: {
    marginTop: scale(8),
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: AppColors.gray20,
  },
});

export default styles;
