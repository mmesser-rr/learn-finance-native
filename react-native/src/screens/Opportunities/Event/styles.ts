import {StyleSheet} from 'react-native';
import AppColors from 'src/config/colors';
import {scale} from 'src/config/dimentions';

const styles = StyleSheet.create({
  bold: {
    fontWeight: 'bold'
  },
  sponsor: {
    marginTop: scale(52)
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  buttonGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: scale(20)
  },
  buttonGap: {
    width: scale(16),
    height: 1
  },
  notify: {
    flex: 1
  },
  rsvp: {
    flex: 1
  }
});

export default styles;
