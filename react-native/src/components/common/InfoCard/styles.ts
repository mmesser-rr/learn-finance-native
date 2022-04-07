import {StyleSheet} from 'react-native';
import AppColors from 'src/config/colors';
import {scale} from 'src/config/dimentions';

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    width: '100%',
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: AppColors.coreBlack85,
    borderRadius: 8,
    width: '100%',
  },
  cardLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardRight: {
    alignItems: 'flex-end',
  },
  rightTopTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  exclamation: {marginLeft: 4},
  icon: {
    width: 30,
    height: 38,
    marginHorizontal: 8,
  },
  label: {
    marginHorizontal: 8,
  },
  outlineGradient: {
    borderRadius: 8,
    padding: 1,
  },
});

export default styles;
