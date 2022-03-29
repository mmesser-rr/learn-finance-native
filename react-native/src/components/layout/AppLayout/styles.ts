import {StyleSheet} from 'react-native';
import {scale} from 'src/config/dimentions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avoidViewContent: {
    flex: 1,
  },
  avoidingViewContainer: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  view: {
    flex: 1,
    marginHorizontal: scale(27),
    marginBottom: scale(50),
  },
});

export default styles;
