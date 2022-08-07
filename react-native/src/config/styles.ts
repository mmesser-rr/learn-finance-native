import AppColors from "./colors";
import { Metrics, scale } from "./dimentions";

/*
 * Provides universal color configs used in the app.
 * Provides universal fonts used in the app.
 */
const AppStyles = {
  color: {
    COLOR_PRIMARY: '#2ec7ab',
    COLOR_SECONDARY: '#111',
    COLOR_WHITE: '#FFFFFF',
    COLOR_BLACK: '#000000',
    COLOR_GREY: 'grey',
    COLOR_GREEN: 'green',
    COLOR_PLACEHOLDER: '#111111',
    COLOR_GREY_WHITE: '#fafafa',
    COLOR_DARK_SEPERATOR: '#d4d4d4',
    COLOR_BLACK_TRANSP: 'rgba(0, 0, 0, 0.7)',
    COLOR_GREY_TRANSP: 'rgba(67, 85, 85, 0.7)',
  },
  fonts: {
    // FONT_REGULAR: 'Roboto-Regular',
    // FONT_MEDIUM: 'Roboto-Medium'
  },
  container: {
    backgroundColor: AppColors.coreBlack100,
  },
  viewWrapper: {
    maxHeight: Metrics.screenHeight,
    justifyContent: 'space-between'
  },
  avatarSize: scale(80),
  redButton: {
    backgroundColor: AppColors.accentRed100
  },
  transparentButton: {
    backgroundColor: AppColors.transparent,
    borderColor: AppColors.coreWhite100,
    borderWidth: Metrics.pixels.size1
  },
  componentPadding: scale(14)
};
export default AppStyles;
