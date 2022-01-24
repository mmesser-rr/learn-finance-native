import React, { useState } from 'react';
import { View } from 'react-native';

import { Caption, Text, Title } from 'src/components/common/Texts';
import SubmitButton from 'src/components/common/SubmitButton';
import AppLayout from 'src/components/layout/AppLayout';
import TextInput from 'src/components/common/TextInput';
import NavigationService from 'src/navigation/NavigationService';

import styles from './styles';

const SelectPlayerTag: React.FC = () => {
  const [isValid, setIsValid] = useState(false);

  const changeValue = (value: string) => {
    setIsValid(!!value);
  };

  const goToNextStep = () => NavigationService.navigate('VerifyEmailCode');

  return (
    <AppLayout containerStyle={styles.container} viewStyle={styles.viewWrapper}>
      <View style={styles.contentWrapper}>
        <View>
          <Title style={styles.head}>Pick your Player Tag</Title>
        </View>
        <View>
          <Caption style={styles.caption}>
            You Player Tag will be your public profile name in the community. You can change your Player Tag at anytime.
          </Caption>
        </View>
        <View>
          <TextInput
            label='Player Tag'
            placeholder='Player Tag'
            autoFocus={true}
            left={<Text style={styles.left}>@</Text>}
            onChangeText={changeValue}
          />
        </View>
      </View>
      <View style={styles.actionWrapper}>
        <SubmitButton
          isValid={isValid}
          actionLabel='Continue'
          style={styles.submit}
          onSubmit={goToNextStep}
        />
      </View>
    </AppLayout>
  );
};

export default SelectPlayerTag;