import React, { useState } from "react"
import Button from "src/components/common/Button"
import { Text } from "src/components/common/Texts"

import styles from './styles'

const AnswerButtonGroup = React.memo(({ 
  answers, 
  correctAnswer,
  // answerResultProps,
  // setAnswerResultProps
}: { 
  answers: string[], 
  correctAnswer: string,
  // answerResultProps: {},
  // setAnswerResultProps: React.Dispatch<React.SetStateAction<{}>>,
}) => {
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(-1)

  const AnswerButton = ({text, style, onPress}) => {
    return (
      <Button actionStyle={style} onPress={onPress}>
        <Text type="Body/Large">{text}</Text>
      </Button>
    )
  }

  const getStyle = (index: number, answer: string) => {
    console.log("answer, correctAnswer", answer, correctAnswer)
    // console.log('answerResultProps', answerResultProps)

    if (selectedButtonIndex === index) {
      if (answer === correctAnswer) {
        // if (!answerResultProps[correctAnswer]) {
        //   setAnswerResultProps({
        //     ...answerResultProps,
        //     [correctAnswer]: true
        //   })
        // }
        
        return styles.correctAnswerButton 
      }
      else {
        return styles.wrongAnswerButton
      }
    }
    else {
      return styles.answerButton
    }
  }

  const onPress = (index: number) => {
    // console.log('answerResultProps', answerResultProps)
    // setSelectedButtonIndex(index)
  }

  return (
    <>
      {answers.map((answer, index) => (
        <AnswerButton 
          key={index} 
          text={answer} 
          style={() => getStyle(index, answer)}
          onPress={() => onPress(index)}
        />
      ))}
    </>
  )
})

export default AnswerButtonGroup