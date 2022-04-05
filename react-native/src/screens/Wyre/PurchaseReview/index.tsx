import React, {useMemo} from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import styles from './styles';
import SubmitButton from 'src/components/common/SubmitButton';
import {Text} from 'src/components/common/Texts';
import AppLayout from 'src/components/layout/AppLayout';
import TopNav from 'src/components/common/TopNav';
import NavigationService from 'src/navigation/NavigationService';
import {getWyreTransactionFee, twoDecimalFormatter} from 'src/utils/functions';
import {RootState} from 'src/store/root-state';
import Loading from 'src/components/common/Loading';
import {wyrePurchaseRequest} from 'src/store/actions/wyreActions';
import WyrePurchaseSummary from 'src/components/wyre/WyrePurchaseSummary';

const PurchaseReview: React.FC = () => {
  const dispatch = useDispatch();
  const {purchaseAmount} = useSelector((state: RootState) => state.wyreReducer);
  const {isLoading} = useSelector((state: RootState) => state.loadingReducer);

  const onPurchase = () => {
    dispatch(wyrePurchaseRequest());
  };

  const goBack = () => NavigationService.goBack();
  const closeScreen = () =>
    NavigationService.navigate('HomeStack', {screen: 'Home'});

  return (
    <AppLayout containerStyle={styles.container} viewStyle={styles.viewWrapper}>
      <View style={styles.nav}>
        <TopNav
          title="Purchase"
          goPreviousScreen={goBack}
          goCloseScreen={closeScreen}
        />
      </View>
      <View style={styles.topText}>
        <Text type="Body/Large">Please review the transaction:</Text>
      </View>
      <WyrePurchaseSummary purchaseAmount={purchaseAmount!} />
      <View style={styles.contentContainer}>
        <View>
          <Text style={styles.center} type="Body/Large">
            By clicking ‘purchase’, I agree to lorem ipsum dolor sit amet,
            consectetur adipiscing elit. In praesent at egestas facilisi. (need
            legal language)
          </Text>
          <SubmitButton
            isValid={true}
            actionLabel="Purchase"
            style={styles.submit}
            onSubmit={onPurchase}
          />
          <Text style={styles.center} type="Title/Small">
            Transactions made after 3:00pm [ET] or on a weekend or holiday will
            be processed the next business day. It is recommended that you print
            a copy of this automation and maintain it for your record.
          </Text>
        </View>
      </View>
      {isLoading && <Loading />}
    </AppLayout>
  );
};

export default PurchaseReview;
