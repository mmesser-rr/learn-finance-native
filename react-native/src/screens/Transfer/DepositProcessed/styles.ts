import {StyleSheet} from 'react-native';
import AppColors from 'src/config/colors';
import {scale} from 'src/config/dimentions';

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.coreBlack100,
  },
  viewWrapper: {
    justifyContent: 'center'
  },
  contentContainer: {
    flex: 1,
  },
  inputContainer: {
    alignItems: 'center',
  },
  inputWrapper: {
    display: 'flex',
    flexDirection: 'row',
  },
  submit: {
    marginVertical: scale(16),
  },
  header: {
    marginBottom: scale(16),
  },
  processIcon: {
    alignItems: 'center',
    marginBottom: scale(8),
  },
  description: {
    marginBottom: scale(8),
  },
  center: {
    textAlign: 'center'
  },
  actionWrapper: {
    marginTop: scale(72),
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: scale(20),
    paddingTop: scale(12),
    borderBottomWidth: 1,
    borderColor: AppColors.coreBlack40,
  },
  infoTitle: {
    color: AppColors.coreBlack40,
  },
  infoData: {
    flexDirection: 'row',
  },
  editIcon: {
    marginLeft: scale(8),
  },
});

export default styles;
