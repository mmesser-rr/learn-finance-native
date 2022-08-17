import React, { useEffect, useState } from 'react';
import {Image, View} from 'react-native';

import {Text} from 'src/components/common/Texts';
import ImageCard from 'src/components/common/ImageCard';
import WealthIcon from 'src/assets/icons/wealth.png';

import commonStyles from '../styles'
import styles from './styles';
import { Storage } from 'aws-amplify';
import { Reward } from 'src/types/API';
import NavigationService from 'src/navigation/NavigationService';

interface RewardItemProps {
  data: Reward;
}

const RewardItem: React.FC<RewardItemProps> = ({ 
  data
}: RewardItemProps) => {
  const [heroPhotoSrc, setHeroPhotoSrc] = useState("https://reactjs.org/logo-og.png")
  const [logoSrc, setLogoSrc] = useState("https://reactjs.org/logo-og.png")

  const onPressRewardItem = () => {
    NavigationService.navigate('Redeem', { data })
  }

  useEffect(() => {
    const setBackgroundImage = async () => {
      if (data.heroPhotoUri?.length) {
        const img = await Storage.get(data.heroPhotoUri, { download: false })
        setHeroPhotoSrc(img)
      }

      if (data.logoUri?.length) {
        const img = await Storage.get(data.logoUri, { download: false })
        setLogoSrc(img)
      }
    }

    setBackgroundImage()
  }, [data])

  return (
    <ImageCard backgroundImage={heroPhotoSrc} disabled={false} onPress={onPressRewardItem}>
      <View style={styles.wealthAmount}>
        <Image source={WealthIcon} style={styles.wealthIcon} />
        <Text type="Body/Medium" variant='white'>{data.wealthAmount}</Text>
      </View>
      <View style={styles.body}>
        <Image source={{ uri: logoSrc }} style={styles.logo} />
        <View style={styles.content}>
          <Text type="Headline/Medium" variant='white'>{data.title}</Text>
          <Text type="Paragraph/Medium" variant='white'>{data.description}</Text>
        </View>
      </View>
    </ImageCard>
  );
};

export default RewardItem;
