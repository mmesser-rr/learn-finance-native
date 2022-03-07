import React, {useState} from 'react';
import {View} from 'react-native';
import {useDispatch} from 'react-redux';

import AppLayout from 'src/components/layout/AppLayout';
import {Text} from 'src/components/common/Texts';
import AutoComplete, {ItemInterface} from 'src/components/common/AutoComplete';
import SubmitButton from 'src/components/common/SubmitButton';
import NavigationService from 'src/navigation/NavigationService';

import styles from './styles';
import {updateOnboarding} from 'src/store/actions/onboardingActions';

const suggestions: ItemInterface[] = [
  {
    value: '1',
    label: 'Football',
  },
  {
    value: '2',
    label: 'Basketball',
  },
  {
    value: '3',
    label: 'Volleyball',
  },
];

const SelectSport: React.FC = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  const onChangeOption = (option: string) => {
    setValue(option);
  };

  const goToNextStep = () => {
    const selectedSport = suggestions.find(
      sport => sport.value === value,
    ) as ItemInterface;
    dispatch(
      updateOnboarding({
        sport: {
          airTableId: selectedSport.value,
          name: selectedSport.label,
        },
      }),
    );
    NavigationService.navigate('SelectTeam');
  };

  return (
    <AppLayout containerStyle={styles.container} viewStyle={styles.viewWrapper}>
      <View>
        <View>
          <Text type="Headline/Small" style={styles.head}>
            What sports do you play?
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

export default SelectSport;
