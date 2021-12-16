import React, { useState } from 'react';
import { View } from 'react-native';

import Text from 'src/components/common/Text';
import PhoneInput from 'src/components/common/PhoneInput';
import SubmitButton from 'src/components/common/SubmitButton';

import styles from './styles';
import { Caption, Title } from 'src/components/common/Texts';

interface PhoneCaptureProps {
  goToNextStep: () => void;
}

const PhoneCapture: React.FC<PhoneCaptureProps> = ({
  goToNextStep,
}) => {
  const [isValid, setIsValid] = useState(false);

  const changeValue = (value: string) => {
    setIsValid(value.length === 10);
  };

  return (
    <>
      <View>
        <View>
          <View>
            <Title style={styles.head}>To continue, verify your phone number</Title>
          </View>
          <View>
            <Caption style={styles.description}>We'll text a verification code to this number.</Caption>
          </View>
          <View>
            <PhoneInput
              label='Phone Number'
              changeValue={changeValue}
            />
          </View>
        </View>
      </View>
      <View>
        <SubmitButton isValid={isValid} actionLabel='Continue' onSubmit={goToNextStep} />
      </View>
    </>
  );
};

export default PhoneCapture;
