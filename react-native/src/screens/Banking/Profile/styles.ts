import {StyleSheet} from 'react-native';
import AppColors from 'src/config/colors';
import {scale} from 'src/config/dimentions';

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.coreBlack100,
  },
  avatarContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: scale(44)
  },
  avatar: {
    backgroundColor: AppColors.coreBlack80,
    width: scale(80),
    height: scale(80),
    borderRadius: 80
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
  swiperView: {
    marginTop: scale(36)
  },
  swiperBody: {
    marginTop: scale(4),
    marginBottom: scale(16)
  },
  laterAction: {
    marginTop: scale(8),
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: AppColors.gray20,
  },
  card: {
    padding: scale(16),
    borderRadius: scale(8),
  },
  settingCard: {
    backgroundColor: AppColors.coreBlack85,
    padding: scale(16),
    borderRadius: scale(8),
    marginBottom: scale(24)
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: AppColors.coreBlack60,
    paddingBottom: scale(16),
    paddingTop: scale(12)
  }
});

export default styles;