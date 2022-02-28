import React from 'react';
import {View} from 'react-native';
import {Text} from 'src/components/common/Texts';

import styles from './styles';

export interface InfoItemInterface {
  label: String;
  data: React.ReactNode;
}

interface InfoListProps {
  list: InfoItemInterface[];
}

const InfoList: React.FC<InfoListProps> = ({list}) => {
  return (
    <View>
      {list.map((item, index) => (
        <View style={styles.info} key={`info_list_${index}`}>
          <Text style={styles.label} type="Body/Large">
            {item.label}
          </Text>
          <View style={styles.data}>
            {item.data}
          </View>
        </View>
      ))}
    </View>
  );
};

export default InfoList;
