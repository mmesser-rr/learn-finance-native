import React, { useEffect, useState } from "react"
import Button from "src/components/common/Button"
import { Text } from "src/components/common/Texts"

import styles from './styles'

const AnswerButtonGroup = ({
  answers,
  correctAnswer,
  setFoundAnswer,
  correctIndex,
  setAnswer,
}: {
  answers: string[],
  correctAnswer: string,
  correctIndex: number,
  setFoundAnswer: (answer: string, correctAnswer: string) => void,
  setAnswer: (boolean) => void,
}) => {
  // const [buttonStyles, setButtonStyles] = useState({})
  console.log("rendering AnswerButtonGroup")

  const [currentIndex, setCurrentIndex] = useState<number>(-1);

  const AnswerButton = ({ text, result, onPress }) => {
    const style = result === true ? styles.correctAnswerButton : result === false ? styles.wrongAnswerButton : styles.answerButton
    return (
      <Button actionStyle={style} onPress={onPress}>
        <Text type="Body/Large">{text}</Text>
      </Button>
    )
  }

  useEffect(() => console.log('current index: ', currentIndex), [currentIndex]);

  // const onPress = (selectedIndex: number) => {
  //   console.log('=> answerButtonGroup => onPress => selectedIndex => ', selectedIndex)
  //   let newButtonStyles = buttonStyles
  //   answers.map((answer, index) => {
  //     if (selectedIndex === index) {
  //       // setFoundAnswer(answer, correctAnswer)
  //       newButtonStyles[answer] = (answer === correctAnswer ? styles.correctAnswerButton : styles.wrongAnswerButton)
  //     }
  //     else {
  //       newButtonStyles[answer] = styles.answerButton
  //     }
  //   })
  //   // console.log('newButtonStyles', newButtonStyles)
  //   setButtonStyles(newButtonStyles)
  //   console.log("set new button style");
  // }

  // useEffect(() => {
  //   const initialButtonStyles = answers.reduce((prev, cur) => {
  //     return {
  //       ...prev,
  //       [cur]: styles.answerButton
  //     }
  //   }, {})

  //   setButtonStyles(initialButtonStyles)
  //   console.log('resetting button styles...');
  // }, [])

  // useEffect(() => {
  //   console.log("=> answerButtonGroup => buttonStyles => ", buttonStyles)
  // }, [buttonStyles])

  return (
    <>
      {answers.map((answer, index) => (
        <AnswerButton
          key={index}
          text={answer}
          result={index !== currentIndex ? undefined: currentIndex === correctIndex ? true: false}
          onPress={() => {setCurrentIndex(index); setAnswer(index === correctIndex);}}
        />
      ))}
    </>
  )
}
const Memoized =  React.memo(AnswerButtonGroup, (prev, next) => {
  console.log('============================');
  // console.log(prev);
  // console.log(next);
  const result =  prev.correctIndex === next.correctIndex;
  console.log('useMemo return ', result);
  return result;
});
export default Memoized;