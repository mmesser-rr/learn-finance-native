import React from 'react';
import {
  ScrollView,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

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
      <KeyboardAvoidingView
        style={styles.avoidingViewContainer}
        contentContainerStyle={styles.avoidViewContent}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView
            contentContainerStyle={styles.scrollViewContent}
            keyboardShouldPersistTaps="handled"
          >
            <View style={[styles.view, viewStyle]}>{children}</View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default AppLayout;
