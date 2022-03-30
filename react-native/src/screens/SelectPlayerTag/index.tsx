import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import { useDispatch } from 'react-redux';

import {Text} from 'src/components/common/Texts';
import SubmitButton from 'src/components/common/SubmitButton';
import AppLayout from 'src/components/layout/AppLayout';
import TextInput from 'src/components/common/TextInput';
import NavigationService from 'src/navigation/NavigationService';
import {
  updateOnboarding,
} from 'src/store/actions/onboardingActions';
import OnboardingSteps from 'src/components/common/OnboardingSteps';

import styles from './styles';


const SelectPlayerTag: React.FC = () => {
  const dispatch = useDispatch();
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    dispatch(updateOnboarding({isSignInLink: false, step: 12}));
  }, []);

  const changeValue = (value: string) => {
    setIsValid(!!value);
  };

  const goToNextStep = () => NavigationService.navigate('VerifyEmailCode');

  return (
    <AppLayout containerStyle={styles.container} viewStyle={styles.viewWrapper}>
      <View style={styles.contentWrapper}>
        <View style={styles.step}>
          <OnboardingSteps />
        </View>
        <View>
          <Text type="Headline/Small" style={styles.head}>
            Create your player tag
          </Text>
        </View>
        <View>
          <Text type="Body/Large" style={styles.caption}>
            You player tag will be your public profile handle in the community.
            You can change your player tag at any time.
          </Text>
        </View>
        <View>
          <TextInput
            label="Player Tag"
            placeholder="Player Tag"
            autoFocus={true}
            left={
              <Text type="Body/Large" style={styles.left}>
                @
              </Text>
            }
            onChangeText={changeValue}
          />
        </View>
      </View>
      <View>
        <SubmitButton
          isValid={isValid}
          actionLabel="Continue"
          onSubmit={goToNextStep}
        />
      </View>
    </AppLayout>
  );
};

export default SelectPlayerTag;
