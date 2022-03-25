import {StyleSheet} from 'react-native';
import AppColors from 'src/config/colors';
import {scale} from 'src/config/dimentions';

const styles = StyleSheet.create({
  card: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: AppColors.coreBlack85,
    borderRadius: 8,
    width: '100%',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    marginBottom: 16,
  },
  historyItem: {
    alignItems: 'flex-end',
  },
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
  entriesContainer: {
    width: '100%',
  },
});

export default styles;
