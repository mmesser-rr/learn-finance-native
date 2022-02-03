import React, { useState } from 'react';
import { View } from 'react-native';

import AppLayout from 'src/components/layout/AppLayout';
import { Text } from 'src/components/common/Texts';
import AutoComplete, { ItemInterface } from 'src/components/common/AutoComplete';
import NavigationService from 'src/navigation/NavigationService';
import SubmitButton from 'src/components/common/SubmitButton';

import styles from './styles';

const suggestions: ItemInterface[] = [
  {
    value: '1',
    label: 'University of California, Berkely'
  },
  {
    value: '2',
    label: 'University of California, Davis'
  },
  {
    value: '3',
    label: 'University of California, Irvine'
  },
  {
    value: '4',
    label: 'University of California, Los Angeles'
  },
  {
    value: '5',
    label: 'University of California, Merced'
  },
];

const SelectTeam: React.FC = () => {
  const [value, setValue] = useState('');

  const onChangeOption = (option: string) => {
    setValue(option);
  };

  const goToNextStep = () => NavigationService.navigate('BankAccountIntro');

  return (
    <AppLayout containerStyle={styles.container} viewStyle={styles.viewWrapper}>
      <View>
        <View>
          <Text type='Headline/Small' style={styles.head}>
            What team do you play for?
          </Text>
        </View>
        <View>
          <AutoComplete suggestions={suggestions} onChange={onChangeOption} />
        </View>
      </View>
      <View>
        <SubmitButton isValid={!!value} actionLabel='OK' onSubmit={goToNextStep} />
      </View>
    </AppLayout>
  );
};

export default SelectTeam;