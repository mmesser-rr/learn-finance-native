import React from 'react';
import {View} from 'react-native';
import { format } from 'date-fns-tz'

import {Text} from 'src/components/common/Texts';
import Button from 'src/components/common/Button';
import ImageCard from 'src/components/common/ImageCard';
import { Oval } from 'src/components/common/Oval';

import commonStyles from '../styles'
import styles from './styles';

interface EventItemProps {
  heroPhotoUri: string;
  sponsor: string;
  title: string;
  category: string;
  dateTime: number;
  reward: number;
}

const EventItem: React.FC<EventItemProps> = ({ 
  heroPhotoUri,
  sponsor,
  title,
  category,
  dateTime,
  reward
}) => {
  const formattedDateTime = format(new Date(dateTime), "MMMM do 'at' h:maaa zzz")
  return (
    <ImageCard backgroundImage={heroPhotoUri}>
      <Text type="Body/Large" style={styles.sponsor}>
        Presented by {' '}
        <Text type="Body/Large" style={commonStyles.bold}>{sponsor}</Text>
      </Text>
      <Text type="Headline/Small">{title}</Text>
      <View style={commonStyles.flexRow}>
        <Text type="Body/Large">{category}</Text>
        <Oval />
        <Text type="Body/Large">{`${reward} $WEALTH`}</Text>
      </View>
      <Text type="Body/Large">{formattedDateTime}</Text>
      <View style={styles.buttonGroup}>
        <Button actionStyle={styles.notify}>
          <Text type="Body/Large">Notify Me</Text>
        </Button>
        <View style={styles.buttonGap}></View>
        <Button actionStyle={styles.rsvp}>
          <Text type="Body/Large">RSVP</Text>  
        </Button>
      </View>
    </ImageCard>
  );
};

export default EventItem;
