import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';

import SubmitButton from 'src/components/common/SubmitButton';
import TextInput from 'src/components/common/TextInput';
import { Caption, Title, Text } from 'src/components/common/Texts';

import styles from './styles';

interface InvitationCodeProps {
  goToNextStep: () => void;
}

const InvitationCode: React.FC<InvitationCodeProps> = ({
  goToNextStep,
}) => {
  const [isValid, setIsValid] = useState(false);

  const codeChangeHandler = (value: string) => {
    setIsValid(!!value);
  };

  return (
    <>
      <View>
        <View>
          <Title style={styles.head}>Welcome to Players Co.</Title>
        </View>
        <View>
          <Caption style={styles.description}>Enter your invitation code to get started.</Caption>
        </View>
        <View>
          <TextInput
            label='Invite Code'
            placeholder='Invite Code'
            keyboardType='number-pad'
            isNumeric
            autoFocus
            onChangeText={codeChangeHandler}
          />
        </View>
        <View>
          <TouchableOpacity style={styles.askAction} onPress={() => {}}>
            <Text style={styles.askActionLabel}>Don't have an invite code?</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <SubmitButton isValid={isValid} actionLabel='Continue' onSubmit={goToNextStep} />
      </View>
    </>
  );
};

export default InvitationCode;
