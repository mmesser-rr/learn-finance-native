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
  redeemedButton: {
    opacity: 0.7
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
