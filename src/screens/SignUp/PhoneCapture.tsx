import React, { useState } from 'react';
import { View } from 'react-native';

import TextInputMask from 'src/components/common/TextInputMask';
import SubmitButton from 'src/components/common/SubmitButton';
import { Caption, Title } from 'src/components/common/Texts';

import styles from './styles';

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
            <TextInputMask
              label='Phone Number'
              mask='[000] [000] [0000]'
              autoFocus
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
