import {StyleSheet} from 'react-native';
import AppColors from 'src/config/colors';
import {Metrics, scale} from 'src/config/dimentions';
import AppStyles from 'src/config/styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.coreBlack100,
    height: Metrics.screenHeight,
    justifyContent: 'space-between'
  },
  backward: {
    marginLeft: scale(18), 
    marginTop: scale(36), 
    alignSelf: 'flex-start',

  },
  infoBox: {
    marginTop: scale(16),
    marginVertical: scale(10),
    borderColor: AppColors.coreWhite100,
    borderWidth: Metrics.pixels.size2,
    borderRadius: Metrics.radius.card,
    padding: AppStyles.componentPadding
  },
  divider: {
    marginHorizontal: scale(1),
    marginVertical: scale(8),
    borderWidth: Metrics.pixels.size1,
    borderColor: AppColors.coreWhite100
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  heroPhoto: {
    height: Metrics.screenWidth * 0.45,
    position: 'relative'
  },
  avatar: {
    width: AppStyles.avatarSize,
    height: AppStyles.avatarSize,
    borderRadius: AppStyles.avatarSize * 2,
    position: 'absolute',
    bottom: -AppStyles.avatarSize / 2,
    left: scale(16)
  },
  eventDetails: {
    paddingHorizontal: scale(16)
  },
  tagline: {
    paddingTop: AppStyles.avatarSize / 4 * 3,
    paddingBottom: AppStyles.avatarSize / 3
  },
  sheetContainer: {
    marginHorizontal: 24,
  },
  rsvpButton: {
    marginBottom: scale(70)
  },
  RegConfirmedButton: {
    opacity: 0.7
  },
  cancelRegButton: {
    marginVertical: scale(20)
  },
  modalContent: {
    padding: AppStyles.componentPadding,
    height: '100%',
    justifyContent: 'space-around'
  },
  modalBackground: {
    backgroundColor: AppColors.coreBlack85,
  },
  handleStyle: {
    display: 'none'
  }
});

export default styles;
