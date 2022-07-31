import React, {useEffect, useState} from 'react';
import {View} from 'react-native';

import {Text} from 'src/components/common/Texts';

import commonStyles from '../styles'
import styles from './styles';
import ImageCard from 'src/components/common/ImageCard';
import { Oval } from 'src/components/common/Oval';
import NavigationService from 'src/navigation/NavigationService';

interface LearnItemProps {
  backgroundImage: string;
  sponsor: string;
  title: string;
  level: string;
  rewards: number;
  depositsCount: number;
}

const LearnItem: React.FC<LearnItemProps> = ({ 
  backgroundImage,
  sponsor,
  title,
  level,
  rewards,
  depositsCount
}) => {
  const formattedLevel = level.at(0) + level.substring(1).toLowerCase()

  const onPress = () => {
    NavigationService.navigate('LearnVideo')
  }
  
  return (
    <ImageCard backgroundImage={backgroundImage} disabled={false} onPress={onPress}>
      <Text type="Body/Large" style={styles.sponsor}>
        Presented by {' '}
        <Text type="Body/Large" style={commonStyles.bold}>{sponsor}</Text>
      </Text>
      <Text type="Headline/Small">{title}</Text>
      <View style={commonStyles.flexRow}>
        <Text type="Body/Large">{formattedLevel}</Text>
        <Oval />
        <Text type="Body/Large">{`${rewards} $WEALTH`}</Text>
        <Oval />
        <Text type="Body/Large">{`${depositsCount} Deposits`}</Text>
      </View>
    </ImageCard>
  );
};

export default LearnItem;
