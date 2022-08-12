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
    marginHorizontal: scale(18),
    marginBottom: scale(50),
    marginTop: scale(12)
  },
});

export default styles;
