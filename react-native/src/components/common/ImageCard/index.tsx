import React from 'react';
import {ImageBackground, TouchableOpacity, View} from 'react-native';

import styles from './styles';

interface ImageCardProps {
  children: React.ReactNode;
  backgroundImage: string;
  disabled?: boolean;
  onPress?: () => void;
}

const ImageCard: React.FC<ImageCardProps> = ({
  children,
  backgroundImage,
  disabled = true,
  onPress,
}) => {

  return (
    <TouchableOpacity onPress={onPress} style={styles.card} disabled={disabled}>
      <ImageBackground 
        source={{ uri: backgroundImage }} 
        resizeMode="cover" 
        imageStyle={{opacity: 0.4}}
        style={styles.imageBackground}
      >
        <View style={styles.content}>{children}</View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default ImageCard;
