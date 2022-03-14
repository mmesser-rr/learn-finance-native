import React, {useState} from 'react';
import {View} from 'react-native';
import {useDispatch} from 'react-redux';

import SubmitButton from 'src/components/common/SubmitButton';
import TextInput from 'src/components/common/TextInput';
import TextInputMask from 'src/components/common/TextInputMask';
import {Text} from 'src/components/common/Texts';
import TopNav from 'src/components/common/TopNav';
import AppLayout from 'src/components/layout/AppLayout';
import NavigationService from 'src/navigation/NavigationService';

import styles from './styles';

const WithdrawDetails: React.FC = () => {
  const [recipient, setRecipient] = useState('');
  const [routingNumber, setRoutingNumber] = useState('');
  const [accountgNumber, setAccountgNumber] = useState('');
  const [isValid, setIsValid] = useState(false);

  const checkValidation = () => {
    setIsValid(!!recipient && !!routingNumber && routingNumber.length === 9);
  };

  const changeRecipient = (value: string) => {
    setRecipient(value);
    checkValidation();
  };

  const changeRoutingNumber = (value: string) => {
    setRoutingNumber(value);
    checkValidation();
  };

  const changeAccountNumber = (value: string) => {
    setAccountgNumber(value);
    checkValidation();
  };

  const handleContinue = () => {
    NavigationService.navigate('WithdrawAmount');
  };

  return (
    <AppLayout containerStyle={styles.container} viewStyle={styles.viewWrapper}>
      <View>
        <View style={styles.topNav}>
          <TopNav title="Withdraw" goCloseScreen={() => {}} />
        </View>
        <View>
          <Text type="Body/Large" style={styles.description}>
            Please fill out the recipient details.
          </Text>
        </View>
        <View style={styles.recipient}>
          <TextInput label="Recipient Name" onChangeText={changeRecipient} />
        </View>
        <View>
          <TextInputMask
            label="Routing Number"
            mask="[000] [000] [000]"
            autoFocus
            keyboardType="number-pad"
            error={
              routingNumber && routingNumber.length === 9
                ? ''
                : 'Routing numbers are always 9 digits long. Please check.'
            }
            changeValue={changeRoutingNumber}
          />
        </View>
        <View>
          <TextInputMask
            label="Account Number"
            mask="[000] [000] [000] [000]"
            autoFocus
            keyboardType="number-pad"
            changeValue={changeAccountNumber}
          />
        </View>
      </View>
      <View>
        <SubmitButton
          isValid={isValid}
          actionLabel="Continue"
          onSubmit={handleContinue}
        />
      </View>
    </AppLayout>
  );
};

export default WithdrawDetails;
