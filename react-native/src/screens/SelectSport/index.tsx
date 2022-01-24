import React from 'react';
import { View } from 'react-native';

import { SelectSportProps } from 'src/types/routerTypes';
import AppLayout from 'src/components/layout/AppLayout';
import { Title } from 'src/components/common/Texts';
import AutoComplete, { ItemInterface } from 'src/components/common/AutoComplete';

import styles from './styles';

const suggestions: ItemInterface[] = [
  {
    value: '1',
    label: 'Football'
  },
  {
    value: '2',
    label: 'Basketball'
  },
  {
    value: '3',
    label: 'Volleyball'
  }
];

const SelectSport: React.FC<SelectSportProps> = ({ navigation }: SelectSportProps) => {
  const onChangeOption = (option: string) => {
    navigation.navigate('SelectTeam');
  };

  return (
    <AppLayout containerStyle={styles.container}>
      <View>
        <View>
          <Title style={styles.head}>What sports do you play?</Title>
        </View>
        <View>
          <AutoComplete suggestions={suggestions} onChange={onChangeOption} />
        </View>
      </View>
    </AppLayout>
  );
};

export default SelectSport;
