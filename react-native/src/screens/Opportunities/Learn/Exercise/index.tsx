import React, {useState} from 'react';
import {Dimensions, View} from 'react-native';
import {Text} from 'src/components/common/Texts';
import PinkBox from 'src/components/common/PinkBox';
import AppLayout from 'src/components/layout/AppLayout';
import Button from 'src/components/common/Button';
import {ExerciseProps} from 'src/types/routerTypes';
import Swiper from 'react-native-swiper';
import LinearGradient from 'react-native-linear-gradient';
import {GradientButtonColors, PodsCardGradient} from 'src/utils/constants';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './styles';
import Slide from '../Slide';

const {height} = Dimensions.get('window');

const Dot = () => <View style={styles.dot} />;

const ActiveDot = () => {
  return (
    <LinearGradient colors={GradientButtonColors} style={styles.dot}>
      <View />
    </LinearGradient>
  );
};


const Exercise: React.FC<ExerciseProps> = ({
  route,
  navigation,
}: ExerciseProps) => {
  const [swiperIndex, setSwiperIndex] = useState(1);
  const [swiperHeight, setSwiperHeight] = useState(200);
  const started = route.params.started;

  const handleChangeSwiper = (index: number) => {
    setSwiperIndex(index);
  };
  console.log("rendered Exercise")

  return (
    <AppLayout containerStyle={styles.container} scrollEnabled={false}>
      <View style={{ marginTop: '20%', maxHeight: '90%'}}>
        {!started && (
          // <PinkBox>
          //   <View style={{flex: 1, justifyContent: 'space-between'}}>
          //     <View>
          //       <View style={{marginBottom: '30%'}}>
          //         <CloseIcon />
          //       </View>
          //       <Text type="Headline/Small" style={{textAlign: 'center'}}>
          //         Ready to take the quiz?
          //       </Text>
          //     </View>
          //     <View>
          //       <Button
          //         onPress={() =>
          //           navigation.navigate('Exercise', {started: true})
          //         }>
          //         <Text type="Body/Large">Start</Text>
          //       </Button>
          //     </View>
          //   </View>
          // </PinkBox>
          <Slide navigation={navigation} />
        )}

        {started && (
          <Swiper
            dot={<Dot />}
            activeDot={<ActiveDot />}
            loop={false}
            height={height * 0.9}
            onIndexChanged={handleChangeSwiper}
          >
            <View style={styles.slideWrapper}>
              <Slide navigation={navigation} />
            </View>
            <View style={styles.slideWrapper}>
              <Slide navigation={navigation} />
            </View>
          </Swiper>
        )}
      </View>
    </AppLayout>
  );
};

export default Exercise;
