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
    alignSelf: 'flex-start'
  },
  description: {
    marginTop: scale(4),
    color: AppColors.coreWhite100,
    fontFamily: 'Lato-Medium',
    fontSize: scale(14),
    lineHeight: scale(16),
    letterSpacing: scale(0.25),
  },
  infoBox: {
    marginTop: scale(20),
    marginVertical: scale(10),
    borderColor: AppColors.coreWhite100,
    borderWidth: Metrics.pixels.size2,
    borderRadius: Metrics.radius.card,
    padding: AppStyles.componentPadding
  },
  divider: {
    marginHorizontal: scale(1),
    marginVertical: scale(10),
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
  paddingHorizontal16: {
    paddingHorizontal: scale(16)
  },
  tagline: {
    paddingTop: AppStyles.avatarSize / 4 * 3,
    paddingBottom: AppStyles.avatarSize / 3
  },
  wealthIcon: {
    width: scale(16),
    height: scale(16),
    marginRight: scale(4)
  },
  wealthAmount: {
    flexDirection: 'row',
    alignItems: 'center'
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
  modalContainer: {
    padding: AppStyles.componentPadding,
    height: '100%',
    justifyContent: 'space-around'
  },
  modalBody: {
    paddingHorizontal: scale(6)
  },
  modalTitle: {
    marginVertical: scale(12)
  },
  modalDescription: {
    marginBottom: scale(12)
  },
  modalBackground: {
    backgroundColor: AppColors.coreBlack85,
    borderRadius: 0
  },
  handleStyle: {
    display: 'none'
  },
  closeIcon: {
    marginVertical: scale(16), 
    alignSelf: 'flex-start'
  },
  seeMore: {
    color: AppColors.coreBlue75
  },
  seeLess: {
    color: AppColors.coreBlue75
  }
});

export default styles;
