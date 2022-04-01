import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';

import styles from './styles';
import {Text} from 'src/components/common/Texts';
import AppLayout from 'src/components/layout/AppLayout';
import NavigationService from 'src/navigation/NavigationService';
import TopNav from 'src/components/common/TopNav';
import ForwardIcon from 'src/assets/icons/forward.svg';

const countryOptions = ['United States', 'Canada', 'Mexico', 'Others'];

const CountrySelection: React.FC = () => {
  const onContinue = (country: string) => {
    if (country === 'United States') {
      NavigationService.navigate('OpenRewardsAccount');
    } else {
      NavigationService.navigate('NonUS');
    }
  };
  const previous = () => {
    NavigationService.navigate('WyreIntro');
  };

  const onClose = () => {
    NavigationService.navigate('HomeStack', {screen: 'Home'});
  };

  return (
    <AppLayout
      containerStyle={styles.container}
      viewStyle={styles.containerView}>
      <View style={styles.nav}>
        <TopNav
          title="Open Rewards Account"
          goCloseScreen={onClose}
          goPreviousScreen={previous}
        />
      </View>

      <View>
        <Text type="Body/Large" style={styles.body}>
          Please select your country of citizenship:
        </Text>
      </View>
      {countryOptions.map(option => (
        <View style={styles.optionWrapper} key={option}>
          <TouchableOpacity
            style={styles.option}
            onPress={() => onContinue(option)}>
            <View>
              <View>
                <Text type="Body/Large">{option}</Text>
              </View>
            </View>
            <View>
              <ForwardIcon />
            </View>
          </TouchableOpacity>
        </View>
      ))}
    </AppLayout>
  );
};

export default CountrySelection;
