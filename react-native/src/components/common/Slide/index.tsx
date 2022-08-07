import React from "react"
import { TouchableOpacity, View } from "react-native"

import PinkBox from "src/components/common/PinkBox"
import { Text } from "src/components/common/Texts";
import Button from "src/components/common/Button";
import NavigationService from "src/navigation/NavigationService";
import CloseIcon from 'src/assets/icons/close-white.svg';

import styles from "./styles"

interface SlideProps {
  content: React.ReactNode,
  actions: React.ReactNode
}

const Slide: React.FC<SlideProps> = ({content, actions}: SlideProps) => {
  return (
    <PinkBox>
      <View style={styles.slideContainer}>
        <View>
          <TouchableOpacity style={{marginBottom: '30%'}} onPress={() => NavigationService.goBack()}>
            <CloseIcon />
          </TouchableOpacity>
          {content}
        </View>
        <View>
          {actions}
        </View>
      </View>
    </PinkBox>
  )
}

export default Slide