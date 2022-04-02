import React from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import styles from './styles';
import {Text} from 'src/components/common/Texts';
import AppLayout from 'src/components/layout/AppLayout';
import NavigationService from 'src/navigation/NavigationService';
import TopNav from 'src/components/common/TopNav';
import ReadyIcon from 'src/assets/icons/ready.svg';
import SubmitButton from 'src/components/common/SubmitButton';
import * as wyreActions from 'src/store/actions/wyreActions';
import {RootState} from 'src/store/root-state';
import Loading from 'src/components/common/Loading';

const OpenRewardsAccount: React.FC = () => {
  const dispatch = useDispatch();
  const {isLoading} = useSelector((state: RootState) => state.loadingReducer);

  const openRewardsAccount = () => {
    dispatch(wyreActions.openRewardsAccount());
  };

  const previous = () => {
    NavigationService.navigate('WyreIntro');
  };

  const onClose = () => {
    NavigationService.navigate('HomeStack', {screen: 'Home'});
  };
  const onTerms = () => {
    NavigationService.navigate('Disclosures');
  };

  return (
    <AppLayout
      containerStyle={styles.container}
      viewStyle={styles.containerView}>
      <View style={styles.nav}>
        <TopNav
          title="Open Rewards Account"
          goCloseScreen={onClose}
          goPreviousScreen={previous}
        />
      </View>
      <View style={styles.iconWrapper}>
        <ReadyIcon />
      </View>
      <View>
        <Text type="Headline/Small" style={styles.headline}>
          Ready?
        </Text>
      </View>
      <View>
        <Text type="Body/Large" style={styles.body}>
          By tapping ‘Open Rewards Account’, you agree to our{' '}
          <Text type="Body/Large" style={styles.link} onPress={onTerms}>
            Terms and Conditions
          </Text>
          .
        </Text>
      </View>

      <View style={styles.actionWrapper}>
        <SubmitButton
          isValid={true}
          actionLabel="Open Rewards Account"
          onSubmit={openRewardsAccount}
        />
      </View>
      {isLoading && <Loading />}
    </AppLayout>
  );
};

export default OpenRewardsAccount;
