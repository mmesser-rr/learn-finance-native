import React, { useEffect, useState } from "react"
import Button from "src/components/common/Button"
import { Text } from "src/components/common/Texts"

import styles from './styles'

const AnswerButtonGroup = ({
  answers,
  answerButtonsStatus,
  setSelectedAnswerIndex
}: {
  answers: string[],
  correctAnswer: string,
  answerButtonsStatus: {},
  setSelectedAnswerIndex: (index: number) => void,
}) => {
  const AnswerButton = ({ text, status, onPress }) => {
    const style = status === 1
      ? styles.correctAnswerButton
      : status === 0
        ? styles.wrongAnswerButton
        : styles.answerButton
    return (
      <Button actionStyle={style} onPress={onPress}>
        <Text type="Body/Large" variant='white'>{text}</Text>
      </Button>
    )
  }

  return (
    <>
      {answers.map((answer, index) => (
        <AnswerButton
          key={index}
          text={answer}
          status={!!answerButtonsStatus && answerButtonsStatus[index]}
          onPress={() => setSelectedAnswerIndex(index)}
        />
      ))}
    </>
  )
}

export default AnswerButtonGroup;