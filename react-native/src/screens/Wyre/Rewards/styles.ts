import {StyleSheet} from 'react-native';
import AppColors from 'src/config/colors';
import {scale} from 'src/config/dimentions';

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.coreBlack100,
  },
  viewWrapper: {
    marginTop: 0,
  },
  nav: {
    marginBottom: scale(24),
  },
  description: {
    marginBottom: scale(28),
  },
  accountWrapper: {
    paddingBottom: scale(7),
    marginBottom: scale(16),
    borderBottomWidth: 1,
    borderBottomColor: AppColors.coreBlack40,
  },
  account: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  wyrePromoCard: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: AppColors.coreBlack85,
    borderRadius: 8,
    marginBottom: 24,
  },
  wyrePromoHeadline: {
    marginBottom: scale(4),
  },
  learnMoreButton: {
    marginTop: scale(16),
  },
  maybeLaterButton: {
    marginTop: scale(8),
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: AppColors.gray20,
  },
  summaryCardContainer: {
    marginBottom: 24,
  },
  summaryCard: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: AppColors.coreBlack85,
    borderRadius: 8,
    width: '100%',
  },
  summaryCardMain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 8,
  },
  cardLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  summaryCardRight: {
    alignItems: 'flex-end',
  },
  cardIcon: {
    width: 30,
    height: 38,
    marginHorizontal: 8,
  },
  summaryCardLabel: {
    marginHorizontal: 8,
  },
  summaryCardBelowLineContainer: {
    borderTopWidth: 1,
    borderTopColor: AppColors.coreBlack60,
  },
  summaryCardBelowLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 8,
  },
  sectionWrapper: {
    marginBottom: 24,
  },
  halfCardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfCard: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: AppColors.coreBlack85,
    borderRadius: 8,
    width: '47%',
    alignItems: 'center',
  },
  halfCardTitle: {
    textAlign: 'center',
  },
});

export default styles;
