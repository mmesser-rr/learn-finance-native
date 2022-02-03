import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import { Text } from 'src/components/common/Texts';
import SubmitButton from 'src/components/common/SubmitButton';
import AppLayout from 'src/components/layout/AppLayout';
import TextInputMask from 'src/components/common/TextInputMask';
import NavigationService from 'src/navigation/NavigationService';
import { calculateContentHeight } from 'src/utils/functions';

import styles from './styles';

const label = 'SSN (xxx-xx-xxxx)';

const CaptureSSN: React.FC = () => {
  const [isValid, setIsValid] = useState(false);
  const [safeviewHeight, SetSafeviewHeight] = useState(0);

  useEffect(() => {
    async function getContentHeight() {
      SetSafeviewHeight(await calculateContentHeight());
    }

    getContentHeight();
  }, []);

  const changeValue = (value: string) => {
    setIsValid(value.length === 9);
  };

  const goToNextStep = () => NavigationService.navigate('AccountCreateSuccess');

  return (
    <AppLayout containerStyle={styles.container} viewStyle={styles.viewWrapper}>
      <View style={{height: safeviewHeight / 2}}>
        <View>
          <Text type='Headline/Small' style={styles.head}>What's your Social Security number?</Text>
        </View>
        <View>
          <TextInputMask
            label={label}
            mask='[000]-[00]-[0000]'
            autoFocus
            isSecure
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

export default CaptureSSN;
