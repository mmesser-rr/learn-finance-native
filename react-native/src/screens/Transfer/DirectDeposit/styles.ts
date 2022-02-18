import { StyleSheet } from 'react-native';
import AppColors from 'src/config/colors';
import { scale } from 'src/config/dimentions';

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.coreBlack100,
  },
  viewWrapper: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 0,
  },
  label: {
    marginBottom: scale(24),
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    borderBottomWidth: 1,
    borderBottomColor: AppColors.coreBlack80,
    paddingBottom: scale(15),
    marginBottom: scale(16),
  },
  actionGradient: {
    borderRadius: scale(100),
    padding: 1,
  },
  copy: {
    width: scale(87),
  },
  activeCopy: {
    backgroundColor: AppColors.coreBlack80,
  },
  address: {
    marginTop: scale(8),
    marginBottom: scale(24)
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: scale(8),
    marginBottom: scale(24),
  },
});

export default styles;
