import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import { Text } from 'src/components/common/Texts';

import commonStyles from '../styles'
import styles from './styles';
import ImageCard from 'src/components/common/ImageCard';
import { Oval } from 'src/components/common/Oval';
import NavigationService from 'src/navigation/NavigationService';
import { Storage } from 'aws-amplify';

interface LearnItemProps {
  backgroundImage: string;
  sponsor: string;
  title: string;
  level: string;
  rewards: number;
  depositsCount: number;
  passedDepositIndex: number;
  onPress: () => void;
}

const LearnItem: React.FC<LearnItemProps> = ({
  backgroundImage,
  sponsor,
  title,
  level,
  rewards,
  depositsCount,
  passedDepositIndex,
  onPress
}) => {
  const [imgSrc, setImgSrc] = useState("https://reactjs.org/logo-og.png")

  const formattedLevel = level.at(0) + level.substring(1).toLowerCase()
  const depositsPassStatusText = `${passedDepositIndex + 1} of ${depositsCount}`

  useEffect(() => {
    const setBackgroundImage = async () => {
      console.log('backgroundImage', backgroundImage)
      if (backgroundImage.length) {
        const bgImage = await Storage.get(backgroundImage, { download: false })
        setImgSrc(bgImage)
      }
    }

    setBackgroundImage()
  }, [])

  return (
    <ImageCard backgroundImage={imgSrc} disabled={false} onPress={onPress}>
      {/* passedDepositIndex > 0 && */ <Text type="Body/Large">{depositsPassStatusText}</Text>}
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
