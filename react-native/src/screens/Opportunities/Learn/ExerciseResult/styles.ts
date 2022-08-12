import {Dimensions, StyleSheet} from 'react-native';
import AppColors from 'src/config/colors';
import {scale} from 'src/config/dimentions';

const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.coreBlack100
  },
  viewWrapper: {
    maxHeight: height,
  },
  wealthBalance: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    padding: scale(6),
    borderColor: 'white',
    borderWidth: scale(2),
    borderRadius: scale(6)
  },
  wealthIcon: {
    width: scale(24),
    height: scale(24),
    marginRight: scale(6)
  },
  headline: {
    marginVertical: scale(16)
  },
  tabGroup: {
    flexDirection: 'row'
  },
  tab: {
    justifyContent: 'center',
    alignItems: 'center',
    width: scale(84),
    padding: scale(1),
    borderColor: 'white',
    borderWidth: scale(1),
    borderRadius: scale(6),
    marginRight: scale(12)
  },
  bold: {
    fontWeight: 'bold'
  },
  sponsor: {
    marginTop: scale(52)
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});

export default styles;
