import React from 'react';
import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';

interface PinkBoxProps {
  children: React.ReactNode;
}

const PinkBox: React.FC<PinkBoxProps> = ({children}) => {
  const backgroundColors = [
    '#FD7072', 
    '#7f3d3f',
    // '#7F3D3F'
  ];

  return (
    <LinearGradient colors={backgroundColors} style={styles.container}>{children}</LinearGradient>
  );
};

export default PinkBox;
