import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { API, graphqlOperation } from 'aws-amplify';

import SubmitButton from 'src/components/common/SubmitButton';
import TextInput from 'src/components/common/TextInput';
import { Text } from 'src/components/common/Texts';
import { tryPhoneChallenge } from 'src/graphql/mutations';

import styles from './styles';

interface PhoneCodeVerifyProps {
  phoneNumber: String;
  goToNextStep: () => void;
}

const PhoneCodeVerify: React.FC<PhoneCodeVerifyProps> = ({
  phoneNumber,
  goToNextStep,
}) => {
  const [isValid, setIsValid] = useState(false);
  const [code, setCode] = useState('');

  const changeValue = (value: string) => {
    setIsValid(value.length === 6);
    setCode(value);
  };

  const handleSubmit = async () => {
    try {
      // await API.graphql(
      //   graphqlOperation(tryPhoneChallenge, {
      //     code,
      //     phoneNumber,
      //   }),
      // );
      goToNextStep();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <View>
        <View>
          <Text type='Headline/Small' style={styles.head}>
            Enter your verification code
          </Text>
        </View>
        <View>
          <Text type='Body/Large' style={styles.description}>
            We sent a verification code to (333) 666 9999
          </Text>
        </View>
        <View>
          <TextInput
            label='Enter 6-digit Code'
            maxLength={6}
            autoFocus
            onChangeText={changeValue}
          />
        </View>
        <View>
          <TouchableOpacity style={styles.askAction} onPress={() => {}}>
            <Text type='Body/Large' style={styles.askActionLabel}>
              Resend code
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <SubmitButton isValid={isValid} actionLabel='Verify Code' onSubmit={handleSubmit} />
      </View>
    </>
  );
};

export default PhoneCodeVerify;