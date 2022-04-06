import React from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';

import styles from './styles';
import {Text} from 'src/components/common/Texts';
import AppLayout from 'src/components/layout/AppLayout';
import NavigationService from 'src/navigation/NavigationService';
import ProcessIcon from 'src/assets/icons/process.svg';
import SubmitButton from 'src/components/common/SubmitButton';
import {RootState} from 'src/store/root-state';
import WyreWithdrawSummary from 'src/components/wyre/WyreWithdrawSummary';

const WithdrawalSubmitted: React.FC = () => {
  const {withdrawAmount} = useSelector((state: RootState) => state.wyreReducer);
  const returnHome = () => {
    NavigationService.navigate('HomeStack', {screen: 'Home'});
  };

  return (
    <AppLayout
      containerStyle={styles.container}
      viewStyle={styles.containerView}>
      <View style={styles.iconWrapper}>
        <ProcessIcon />
      </View>
      <View>
        <Text type="Headline/Small" style={styles.headline}>
          Submitted
        </Text>
      </View>
      <View>
        <Text type="Body/Large" style={styles.body}>
          Your withdrawal has been submitted. It will take 4-5 business days to
          arrive at your Investments Pod. You may see the funds temporarily
          unavailable from you Investments Pod.
        </Text>
      </View>
      <WyreWithdrawSummary withdrawAmount={withdrawAmount!} />

      <View style={styles.actionWrapper}>
        <SubmitButton
          isValid={true}
          actionLabel="Return Home"
          onSubmit={returnHome}
        />
      </View>
    </AppLayout>
  );
};

export default WithdrawalSubmitted;
