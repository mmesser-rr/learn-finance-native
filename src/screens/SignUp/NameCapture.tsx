import React, { useState } from 'react';
import { View } from 'react-native';

import SubmitButton from 'src/components/SubmitButton';
import Text from 'src/components/Text';
import TextInput from 'src/components/TextInput';

import styles from './styles';

interface NameCaptureProps {
  goToNextStep: () => void;
}

const actionLabel = 'Continue';

const NameCapture: React.FC<NameCaptureProps> = ({
  goToNextStep,
}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isValid, setIsValid] = useState(false);

  const checkValidation = () => {
    setIsValid(!!firstName && !!lastName);
  };

  const changeFirstName = (value: string) => {
    setFirstName(value);
    checkValidation();
  };

  const changeLastName = (value: string) => {
    setLastName(value);
    checkValidation();
  };

  return (
    <View style={styles.viewContainer}>
      <View>
        <View>
          <Text style={styles.head}>What's your name?</Text>
        </View>
        <View>
          <Text style={styles.description}>Your legal name is required</Text>
        </View>
        <View>
          <TextInput
            label='First Name'
            placeholder='First Name'
            changeValue={changeFirstName}
          />
        </View>
        <View>
          <TextInput
            label='Last Name'
            placeholder='Last Name'
            changeValue={changeLastName}
          />
        </View>
      </View>
      <View>
        <SubmitButton isValid={isValid} actionLabel='Continue' onSubmit={goToNextStep} />
      </View>
    </View>
  );
};

export default NameCapture;
