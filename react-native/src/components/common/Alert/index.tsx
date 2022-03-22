import React, { ReactNode } from 'react';
import {View, ViewStyle } from 'react-native';

import ExclamationIcon from 'src/assets/icons/exclamation.svg';
import {Text} from '../Texts';

import styles from './styles';

interface AlertProps {
  children: ReactNode;
  style?: ViewStyle | ViewStyle[];
}

const Alert: React.FC<AlertProps> = ({ children, style }) => {
  return (
    <View style={[styles.helperContainer, style]}>
      <ExclamationIcon style={styles.helperIcon} />
      <Text type="Body/Medium" style={styles.helperText}>
        {children}
      </Text>
    </View>
  );
};

export default Alert;
