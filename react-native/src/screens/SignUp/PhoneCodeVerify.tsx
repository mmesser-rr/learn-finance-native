import React, {useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {API, graphqlOperation} from 'aws-amplify';
import {useSelector} from 'react-redux';

import SubmitButton from 'src/components/common/SubmitButton';
import TextInput from 'src/components/common/TextInput';
import {Text} from 'src/components/common/Texts';
import {tryPhoneChallenge} from 'src/graphql/mutations';

import styles from './styles';
import {RootState} from 'src/store/root-state';

interface PhoneCodeVerifyProps {
  goToNextStep: () => void;
}

const PhoneCodeVerify: React.FC<PhoneCodeVerifyProps> = ({goToNextStep}) => {
  const [isValid, setIsValid] = useState(false);
  const [code, setCode] = useState('');

  const phoneNumber = useSelector((state: RootState) => {
    const mobilePhone = state.onboardingReducer.mobilePhone;
    const firstThree = mobilePhone.slice(0, 3);
    const secondThree = mobilePhone.slice(3, 6);
    const lastFour = mobilePhone.slice(-4);
    return `(${firstThree}) ${secondThree} ${lastFour}`;
  });

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
          <Text type="Headline/Small" style={styles.head}>
            Enter your verification code
          </Text>
        </View>
        <View>
          <Text type="Body/Large" style={styles.description}>
            We sent a verification code to {phoneNumber}
          </Text>
        </View>
        <View>
          <TextInput
            label="Enter 6-digit Code"
            maxLength={6}
            autoFocus
            onChangeText={changeValue}
          />
        </View>
        <View>
          <TouchableOpacity style={styles.askAction} onPress={() => {}}>
            <Text type="Body/Large" style={styles.askActionLabel}>
              Resend code
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <SubmitButton
          isValid={isValid}
          actionLabel="Verify Code"
          onSubmit={handleSubmit}
        />
      </View>
    </>
  );
};

export default PhoneCodeVerify;
