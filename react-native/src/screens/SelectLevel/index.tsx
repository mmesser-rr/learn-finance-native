import React from 'react';
import {View} from 'react-native';
import {useDispatch} from 'react-redux';

import NavigationService from 'src/navigation/NavigationService';
import {Text} from 'src/components/common/Texts';
import Button from 'src/components/common/Button';
import {updateOnboarding} from 'src/store/actions/onboardingActions';
import OnBoardingStartLayout from 'src/components/layout/OnBoardingStartLayout';
import { AthleteLevel } from 'src/types/API'

import styles from './styles';;

const SelectLevel: React.FC = () => {
  const dispatch = useDispatch();

  const onSelectLevel = (level: AthleteLevel) => {
    dispatch(updateOnboarding({level}));
    NavigationService.navigate('SelectSport');
  };

  const contentEle = () => {
    return (
      <>
        <View style={styles.title}>
          <Text type="Headline/Large">Just the basics</Text>
        </View>
        <View>
          <Text type="Body/Large">
            Nothing crazy, just a few questions to understand your athlete experience. 
          </Text>
        </View>
      </>
    );
  };

  const actionEle = () => {
    return (
      <>
        <View>
          <Button onPress={() => onSelectLevel(AthleteLevel.PROFESSIONAL)} actionStyle={styles.proAction}>
            <Text type="Body/Large" style={styles.proLabel}>I'm a professional athlete</Text>
          </Button>
        </View>
        <View>
          <Button
            actionStyle={styles.collegeAction}
            onPress={() => onSelectLevel(AthleteLevel.COLLEGE)}>
            <Text type="Body/Large">I'm a college athlete</Text>
          </Button>
        </View>
      </>
    );
  };

  return (
    <OnBoardingStartLayout
      content={contentEle()}
      action={actionEle()}
    />
  );
};

export default SelectLevel;
