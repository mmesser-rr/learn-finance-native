import React from 'react';
import {Image, View} from 'react-native';

import {Text} from 'src/components/common/Texts';
import ImageCard from 'src/components/common/ImageCard';
import WealthIcon from 'src/assets/icons/wealth.png';

import commonStyles from '../styles'
import styles from './styles';

interface RewardItemProps {
  heroPhotoUri: string;
  title: string;
  wealthAmount: number;
  logoUri: string;
  description: string;
  onPress: () => void
}

const RewardItem: React.FC<RewardItemProps> = ({ 
  heroPhotoUri,
  title,
  wealthAmount,
  logoUri,
  description,
  onPress
}: RewardItemProps) => {
  return (
    <ImageCard backgroundImage={heroPhotoUri} disabled={false} onPress={onPress}>
      <View style={styles.wealthAmount}>
        <Image source={WealthIcon} style={styles.wealthIcon} />
        <Text type="Body/Large">{wealthAmount}</Text>
      </View>
      <View style={styles.body}>
        <Image source={{ uri: logoUri }} style={styles.logo} />
        <View style={styles.content}>
          <Text type="Headline/Large">{title}</Text>
          <Text type="Body/Large">{description}</Text>
        </View>
      </View>
    </ImageCard>
  );
};

export default RewardItem;
