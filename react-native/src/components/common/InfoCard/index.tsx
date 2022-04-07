import React from 'react';
import {TextStyle, View, ViewStyle} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';
import {Text} from 'src/components/common/Texts';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {GradientButtonColors} from 'src/utils/constants';
import ExclamationIcon from 'src/assets/icons/exclamation.svg';

interface InfoCardProps {
  IconSvg: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  labelText: string;
  rightTopText: string | null;
  rightBottomText: string;
  rightBottomStyle?: TextStyle;
  cardStyle?: ViewStyle;
  onPress?: () => void;
}

const InfoCard: React.FC<InfoCardProps> = ({
  IconSvg,
  labelText,
  rightTopText,
  rightBottomText,
  rightBottomStyle,
  cardStyle,
  onPress,
}) => {
  const renderCard = () => (
    <View style={[styles.card]}>
      <View style={styles.cardLeft}>
        <IconSvg style={styles.icon} />
        <Text type="Body/Large" style={styles.label}>
          {labelText}
        </Text>
      </View>
      <View style={styles.cardRight}>
        <View style={styles.rightTopTextContainer}>
          <Text type="Title/Small">{rightTopText}</Text>
          {rightTopText && rightTopText?.includes('Failed') && (
            <ExclamationIcon style={styles.exclamation} />
          )}
        </View>
        <Text type="Headline/Small" style={rightBottomStyle}>
          {rightBottomText}
        </Text>
      </View>
    </View>
  );

  if (!!onPress) {
    return (
      <LinearGradient
        style={[styles.container, styles.outlineGradient, cardStyle]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={GradientButtonColors}>
        <TouchableOpacity onPress={onPress}>{renderCard()}</TouchableOpacity>
      </LinearGradient>
    );
  } else {
    return <View style={[styles.container, cardStyle]}>{renderCard()}</View>;
  }
};

export default InfoCard;
