import { StyleSheet } from 'react-native';
import AppColors from 'src/config/colors';
import { scale } from 'src/config/dimentions';

const color = AppColors.whiteColor;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewContainer: {
    flex: 1,
  },
  viewWrapper: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingTop: scale(43),
    paddingLeft: scale(27),
    paddingRight: scale(27),
    paddingBottom: scale(50),
  },
  descriptionWrapper: {
    flex: 3,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  actionWrapper: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  header: {
    fontSize: scale(28),
    lineHeight: scale(36),
    fontWeight: 'bold',
    color,
  },
  blockTitle: {
    fontSize: scale(22),
    lineHeight: scale(28),
    fontWeight: '300',
    color,
  },
  blockDescription: {
    fontSize: scale(16),
    lineHeight: scale(24),
    fontWeight: '500',
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
