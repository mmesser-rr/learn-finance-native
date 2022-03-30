import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {useDispatch} from 'react-redux';

import TextInputMask from 'src/components/common/TextInputMask';
import SubmitButton from 'src/components/common/SubmitButton';
import {Text} from 'src/components/common/Texts';
import {updateOnboarding} from 'src/store/actions/onboardingActions';

import styles from './styles';

interface PhoneCaptureProps {
  goToNextStep: () => void;
}

const PhoneCapture: React.FC<PhoneCaptureProps> = ({
  goToNextStep
}) => {
  const dispatch = useDispatch();
  const [isValid, setIsValid] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');

  useEffect(() => {
    dispatch(updateOnboarding({isSignInLink: true, step: 2}));
  }, []);

  const changeValue = (value: string) => {
    setIsValid(value.length === 10);
    setPhoneNumber(value);
  };

  const handleSubmit = async () => {
    try {
      dispatch(updateOnboarding({mobilePhone: phoneNumber}));
      goToNextStep();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.contentWrapper}>
      <View>
        <View>
          <View>
            <Text type="Headline/Small" style={styles.head}>
              First, tell us your phone number
            </Text>
          </View>
          <View>
            <Text type="Body/Large" style={styles.description}>
              You'll use the phone number for log in.
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
    </View>
  );
};

export default PhoneCapture;
