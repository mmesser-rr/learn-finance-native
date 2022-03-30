import React, {useEffect, useMemo, useState} from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import AppLayout from 'src/components/layout/AppLayout';
import {Text} from 'src/components/common/Texts';
import AutoComplete, {ItemInterface} from 'src/components/common/AutoComplete';
import SubmitButton from 'src/components/common/SubmitButton';
import {SelectTeamProps} from 'src/types/routerTypes';
import {RootState} from 'src/store/root-state';
import {updateOnboarding} from 'src/store/actions/onboardingActions';
import OnboardingSteps from 'src/components/common/OnboardingSteps';

import styles from './styles';

const collegeSuggestions: ItemInterface[] = [
  {
    value: '1',
    label: 'University of California, Berkeley',
  },
  {
    value: '2',
    label: 'University of California, Davis',
  },
  {
    value: '3',
    label: 'University of California, Irvine',
  },
  {
    value: '4',
    label: 'University of California, Los Angeles',
  },
  {
    value: '5',
    label: 'University of California, Merced',
  },
  {
    value: '6',
    label: 'University of California, Riverside',
  },
];

const proSuggestions: ItemInterface[] = [
  {
    value: '1',
    label: 'Detroit Lions',
  },
  {
    value: '2',
    label: 'Detroit Pistons',
  },
  {
    value: '3',
    label: 'Los Angeles Lakers',
  },
  {
    value: '4',
    label: 'Los Angeles Rams',
  },
];

const SelectTeam: React.FC<SelectTeamProps> = ({navigation}) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  const {level} = useSelector((state: RootState) => state.onboardingReducer);

  useEffect(() => {
    dispatch(updateOnboarding({isSignInLink: false, step: 8}));
  }, []);

  const suggestions = useMemo(() => {
    if (level === 'PROFESSIONAL') {
      return proSuggestions;
    } else {
      return collegeSuggestions;
    }
  }, [level]);

  const onChangeOption = (option: string) => {
    setValue(option);
  };

  const goToNextStep = () => {
    const selectedTeam = suggestions.find(team => team.value === value)!;
    dispatch(
      updateOnboarding({
        team: {
          airTableId: selectedTeam.value,
          name: selectedTeam.label,
        },
      }),
    );
    navigation.navigate('BankAccountIntro');
  };

  return (
    <AppLayout containerStyle={styles.container} viewStyle={styles.viewWrapper}>
      <View>
        <View style={styles.step}>
          <OnboardingSteps />
        </View>
        <View>
          <Text type="Headline/Small" style={styles.head}>
            {level === 'PROFESSIONAL'
              ? 'What team do you play for?'
              : 'What school do you go to?'}
          </Text>
        </View>
        <View>
          <AutoComplete suggestions={suggestions} onChange={onChangeOption} />
        </View>
      </View>
      <View style={styles.actionWrapper}>
        <SubmitButton
          isValid={!!value}
          actionLabel="OK"
          onSubmit={goToNextStep}
        />
      </View>
    </AppLayout>
  );
};

export default SelectTeam;
