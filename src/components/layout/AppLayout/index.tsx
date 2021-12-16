import React from 'react';
import { ScrollView, View, SafeAreaView } from 'react-native';

import styles from './styles';

interface AppLayoutProps {
  children: React.ReactNode;
  containerStyle?: Object;
  viewStyle?: Object;
}

const AppLayout: React.FC<AppLayoutProps> = ({
  children,
  containerStyle,
  viewStyle,
}) => {
  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={[styles.view, viewStyle]}>{children}</View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AppLayout;
