import { StyleSheet } from 'react-native';
import AppColors from 'src/config/colors';
import { scale } from 'src/config/dimentions';

const color = AppColors.whiteColor;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewWrapper: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  descriptionWrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  actionWrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  blockTitle: {
    fontSize: scale(22),
    lineHeight: scale(28),
    fontWeight: '300',
    color,
  },
  joinAction: {
    backgroundColor: AppColors.blackColor,
    borderRadius: 100,
    width: '100%',
  },
  joinActionlabel: {
    color,
    fontWeight: '500',
    fontSize: scale(16),
    lineHeight: scale(24),
    letterSpacing: 0.5,
    paddingTop: scale(10),
    paddingBottom: scale(10),
    textAlign: 'center',
  },
});

export default styles;
