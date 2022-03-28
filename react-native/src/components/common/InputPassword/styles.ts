import {StyleSheet} from 'react-native';
import {scale} from 'src/config/dimentions';

const styles = StyleSheet.create({
  rulesWrapper: {
    marginTop: scale(16)
  },
  rule: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  ruleLable: {
    marginLeft: scale(8)
  },
  error: {
    marginLeft: scale(16),
    marginTop: scale(4),
  },
});

export default styles;
