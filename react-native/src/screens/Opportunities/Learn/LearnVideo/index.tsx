import { useFocusEffect } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Video from 'react-native-video';
import { useSelector } from 'react-redux';
import { Text } from 'src/components/common/Texts';
import AppLayout from 'src/components/layout/AppLayout';
import NavigationService from 'src/navigation/NavigationService';
import { RootState } from 'src/store/root-state';
import { Deposit, Learn, Quiz } from 'src/types/API';

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
  const { learns } = useSelector((state: RootState) => state.learnsReducer)
  const { learnItemId, passedDepositIndex } = useSelector((state: RootState) => state.learnStatusReducer)
  const learnData: Learn = learns.filter(o => o.id === learnItemId)[0]
  const depositData: Deposit = learnData.deposits[passedDepositIndex + 1]
  const questions: Quiz[] = depositData.questions

  useFocusEffect(
    React.useCallback(() => {
      setTimeout(() => {
        NavigationService.navigate('Exercise', { started: false, questions })
      }, 3000)
    }, [])
  )

  return (
    <AppLayout containerStyle={{ backgroundColor: 'blue' }}>
      <View style={{ flex: 1, backgroundColor: 'blue' }}>
        {/* <Video 
          source={{ uri: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' }} 
          style={styles.backgroundVideo}
          controls={true}
        /> */}
        <Text type="Body/Large">{`videoUri: ${depositData.videoUri}`}</Text>
        <Text type="Body/Large">{`title: ${depositData.title}`}</Text>
      </View>
    </AppLayout>
  );
};

export default LearnVideo;
