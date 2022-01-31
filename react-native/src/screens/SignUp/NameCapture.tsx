import React, { useState } from 'react';
import { View } from 'react-native';

import SubmitButton from 'src/components/common/SubmitButton';
import TextInput from 'src/components/common/TextInput';
import { TextNew as Text } from 'src/components/common/Texts';

import styles from './styles';

interface NameCaptureProps {
  goToNextStep: () => void;
}

const NameCapture: React.FC<NameCaptureProps> = ({
  goToNextStep,
}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isValid, setIsValid] = useState(false);

  const checkValidation = (fName: string, lName: string) => {
    setIsValid(!!fName && !!lName);
  };

  const changeFirstName = (value: string) => {
    setFirstName(value);
    checkValidation(value, lastName);
  };

  const changeLastName = (value: string) => {
    setLastName(value);
    checkValidation(firstName, value);
  };

  return (
    <>
      <View>
        <View>
          <Text type='Headline/Small' style={styles.head}>
            What's your name?
          </Text>
        </View>
        <View>
          <Text type='Body/Large' style={styles.description}>
            Your legal name is required
          </Text>
        </View>
        <View style={styles.firstName}>
          <TextInput
            label='First Name'
            onChangeText={changeFirstName}
          />
        </View>
        <View>
          <TextInput
            label='Last Name'
            onChangeText={changeLastName}
          />
        </View>
      </View>
      <View>
        <SubmitButton isValid={isValid} actionLabel='Continue' onSubmit={goToNextStep} />
      </View>
    </>
  );
};

export default NameCapture;