import {StyleSheet} from 'react-native';
import {scale} from 'src/config/dimentions';

const styles = StyleSheet.create({
  card: {
    borderColor: 'white',
    borderWidth: scale(1.5),
    borderRadius: scale(8),
    minHeight: scale(160),
    marginTop: scale(16)
  },
  imageBackground: {
    flex: 1,
    overflow: 'hidden'
  },
  content: {
    paddingHorizontal: scale(16),
    paddingVertical: scale(12)
  }
});

export default styles;
