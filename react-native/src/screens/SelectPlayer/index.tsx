import React, { useEffect } from 'react';
import {TextStyle, TouchableOpacity, View} from 'react-native';
import { useDispatch } from 'react-redux';

import CheckIcon from 'src/assets/icons/autocomplete-check.svg';
import OnboardingSteps from 'src/components/common/OnboardingSteps';
import SubmitButton from 'src/components/common/SubmitButton';
import {Text} from 'src/components/common/Texts';
import AppLayout from 'src/components/layout/AppLayout';
import NavigationService from 'src/navigation/NavigationService';
import { updateOnboarding } from 'src/store/actions/onboardingActions';
import { AthleteLevel } from 'src/types/API';

import styles from './styles';

export interface ItemInterface {
  label: string;
  value: AthleteLevel;
}

const players: ItemInterface[] = [
  {
    label: 'Professional Player',
    value: AthleteLevel.PROFESSIONAL
  },
  {
    label: 'College Player',
    value: AthleteLevel.COLLEGE
  }
];

const SelectPlayer: React.FC = () => {
  const dispatch = useDispatch();
  const [selectedPlayer, setSelectedPlayer] = React.useState<AthleteLevel | undefined>(undefined);
  useEffect(() => {
    dispatch(updateOnboarding({isSignInLink: false, step: 10}));
  }, []);

  const onSelect = (value: AthleteLevel) => {
    setSelectedPlayer(value);
  };

  const onContinue = () => {
    dispatch(updateOnboarding({level: selectedPlayer}));
    NavigationService.navigate('SelectPlayerTag')
  };

  return (
    <AppLayout containerStyle={styles.container}>
      <View style={styles.contentWrapper}>
        <View>
          <OnboardingSteps />
        </View>
        <View>
          <Text type="Headline/Small" style={styles.head}>
            What is your player status?
          </Text>
        </View>
        <View>
          {players.map(s => {
            const isSelected = selectedPlayer === s.value;
            let wrapperStyle: TextStyle[] = [styles.selectWrapper];
            let labelStyle: TextStyle[] = [styles.selectLabel];

            if (isSelected) {
              wrapperStyle.push(styles.active);
              labelStyle.push(styles.active);
            }

            return (
              <TouchableOpacity
                onPress={() => onSelect(s.value)}
                key={s.value}
              >
                <View style={wrapperStyle}>
                  <Text type="Body/Large" style={labelStyle}>
                    {s.label}
                  </Text>
                  {isSelected && <CheckIcon />}
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
      <View>
        <SubmitButton
          isValid={!!selectedPlayer}
          actionLabel="Continue"
          onSubmit={onContinue}
        />
      </View>
    </AppLayout>
  );
};

export default SelectPlayer;
