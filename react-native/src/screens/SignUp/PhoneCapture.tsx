import React, { useState } from 'react';
import { View } from 'react-native';
import { API, graphqlOperation } from 'aws-amplify';

import TextInputMask from 'src/components/common/TextInputMask';
import SubmitButton from 'src/components/common/SubmitButton';
import { Text } from 'src/components/common/Texts';

import styles from './styles';

interface PhoneCaptureProps {
  goToNextStep: () => void;
}

const PhoneCapture: React.FC<PhoneCaptureProps> = ({
  goToNextStep,
}) => {
  const [isValid, setIsValid] = useState(false);
  const [phone, setPhone] = useState('');

  const changeValue = (value: string) => {
    setIsValid(value.length === 10);
    setPhone(value);
  };

  const handleSubmit = async () => {
    goToNextStep();
    // try {
    //   await API.graphql(
    //     graphqlOperation(initiatePhoneChallenge, {
    //       phoneNumber: `1${phone}`,
    //     }),
    //   );
    //   goToNextStep();
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <>
      <View>
        <View>
          <View>
            <Text type='Headline/Small' style={styles.head}>
              To continue, verify your phone number
            </Text>
          </View>
          <View>
            <Text type='Body/Large' style={styles.description}>
              We'll text a verification code to this number.
            </Text>
          </View>
          <View>
            <TextInputMask
              label='Phone Number'
              mask='[000] [000] [0000]'
              autoFocus
              keyboardType='number-pad'
              changeValue={changeValue}
            />
          </View>
        </View>
      </View>
      <View>
        <SubmitButton isValid={isValid} actionLabel='Continue' onSubmit={handleSubmit} />
      </View>
    </>
  );
};

export default PhoneCapture;
