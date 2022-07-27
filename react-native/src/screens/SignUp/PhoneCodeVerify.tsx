import React, {useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Auth} from 'aws-amplify';
import {useDispatch, useSelector} from 'react-redux';

import SubmitButton from 'src/components/common/SubmitButton';
import TextInput from 'src/components/common/TextInput';
import {Text} from 'src/components/common/Texts';
import {RootState} from 'src/store/root-state';

import styles from './styles';
import {onboardingSilentSignIn} from 'src/store/actions/loginActions';

interface PhoneCodeVerifyProps {
  goToNextStep: () => void;
  updateLoading: (status: boolean) => void;
}

const PhoneCodeVerify: React.FC<PhoneCodeVerifyProps> = ({
  goToNextStep,
  updateLoading,
}) => {
  const dispatch = useDispatch();
  const [isValid, setIsValid] = useState(false);
  const [code, setCode] = useState('');
  const [error, setError] = useState('');

  const {mobilePhone} = useSelector(
    (state: RootState) => state.onboardingReducer,
  );

  const displayPhoneNumber = () => {
    const firstThree = mobilePhone.slice(0, 3);
    const secondThree = mobilePhone.slice(3, 6);
    const lastFour = mobilePhone.slice(-4);
    return `(${firstThree}) ${secondThree} ${lastFour}`;
  };

  const changeValue = (value: string) => {
    setIsValid(value.length === 6);
    setCode(value);
  };

  const handleSubmit = async () => {
    updateLoading(true);
    try {
      // const response = await Auth.confirmSignUp(`+1${mobilePhone}`, code);
      // console.log('confirmSignUp response:', response);
      dispatch(onboardingSilentSignIn());
      goToNextStep();
    } catch (error: any) {
      console.log(error);
      setError(error.message || 'Unknown error');
    }
    updateLoading(false);
  };

  return (
    <View style={styles.contentWrapper}>
      <View>
        <View>
          <Text type="Headline/Small" style={styles.head}>
            To continue, verify your phone number
          </Text>
        </View>
        <View>
          <Text type="Body/Large" style={styles.description}>
            We sent a verification code to {displayPhoneNumber()}
          </Text>
        </View>
        <View>
          <TextInput
            label="Enter 6-digit Code"
            maxLength={6}
            autoFocus
            showErrorMessage={true}
            errorMessage={error}
            onChangeText={changeValue}
            keyboardType="number-pad"
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
    </View>
  );
};

export default PhoneCodeVerify;
