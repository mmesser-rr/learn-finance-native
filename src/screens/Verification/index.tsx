import React, { useState } from 'react';
import { View, SafeAreaView, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Text from 'src/components/Text';
import TextInput from 'src/components/TextInput';
import PhoneInput from 'src/components/PhoneInput';
import InvitationCodeStep from './InvitationCodeStep';
import PhoneInputStep from './PhoneInputStep';
import PhoneCodeVerifyStep from './PhoneCodeVerifyStep';

import styles from './styles';

const activeActionGradientColors = ['#34A9EC', '#2D95D1', '#0077CC', '#1735BC'];

const Verification: React.FC = () => {
  const [code, setCode] = useState('');
  const [step, setStep] = useState(1);
  const [isValid, setIsValid] = useState(false);

  const changeValue = (value: string) => {
    setCode(value);
  };

  const onContinue = () => {
    if (step < 3) {
      setStep(step + 1);
      setIsValid(false);
    }
  };

  const changeValidation = (status: boolean) => {
    setIsValid(status);
  };

  const actionLabel = step === 3 ? 'Verify Code' : 'Continue';

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewContainer}>
        {step === 1 && (<InvitationCodeStep changeValidation={changeValidation} />)}
        {step === 2 && (<PhoneInputStep changeValidation={changeValidation} />)}
        {step === 3 && (<PhoneCodeVerifyStep changeValidation={changeValidation} />)}
        <View>
          {isValid ?
            (
              <LinearGradient
                style={styles.linearGradient}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                colors={activeActionGradientColors}
              >
                <TouchableOpacity onPress={onContinue} >
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
    </SafeAreaView>
  );
};

export default Verification;
