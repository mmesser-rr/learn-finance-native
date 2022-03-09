import React from 'react';
import {View, Animated, Easing} from 'react-native';

import styles from './styles';

const Loading: React.FC = () => {
  const spinValue = new Animated.Value(0);

  Animated.loop(
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 1200,
      easing: Easing.linear,
      useNativeDriver: true,
    }),
  ).start();

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.backdrop}>
      <View style={styles.spinnerContainer}>
        <Animated.Image
          source={require('./../../../assets/icons/processing.png')}
          style={[styles.spinner, {transform: [{rotate: spin}]}]}
        />
      </View>
    </View>
  );
};

export default Loading;
