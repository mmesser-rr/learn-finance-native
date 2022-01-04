import React, { useState } from 'react';
import { View } from 'react-native';

import SubmitButton from 'src/components/common/SubmitButton';
import TextInput from 'src/components/common/TextInput';
import { Caption, Title } from 'src/components/common/Texts';

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
          <Title style={styles.head}>What's your name?</Title>
        </View>
        <View>
          <Caption style={styles.description}>Your legal name is required</Caption>
        </View>
        <View>
          <TextInput
            label='First Name'
            placeholder='First Name'
            onChangeText={changeFirstName}
          />
        </View>
        <View>
          <TextInput
            label='Last Name'
            placeholder='Last Name'
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
