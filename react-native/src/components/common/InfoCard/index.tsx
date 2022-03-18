import React from 'react';
import {TextStyle, View, ViewStyle} from 'react-native';

import styles from './styles';
import {Text} from 'src/components/common/Texts';

interface InfoCardProps {
  IconSvg: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  labelText: string;
  rightTopText: string | null;
  rightBottomText: string;
  rightBottomStyle?: TextStyle;
  cardStyle?: ViewStyle;
}

const InfoCard: React.FC<InfoCardProps> = ({
  IconSvg,
  labelText,
  rightTopText,
  rightBottomText,
  rightBottomStyle,
  cardStyle,
}) => {
  return (
    <View style={[styles.container, cardStyle]}>
      <View style={styles.cardLeft}>
        <IconSvg style={styles.icon} />
        <Text type="Body/Large" style={styles.label}>
          {labelText}
        </Text>
      </View>
      <View style={styles.cardRight}>
        <Text type="Title/Small">{rightTopText}</Text>
        <Text type="Headline/Small" style={rightBottomStyle}>
          {rightBottomText}
        </Text>
      </View>
    </View>
  );
};

export default InfoCard;
