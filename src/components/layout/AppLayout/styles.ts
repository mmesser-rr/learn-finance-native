import { StyleSheet } from 'react-native';
import { scale } from 'src/config/dimentions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContainer: {
    flexGrow: 1,
  },
  view: {
    flex: 1,
    marginTop: scale(43),
    marginHorizontal: scale(27),
    marginBottom: scale(50),
  },
});

export default styles;
