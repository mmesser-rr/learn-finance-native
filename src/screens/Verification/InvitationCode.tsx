import React from 'react';
import { View, SafeAreaView, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Text from 'src/components/Text';
import Button from 'src/components/Button';
import TextInput from 'src/components/TextInput';

import styles from './styles';

const activeActionGradientColors = ['#34A9EC', '#2D95D1', '#0077CC', '#1735BC'];

const InvitationCode: React.FC = () => {
  const [code, setCode] = React.useState('');

  const changeValue = (value: string) => {
    setCode(value);
  };

  const onContinue = () => {};

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewContainer}>
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
              label="Invite Code"
              changeValue={changeValue}
            />
          </View>
          <View>
            <Button
              style={styles.noCodeAction}
              uppercase={false}
              labelStyle={styles.noCodeActionLabel}
              onPress={() => {}}
            >
              Don't have an invite code?
            </Button>
          </View>
        </View>
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
                  <Text style={styles.activeContinueAction}>Continue</Text>
                </TouchableOpacity>
              </LinearGradient>
            ) :
            (
              <TouchableOpacity style={styles.continueActionWrapper}>
                <Text style={[styles.continueAction, styles.continueAction]}>Continue</Text>
              </TouchableOpacity>
            )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default InvitationCode;
