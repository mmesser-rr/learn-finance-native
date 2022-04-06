import {StyleSheet} from 'react-native';
import AppColors from 'src/config/colors';
import {scale} from 'src/config/dimentions';

const styles = StyleSheet.create({
  container: {
    borderRadius: scale(31),
    padding: scale(2),
    backgroundColor: 'transparent'
  },
  gradient: {
    borderRadius: scale(27),
  },
  animatedContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    width: scale(27),
    height: scale(27),
    borderRadius: scale(27),
    backgroundColor: AppColors.coreWhite100
  },
  paddingRight: {
    paddingRight: 5
  },
  paddingLeft: {
    paddingLeft: 5
  }
});

export default styles;
