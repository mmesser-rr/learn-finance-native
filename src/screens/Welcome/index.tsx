import React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';

// import { useDispatch } from 'react-redux';
// import * as loginActions from './store/actions/loginActions';
import styles from './styles';

const Welcome: React.FC = () => {
  // const dispatch = useDispatch();
  // const onLogout = () => dispatch(loginActions.logOut());

  return (
    <View style={styles.container}>
      <Text>A modern financial collective for athletes by athletes</Text>
      <Button>
        Join the movement
      </Button>
    </View>
  );
};

export default Welcome;
