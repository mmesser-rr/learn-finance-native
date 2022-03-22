import React, {useState} from 'react';
import {View} from 'react-native';
import {API, graphqlOperation} from 'aws-amplify';
import {useDispatch} from 'react-redux';

import TextInputMask from 'src/components/common/TextInputMask';
import SubmitButton from 'src/components/common/SubmitButton';
import {Text} from 'src/components/common/Texts';

import styles from './styles';
import {initiatePhoneChallenge} from 'src/graphql/mutations';
import {updateOnboarding} from 'src/store/actions/onboardingActions';

interface PhoneCaptureProps {
  goToNextStep: () => void;
}

const PhoneCapture: React.FC<PhoneCaptureProps> = ({
  goToNextStep,
}) => {
  const dispatch = useDispatch();
  const [isValid, setIsValid] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');

  const changeValue = (value: string) => {
    setIsValid(value.length === 10);
    setPhoneNumber(value);
  };

  const handleSubmit = async () => {
    try {
      // await API.graphql(
      //   graphqlOperation(initiatePhoneChallenge, {
      //     phoneNumber,
      //   }),
      // );
      dispatch(updateOnboarding({mobilePhone: phoneNumber}));
      goToNextStep();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <View>
        <View>
          <View>
            <Text type="Headline/Small" style={styles.head}>
              To continue, verify your phone number
            </Text>
          </View>
          <View>
            <Text type="Body/Large" style={styles.description}>
              We'll text a verification code to this number.
            </Text>
          </View>
          <View>
            <TextInputMask
              label="Phone Number"
              mask="[000] [000] [0000]"
              autoFocus
              keyboardType="number-pad"
              changeValue={changeValue}
            />
          </View>
        </View>
      </View>
      <View>
        <SubmitButton
          isValid={isValid}
          actionLabel="Continue"
          onSubmit={handleSubmit}
        />
      </View>
    </>
  );
};

export default PhoneCapture;
