import React, { useState } from 'react';
import { View } from 'react-native';

import { Title } from 'src/components/common/Texts';
import SubmitButton from 'src/components/common/SubmitButton';
import AppLayout from 'src/components/layout/AppLayout';
import NavigationService from 'src/navigation/NavigationService';

import styles from './styles';
import TextInput from 'src/components/common/TextInput';
import Dropdown from 'src/components/common/Dropdown';

const states = [
  {
    label: "Califonia",
    value: "califonia",
  },
  {
    label: "Texas",
    value: "texas",
  },
  {
    label: "Florida",
    value: "florida",
  },
  {
    label: "Alaska",
    value: "alaska",
  },
];

const CaptureAddress: React.FC = () => {
  const [isValid, setIsValid] = useState(false);

  const changeFirstName = (value: string) => {
    setIsValid(!!value);
  };

  const goToNextStep = () => {};

  return (
    <AppLayout containerStyle={styles.container} viewStyle={styles.viewWrapper}>
      <View style={styles.contentWrapper}>
        <View>
          <Title style={styles.head}>What's your address?</Title>
        </View>
        <View style={styles.inputWrapper}>
          <TextInput
            label='Street Address'
            placeholder='Street Address'
            changeValue={changeFirstName}
          />
        </View>
        <View style={styles.inputWrapper}>
          <TextInput
            label='Apartment Number'
            placeholder='Apartment Number'
            changeValue={changeFirstName}
          />
        </View>
        <View style={styles.inputWrapper}>
          <TextInput
            label='City'
            placeholder='City'
            changeValue={changeFirstName}
          />
        </View>
        <View style={styles.inputWrapper}>
          <Dropdown
            label='State'
            list={states}
          />
        </View>
        <View style={styles.inputWrapper}>
          <TextInput
            label='ZIP Code'
            placeholder='ZIP Code'
            changeValue={changeFirstName}
          />
        </View>
      </View>
      <View style={styles.actionWrapper}>
        <SubmitButton isValid={isValid} actionLabel='Continue' onSubmit={goToNextStep} />
      </View>
    </AppLayout>
  );
};

export default CaptureAddress;
