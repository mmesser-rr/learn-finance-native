import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Text from 'src/components/Text';
import TextInput from 'src/components/TextInput';
import { gradientButtonColors } from 'src/utils/constants';

import styles from './styles';

interface InvitationCodeProps {
  goToNextStep: () => void;
}

const actionLabel = 'Continue';

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
        {isValid ?
          (
            <LinearGradient
              style={styles.linearGradient}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={gradientButtonColors}
            >
              <TouchableOpacity onPress={goToNextStep} >
                <Text style={styles.activeContinueAction}>{actionLabel}</Text>
              </TouchableOpacity>
            </LinearGradient>
          ) :
          (
            <View style={styles.continueActionWrapper}>
              <Text style={[styles.buttonStyle, styles.continueAction]}>{actionLabel}</Text>
            </View>
          )}
      </View>
    </View>
  );
};

export default InvitationCode;
