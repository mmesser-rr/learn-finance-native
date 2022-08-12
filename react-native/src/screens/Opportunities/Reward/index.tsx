import React, { useEffect, useState } from 'react';
import {Image, View} from 'react-native';

import {Text} from 'src/components/common/Texts';
import ImageCard from 'src/components/common/ImageCard';
import WealthIcon from 'src/assets/icons/wealth.png';

import commonStyles from '../styles'
import styles from './styles';
import { Storage } from 'aws-amplify';

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
  const [heroPhotoSrc, setHeroPhotoSrc] = useState("https://reactjs.org/logo-og.png")
  const [logoSrc, setLogoSrc] = useState("https://reactjs.org/logo-og.png")

  useEffect(() => {
    const setBackgroundImage = async () => {
      if (heroPhotoUri.length) {
        const img = await Storage.get(heroPhotoUri, { download: false })
        setHeroPhotoSrc(img)
      }

      if (logoUri.length) {
        const img = await Storage.get(logoUri, { download: false })
        setLogoSrc(img)
      }
    }

    setBackgroundImage()
  }, [])

  return (
    <ImageCard backgroundImage={heroPhotoSrc} disabled={false} onPress={onPress}>
      <View style={styles.wealthAmount}>
        <Image source={WealthIcon} style={styles.wealthIcon} />
        <Text type="Body/Large" variant='white'>{wealthAmount}</Text>
      </View>
      <View style={styles.body}>
        <Image source={{ uri: logoSrc }} style={styles.logo} />
        <View style={styles.content}>
          <Text type="Headline/Large" variant='white'>{title}</Text>
          <Text type="Body/Large" variant='white'>{description}</Text>
        </View>
      </View>
    </ImageCard>
  );
};

export default RewardItem;
