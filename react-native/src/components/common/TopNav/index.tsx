import React from 'react';
import {View, TouchableOpacity} from 'react-native';

import {Text} from 'src/components/common/Texts';
import BackIcon from 'src/assets/icons/back.svg';
import CloseIcon from 'src/assets/icons/close.svg';

import styles from './styles';

interface TopNavProps {
  title: string;
  goPreviousScreen?: () => void;
}

const TopNav: React.FC<TopNavProps> = ({title, goPreviousScreen}) => {
  return (
    <View style={styles.container}>
      {goPreviousScreen ?
        (
          <TouchableOpacity onPress={() => goPreviousScreen()}>
            <BackIcon />
          </TouchableOpacity>
        ) : (
          <View />
        )
      }
      
      <Text type="Title/Large">{title}</Text>
      <CloseIcon />
    </View>
  );
};

export default TopNav;
