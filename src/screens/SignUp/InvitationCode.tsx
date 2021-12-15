import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';

import SubmitButton from 'src/components/SubmitButton';
import Text from 'src/components/Text';
import TextInput from 'src/components/TextInput';

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
    <View style={styles.viewContainer}>
      <View>
        <View>
          <Text style={styles.head}>Welcome to Players Co.</Text>
        </View>
        <View>
          <Text style={styles.description}>Enter your invitation code to get started.</Text>
        </View>
        <View>
          <TextInput
            label='Invite Code'
            placeholder='Invite Code'
            changeValue={codeChangeHandler}
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
    </View>
  );
};

export default InvitationCode;
