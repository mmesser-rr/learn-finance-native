import React, {useState} from 'react';
import {View} from 'react-native';

import AppLayout from 'src/components/layout/AppLayout';
import {Text} from 'src/components/common/Texts';
import AutoComplete, {ItemInterface} from 'src/components/common/AutoComplete';
import SubmitButton from 'src/components/common/SubmitButton';
import {SelectTeamProps} from 'src/types/routerTypes';

import styles from './styles';

const suggestions: ItemInterface[] = [
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

const SelectTeam: React.FC<SelectTeamProps> = ({
  navigation,
  route,
}: SelectTeamProps) => {
  const [value, setValue] = useState('');
  const type = route.params.type;

  const onChangeOption = (option: string) => {
    setValue(option);
  };

  const goToNextStep = () => navigation.navigate('BankAccountIntro');

  return (
    <AppLayout containerStyle={styles.container} viewStyle={styles.viewWrapper}>
      <View>
        <View>
          <Text type="Headline/Small" style={styles.head}>
            {type === 'profession'
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
