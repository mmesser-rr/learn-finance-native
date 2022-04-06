import React from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import styles from './styles';
import SubmitButton from 'src/components/common/SubmitButton';
import {Text} from 'src/components/common/Texts';
import AppLayout from 'src/components/layout/AppLayout';
import TopNav from 'src/components/common/TopNav';
import NavigationService from 'src/navigation/NavigationService';
import {RootState} from 'src/store/root-state';
import Loading from 'src/components/common/Loading';
import {wyreWithdrawRequest} from 'src/store/actions/wyreActions';
import WyreWithdrawSummary from 'src/components/wyre/WyreWithdrawSummary';

const WithdrawReview: React.FC = () => {
  const dispatch = useDispatch();
  const {withdrawAmount} = useSelector((state: RootState) => state.wyreReducer);
  const {isLoading} = useSelector((state: RootState) => state.loadingReducer);

  const onWithdraw = () => {
    dispatch(wyreWithdrawRequest());
  };

  const goBack = () => NavigationService.goBack();
  const closeScreen = () =>
    NavigationService.navigate('HomeStack', {screen: 'Home'});

  return (
    <AppLayout containerStyle={styles.container} viewStyle={styles.viewWrapper}>
      <View style={styles.nav}>
        <TopNav
          title="Withdraw"
          goPreviousScreen={goBack}
          goCloseScreen={closeScreen}
        />
      </View>
      <View style={styles.topText}>
        <Text type="Body/Large">Please review the transaction:</Text>
      </View>
      <WyreWithdrawSummary withdrawAmount={withdrawAmount!} />
      <View style={styles.contentContainer}>
        <View>
          <Text style={styles.center} type="Body/Large">
            By clicking ‘withdraw’, I agree to lorem ipsum dolor sit amet,
            consectetur adipiscing elit. In praesent at egestas facilisi.
            (legal)
          </Text>
          <SubmitButton
            isValid={true}
            actionLabel="Withdraw"
            style={styles.submit}
            onSubmit={onWithdraw}
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

export default WithdrawReview;
