import React, { useEffect } from 'react';
import {StyleSheet, View} from 'react-native';
import Video from 'react-native-video';
import {Text} from 'src/components/common/Texts';
import AppLayout from 'src/components/layout/AppLayout';
import NavigationService from 'src/navigation/NavigationService';

var styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

const LearnVideo: React.FC = () => {
  useEffect(() => {
    NavigationService.navigate('Exercise')
  }, [])
  return (
    <AppLayout containerStyle={{backgroundColor: 'blue'}}>
      <View style={{flex: 1, backgroundColor: 'blue'}}>
        {/* <Video 
          source={{ uri: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' }} 
          style={styles.backgroundVideo}
          controls={true}
        /> */}
        <Text type="Body/Large">Hello</Text>
      </View>
    </AppLayout>
  );
};

export default LearnVideo;
