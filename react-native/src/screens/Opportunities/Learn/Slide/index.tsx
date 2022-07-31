import React from "react"
import { TouchableOpacity, View } from "react-native"
import PinkBox from "src/components/common/PinkBox"
import CloseIcon from 'src/assets/icons/close(white).svg';
import { Text } from "src/components/common/Texts";
import Button from "src/components/common/Button";

import styles from "./styles"

const Slide = ({navigation}) => {
  return (
    <PinkBox>
      <View style={styles.slideContainer}>
        <View>
          <TouchableOpacity style={{marginBottom: '30%'}} onPress={() => navigation.goBack()}>
            <CloseIcon />
          </TouchableOpacity>
          <Text type="Headline/Small" style={{textAlign: 'center'}}>
            This described what term? “Money that is set aside for use
            in case of an emergency.”
          </Text>
        </View>
        <View>
          <Button actionStyle={styles.answerButton}>
            <Text type="Body/Large">Emergency Fund</Text>
          </Button>
          <Button actionStyle={styles.answerButton}>
            <Text type="Body/Large">Investment Pool</Text>
          </Button>
          <Button actionStyle={styles.answerButton}>
            <Text type="Body/Large">Budget</Text>
          </Button>
        </View>
      </View>
    </PinkBox>
  )
}

export default Slide