import React, {useEffect, useState} from 'react';
import {View} from 'react-native';

import { Text } from 'src/components/common/Texts';
import AppLayout from 'src/components/layout/AppLayout';

import styles from './styles';

const Profile: React.FC = () => {
  return (
    <AppLayout containerStyle={styles.container} >
      <View>
        <Text type="Body/Medium">profile</Text>
      </View>
    </AppLayout>
  );
};

export default Profile;
