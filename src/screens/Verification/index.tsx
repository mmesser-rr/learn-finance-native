import React, { useState } from 'react';
import { View, SafeAreaView, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Text from 'src/components/Text';
import TextInput from 'src/components/TextInput';
import PhoneInput from 'src/components/PhoneInput';

import styles from './styles';

const activeActionGradientColors = ['#34A9EC', '#2D95D1', '#0077CC', '#1735BC'];

const Verification: React.FC = () => {
  const [code, setCode] = useState('');
  const [step, setStep] = useState(1);

  const changeValue = (value: string) => {
    setCode(value);
  };

  const onContinue = () => {
    if (step < 3) {
      setStep(step + 1);
      setCode('');
    }
  };

  const actionLabel = step === 3 ? 'Verify Code' : 'Continue';

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewContainer}>
        {step === 1 && (
          <View>
            <View>
              <Text style={styles.head}>Welcome to Players Co.</Text>
            </View>
            <View>
              <Text style={styles.description}>
                Enter your invitation code to get started.
              </Text>
            </View>
            <View>
              <TextInput
                label='Invite Code'
                placeholder='Invite Code'
                changeValue={changeValue}
              />
            </View>
            <View>
              <TouchableOpacity
                style={styles.askAction}
                onPress={() => {}}
              >
                <Text style={styles.askActionLabel}>Don't have an invite code?</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        {step === 2 && (
          <View>
            <View>
              <Text style={styles.head}>To continue, verify your phone number</Text>
            </View>
            <View>
              <Text style={styles.description}>
                We'll text a verification code to this number.
              </Text>
            </View>
            <View>
              <PhoneInput
                label='Phone Number'
                changeValue={changeValue}
              />
            </View>
            <View>
              <TouchableOpacity
                style={styles.askAction}
                onPress={() => {}}
              >
                <Text style={styles.askActionLabel}>Resend code</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        {step === 3 && (
          <View>
            <View>
              <Text style={styles.head}>Enter your verification code</Text>
            </View>
            <View>
              <Text style={styles.description}>
                We sent a verification code to (333) 666 9999
              </Text>
            </View>
            <View>
              <TextInput
                label='Enter 6-digit Code'
                placeholder='Enter 6-digit Codee'
                changeValue={changeValue}
              />
            </View>
            <View>
              <TouchableOpacity
                style={styles.askAction}
                onPress={() => {}}
              >
                <Text style={styles.askActionLabel}>Resend code</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        <View>
          {code ?
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
