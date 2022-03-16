import React from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {format} from 'date-fns';

import SubmitButton from 'src/components/common/SubmitButton';
import {Text} from 'src/components/common/Texts';
import AppLayout from 'src/components/layout/AppLayout';
import ProcessIcon from 'src/assets/icons/process.svg';
import InfoList, {InfoItemInterface} from 'src/components/common/InfoList';
import NavigationService from 'src/navigation/NavigationService';
import {updateHomeStep} from 'src/store/actions/bankingActions';
import {PODsSteps} from 'src/utils/constants';
import {RootState} from 'src/store/root-state';

import styles from './styles';

const DepositProcessed: React.FC = () => {
  const dispatch = useDispatch();
  const {selectedAccount, transferAmount} = useSelector(
    (state: RootState) => state.bankingReducer,
  );
  const today = format(new Date(), 'MM/dd/yyyy');

  const list: InfoItemInterface[] = [
    {
      label: 'Amount',
      data: <Text type="Body/Large">${transferAmount}</Text>,
    },
    {
      label: 'From',
      data: (
        <Text type="Body/Large">
          {selectedAccount?.name} - {selectedAccount?.mask}
        </Text>
      ),
    },
    {
      label: 'Date',
      data: <Text type="Body/Large">{today}</Text>,
    },
  ];

  const onDone = () => {
    dispatch(updateHomeStep(PODsSteps[1]));
    NavigationService.navigate('HomeStack');
  };

  return (
    <AppLayout containerStyle={styles.container} viewStyle={styles.viewWrapper}>
      <View style={styles.contentContainer}>
        <View>
          <View style={styles.processIcon}>
            <ProcessIcon />
          </View>
          <View style={styles.header}>
            <Text type="Headline/Small" style={styles.center}>
              Processed
            </Text>
          </View>
          <View style={styles.description}>
            <Text type="Body/Large" style={styles.center}>
              Your payment has been processed. It will take 4-5 business days to
              arrive at your Player's account.
            </Text>
          </View>
          <InfoList list={list} />
          <View style={styles.actionWrapper}>
            <SubmitButton
              isValid={true}
              actionLabel="Done"
              style={styles.submit}
              onSubmit={onDone}
            />
          </View>
        </View>
      </View>
    </AppLayout>
  );
};

export default DepositProcessed;
