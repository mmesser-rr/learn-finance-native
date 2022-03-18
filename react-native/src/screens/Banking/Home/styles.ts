import {StyleSheet} from 'react-native';
import AppColors from 'src/config/colors';
import {scale} from 'src/config/dimentions';

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.coreBlack100,
  },
  viewStyle: {
    marginTop: 0,
    marginBottom: 0,
  },
  dotMenu: {
    marginVertical: scale(12),
    alignItems: 'flex-end',
  },
  title: {},
  subTitle: {
    marginBottom: scale(16),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  accountCard: {
    marginBottom: scale(24),
  },
  card: {
    paddingVertical: scale(16),
    paddingHorizontal: scale(24),
    borderRadius: scale(8),
    backgroundColor: AppColors.coreBlack80,
  },
  cardHead: {
    marginBottom: scale(4),
  },
  cardBody: {
    marginBottom: scale(16),
  },
  transferWrapper: {
    borderRadius: scale(100),
    backgroundColor: AppColors.coreBlack100,
  },
  transfer: {
    padding: scale(10),
    textAlign: 'center',
  },
  deposit: {
    marginTop: scale(8),
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: AppColors.gray20,
  },
  actionWrapper: {
    flex: 1,
  },
  submit: {
    marginTop: scale(-22),
  },
  submitted: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: scale(24),
    minHeight: scale(20),
  },
  submittedLabel: {
    marginLeft: scale(4),
  },
  podItem: {
    paddingVertical: scale(16),
    paddingHorizontal: scale(13),
    marginBottom: scale(16),
    backgroundColor: AppColors.coreBlack90,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: scale(8),
  },
  podLabel: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  podLabelText: {
    marginLeft: scale(8),
  },
  balanceLabel: {
    marginBottom: scale(2),
  },
  switch: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: scale(6),
    paddingHorizontal: scale(9),
    borderWidth: 1,
    borderColor: AppColors.coreBlack40,
    borderRadius: scale(20),
  },
  switchLabel: {
    marginLeft: scale(4),
    color: AppColors.coreBlack40,
  },
  buttonLinearGradient: {
    borderRadius: scale(100),
    padding: 1,
  },
  depositButtonText: {
    textAlign: 'center',
    marginLeft: scale(5),
    color: AppColors.gray20,
  },
  depositButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    minWidth: 128,
    height: 32,
  },
  totalBalanceContainer: {
    alignItems: 'center',
  },
  chartContainer: {
    marginBottom: 44,
  },
  moveMoneyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    minWidth: 128,
    height: 32,
    backgroundColor: AppColors.coreBlack100,
    borderRadius: scale(100),
  },
  moveMoneyButtonText: {
    color: AppColors.gray20,
    marginLeft: scale(5),
  },
});

export default styles;
