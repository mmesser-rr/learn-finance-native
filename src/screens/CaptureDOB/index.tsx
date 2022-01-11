import React, { useState } from 'react';
import { View } from 'react-native';

import { Title } from 'src/components/common/Texts';
import SubmitButton from 'src/components/common/SubmitButton';
import AppLayout from 'src/components/layout/AppLayout';
import TextInputMask from 'src/components/common/TextInputMask';
import NavigationService from 'src/navigation/NavigationService';
import { validateDOB } from 'src/utils/validation';

import styles from './styles';

const CaptureDOB: React.FC = () => {
  const [isValid, setIsValid] = useState(false);

  const changeValue = (value: string) => {
    setIsValid(validateDOB(value));
  };

  const goToNextStep = () => NavigationService.navigate('CaptureAddress');

  return (
    <AppLayout containerStyle={styles.container} viewStyle={styles.viewWrapper}>
      <View style={styles.contentWrapper}>
        <View>
          <Title style={styles.head}>What's your date of birth?</Title>
        </View>
        <View>
          <TextInputMask
            label='Date of Birth (mm/dd/yyyy)'
            mask='[00]/[00]/[0000]'
            autoFocus
            keyboardType='number-pad'
            changeValue={changeValue}
          />
        </View>
      </View>
      <View style={styles.actionWrapper}>
        <SubmitButton isValid={isValid} actionLabel='Continue' onSubmit={goToNextStep} />
      </View>
    </AppLayout>
  );
};

export default CaptureDOB;
