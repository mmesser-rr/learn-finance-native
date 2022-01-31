import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import { TextNew as Text } from 'src/components/common/Texts';
import SubmitButton from 'src/components/common/SubmitButton';
import AppLayout from 'src/components/layout/AppLayout';
import TextInputMask from 'src/components/common/TextInputMask';
import NavigationService from 'src/navigation/NavigationService';
import { validateDOB } from 'src/utils/validation';
import { calculateContentHeight } from 'src/utils/functions';

import styles from './styles';

const CaptureDOB: React.FC = () => {
  const [isValid, setIsValid] = useState(false);
  const [safeviewHeight, SetSafeviewHeight] = useState(0);

  useEffect(() => {
    async function getContentHeight() {
      SetSafeviewHeight(await calculateContentHeight());
    }

    getContentHeight();
  }, []);

  const changeValue = (value: string) => {
    setIsValid(validateDOB(value));
  };

  const goToNextStep = () => NavigationService.navigate('CaptureAddress');

  return (
    <AppLayout containerStyle={styles.container}>
      <View style={{height: safeviewHeight / 2}}>
        <View>
          <Text type='Headline/Small' style={styles.head}>
            What's your date of birth?
          </Text>
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

export default CaptureDOB;
