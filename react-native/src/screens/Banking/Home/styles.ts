import { StyleSheet } from 'react-native';
import AppColors from 'src/config/colors';
import { scale } from 'src/config/dimentions';

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.coreBlack100,
  },
  viewStyle: {
    marginTop: 0,
    marginBottom: 0,
  },
  dotMenu: {
    marginVertical: scale(12),
    alignItems: 'flex-end',
  },
  title: {
    marginBottom: scale(44),
  },
  subTitle: {
    marginBottom: scale(16),
  },
  accountCard: {
    marginBottom: scale(24),
  },
  card: {
    paddingVertical: scale(12),
    paddingHorizontal: scale(24),
    borderRadius: scale(8),
    backgroundColor: AppColors.coreBlack80,
  },
  cardHead: {
    marginBottom: scale(4),
  },
  cardBody: {
    marginBottom: scale(16),
  },
  depositButton: {
    marginTop: scale(8),
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: AppColors.gray20,
  },
  actionWrapper: {
    flex: 1,
  },
  submit: {
    marginTop: scale(-22),
  },
});

export default styles;
