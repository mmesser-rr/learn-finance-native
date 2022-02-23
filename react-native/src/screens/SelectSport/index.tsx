import React, {useState} from 'react';
import {View} from 'react-native';

import {SelectSportProps} from 'src/types/routerTypes';
import AppLayout from 'src/components/layout/AppLayout';
import {Text} from 'src/components/common/Texts';
import AutoComplete, {ItemInterface} from 'src/components/common/AutoComplete';
import SubmitButton from 'src/components/common/SubmitButton';

import styles from './styles';

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

const SelectSport: React.FC<SelectSportProps> = ({
  navigation,
  route,
}: SelectSportProps) => {
  const [value, setValue] = useState('');

  const onChangeOption = (option: string) => {
    setValue(option);
  };

  const goToNextStep = () =>
    navigation.navigate('SelectTeam', {type: route.params.type});

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
