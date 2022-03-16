import {StyleSheet} from 'react-native';
import AppColors from 'src/config/colors';
import {scale} from 'src/config/dimentions';

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.coreBlack100,
  },
  viewWrapper: {
    marginTop: 0,
    marginBottom: 0
  },
  nav: {
    marginBottom: scale(24),
  },
  description: {
    marginBottom: scale(28),
  },
  history: {
    paddingBottom: scale(7),
    marginBottom: scale(24),
    borderBottomWidth: 1,
    borderBottomColor: AppColors.coreBlack40
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  tabs: {
    backgroundColor: AppColors.coreBlack80,
    flexDirection: 'row',
    marginBottom: scale(26),
    borderStartColor: 'green',
    width: '100%'
  },
  tab: {
    flexShrink: 0,
    flexGrow: 1
  },
  inactiveButton: {
    paddingVertical: scale(6),
    paddingHorizontal: scale(8),
    alignItems: 'center',
  },
  activeGradient: {
    paddingVertical: scale(6),
    paddingHorizontal: scale(8),
    borderRadius: scale(7),
    alignItems: 'center'
  },
  method: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  details: {
    flex: 1,
    paddingRight: scale(8)
  },
});

export default styles;
