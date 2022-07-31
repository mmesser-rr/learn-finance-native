import React from 'react';
import {
  ScrollView,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  StatusBar,
} from 'react-native';

import styles from './styles';

interface AppLayoutProps {
  children: React.ReactNode;
  containerStyle?: Object;
  viewStyle?: Object;
  scrollEnabled?: boolean;
}

const AppLayout: React.FC<AppLayoutProps> = ({
  children,
  containerStyle,
  viewStyle,
  scrollEnabled = true
}) => {
  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
      <KeyboardAvoidingView
        style={styles.avoidingViewContainer}
        contentContainerStyle={styles.avoidViewContent}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView
            contentContainerStyle={styles.scrollViewContent}
            keyboardShouldPersistTaps="handled"
            scrollEnabled={scrollEnabled}
          >
            <StatusBar barStyle = "light-content" />
            <View style={[styles.view, viewStyle]}>{children}</View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default AppLayout;
