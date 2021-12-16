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
    paddingTop: scale(43),
    paddingLeft: scale(27),
    paddingRight: scale(27),
    paddingBottom: scale(50),
  },
});

export default styles;
