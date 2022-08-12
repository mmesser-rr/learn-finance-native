import React, { useEffect, useState } from 'react';
import {View} from 'react-native';
import { format } from 'date-fns-tz'

import {Text} from 'src/components/common/Texts';
import Button from 'src/components/common/Button';
import ImageCard from 'src/components/common/ImageCard';
import { Oval } from 'src/components/common/Oval';

import commonStyles from '../styles'
import styles from './styles';
import { Storage } from 'aws-amplify';

interface EventItemProps {
  heroPhotoUri: string;
  sponsor: string;
  title: string;
  category: string;
  dateTime: number;
  reward: number;
  onPress: () => void;
}

const EventItem: React.FC<EventItemProps> = ({ 
  heroPhotoUri,
  sponsor,
  title,
  category,
  dateTime,
  reward,
  onPress
}: EventItemProps) => {
  const [imgSrc, setImgSrc] = useState("https://reactjs.org/logo-og.png")
  
  const formattedDateTime = format(new Date(dateTime), "MMMM do 'at' h:maaa zzz")

  useEffect(() => {
    const setBackgroundImage = async () => {
      if (heroPhotoUri.length) {
        const bgImage = await Storage.get(heroPhotoUri, { download: false })
        setImgSrc(bgImage)
      }
    }

    setBackgroundImage()
  }, [])

  return (
    <ImageCard backgroundImage={imgSrc}>
      <Text type="Body/Large" variant='white' style={styles.sponsor}>
        Presented by {' '}
        <Text type="Body/Large" variant='white' style={commonStyles.bold}>{sponsor}</Text>
      </Text>
      <Text type="Headline/Small" variant='white'>{title}</Text>
      <View style={commonStyles.flexRow}>
        <Text type="Body/Large" variant='white'>{category}</Text>
        <Oval />
        <Text type="Body/Large" variant='white'>{`${reward} $WEALTH`}</Text>
      </View>
      <Text type="Body/Large" variant='white'>{formattedDateTime}</Text>
      <View style={styles.buttonGroup}>
        <Button variant='transparent' actionStyle={styles.notify}>
          <Text type="Body/Large" variant='white'>Notify Me</Text>
        </Button>
        <View style={styles.buttonGap}></View>
        <Button variant='red' actionStyle={styles.rsvp} onPress={onPress}>
          <Text type="Body/Large" variant='white'>RSVP</Text>  
        </Button>
      </View>
    </ImageCard>
  );
};

export default EventItem;
