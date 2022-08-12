import { useFocusEffect } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Video from 'react-native-video';
import { useSelector } from 'react-redux';
import Button from 'src/components/common/Button';
import { Text } from 'src/components/common/Texts';
import AppLayout from 'src/components/layout/AppLayout';
import NavigationService from 'src/navigation/NavigationService';
import { RootState } from 'src/store/root-state';
import { Deposit, Learn, Quiz } from 'src/types/API';
import { LearnVideoProps } from 'src/types/opportunitiesRouterTypes';

var styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

const LearnVideo: React.FC<LearnVideoProps> = ({
  route,
  navigation
}: LearnVideoProps) => {
  const [myKey, setMyKey] = useState(0)
  const { learns } = useSelector((state: RootState) => state.learnsReducer)
  const { learnItemId, passedDepositIndex } = useSelector((state: RootState) => state.learnStatusReducer)
  console.log("LearnVideo -> passedDepositIndex -> ", passedDepositIndex);
  
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      console.log("LearnVideo -> focus")
      setMyKey(Math.random())
    });

    return unsubscribe;
  }, [navigation]);

  const learnData: Learn = learns.filter(o => o.id === learnItemId)[0] 
  const bug: boolean =  passedDepositIndex >= learnData.deposits.length - 1
  if (bug) {
    navigation.navigate('Opportunities')
  }

  const depositData: Deposit = learnData.deposits[passedDepositIndex + Number(!bug)]
  const questions: Quiz[] = depositData?.questions  
  console.log("LearnVideo -> questions -> ", questions)

  const onPress = () => {
    navigation.navigate('Exercise', { started: false, questions })
  }

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
        <Button variant="transparent" onPress={onPress}>
          <Text type="Headline/Large">Go to Exercise</Text>
        </Button>
      </View>
    </AppLayout>
  );
};

export default LearnVideo;
