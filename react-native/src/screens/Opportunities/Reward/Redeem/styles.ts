import {Dimensions, StyleSheet} from 'react-native';
import AppColors from 'src/config/colors';
import {Metrics, scale} from 'src/config/dimentions';
import AppStyles from 'src/config/styles';

const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  backward: {
    marginVertical: scale(12), 
    alignSelf: 'flex-start'
  },
  description: {
    marginVertical: scale(8)
  },
  redeemedButton: {
    opacity: 0.7
  },
  modalContent: {
    padding: AppStyles.componentPadding,
    paddingBottom: AppStyles.componentPadding * 2,
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
    marginVertical: scale(8), 
    alignSelf: 'flex-start'
  }
});

export default styles;
