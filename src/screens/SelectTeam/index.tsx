import React from 'react';
import { View } from 'react-native';

import AppLayout from 'src/components/layout/AppLayout';
import { Title } from 'src/components/common/Texts';
import AutoComplete, { ItemInterface } from 'src/components/common/AutoComplete';

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
  return (
    <AppLayout containerStyle={styles.container}>
      <View>
        <View>
          <Title style={styles.head}>What team do you play for?</Title>
        </View>
        <View>
          <AutoComplete suggestions={suggestions} />
        </View>
      </View>
    </AppLayout>
  );
};

export default SelectTeam;
