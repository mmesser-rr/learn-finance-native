import React, { useState, useRef } from 'react';
import { Dimensions, View } from 'react-native';
import Swiper from 'react-native-swiper';

import Slide from 'src/components/common/Slide';
import AppLayout from 'src/components/layout/AppLayout';
import { RootState } from 'src/store/root-state';

import styles from './styles';
import { Text } from 'src/components/common/Texts';
import Button from 'src/components/common/Button';
import NavigationService from 'src/navigation/NavigationService';
import { ExerciseProps } from 'src/types/opportunitiesRouterTypes';
import { useDispatch, useSelector } from 'react-redux';
import { CreateLearnStatusMutationVariables, Quiz, UpdateLearnStatusMutationVariables } from 'src/types/API';
import { API, graphqlOperation } from 'aws-amplify';
import { createLearnStatus, updateLearnStatus } from 'src/graphql/mutations';
import * as learnStatusActions from 'src/store/actions/learnStatusActions';
import AnswerButtonGroup from './answerButtonGroup';
import AppColors from 'src/config/colors';
import { useFocusEffect } from '@react-navigation/native';

const { height } = Dimensions.get('window');

const Dot = () => <View style={styles.dot} />;

const ActiveDot = () => <View style={{ ...styles.dot, backgroundColor: AppColors.accentRed100 }} />;

const Exercise: React.FC<ExerciseProps> = ({
  route,
  navigation
}: ExerciseProps) => {
  const dispatch = useDispatch()
  const started: boolean = route.params.started;
  const questions: Quiz[] = route.params.questions;

  const { learnStatusId, learnItemId, athleteId, passedDepositIndex } = useSelector((state: RootState) => state.learnStatusReducer)
  const [answerButtonsStatus, setAnswerButtonsStatus] = useState<Object>({})
  const [flag, setFlag] = useState(false) // used for re-rendering component when answerButtonsStatus is updated.

  const swiperRef = useRef<Swiper>(null)

  const ReadyText = () => (
    <Text type="Headline/Medium" variant='white' style={{ textAlign: 'center' }}>
      Ready to take the quiz?
    </Text>
  )

  const StartAction = () => (
    <Button
      onPress={() =>
        navigation.navigate('Exercise', { started: true, questions })
      }>
      <Text type="Body/Large">Start</Text>
    </Button>
  )

  const QuestionText = ({ questionText }: { questionText: string }) => (
    <Text type="Headline/Medium" variant='white'> {questionText} </Text>
  )

  const FinalText = () => (
    <Text type="Headline/Medium" variant='white' style={{ textAlign: 'center' }}>
      Congratulations!
    </Text>
  )

  const onFinish = async () => {
    try {
      const mainPayload = {
        athleteId,
        learnItemId,
        passedDepositIndex: passedDepositIndex + 1
      }
      if (learnStatusId.length > 0) {
        const updateMutationInput: UpdateLearnStatusMutationVariables = {
          input: {
            ...mainPayload,
            id: learnStatusId
          }
        };
        console.log("updateMutationInput", updateMutationInput)
        await API.graphql(
          graphqlOperation(updateLearnStatus, updateMutationInput)
        )
      }
      else {
        const createMutationInput: CreateLearnStatusMutationVariables = {
          input: mainPayload
        };

        await API.graphql(
          graphqlOperation(createLearnStatus, createMutationInput)
        )
      }
      dispatch(learnStatusActions.updateLearnStatus(learnStatusId, athleteId, learnItemId, passedDepositIndex + 1))
      NavigationService.navigate('ExerciseResult')
    }
    catch (e) {
      console.log("Exercise - onFinish - error: ", e)
    }

  }

  const FinishAction = () => (
    <Button onPress={onFinish}>
      <Text type="Body/Large" variant='white'>Finish</Text>
    </Button >
  )

  // const checkFoundAllAnswers = (newStatus) => {
  //   let index = 0;
  //   questions.reduce((prev, next) => {
  //     return prev && newStatus[index]
  //   }, true)

  //   let result = true;
  //   Object.keys(newStatus).forEach((qKey, questionIndex) => {
  //     // if sumOfStates is equal to -1 (-1 + -1 + 1 = -1), this means correctAnswer is found.
  //     const sumOfStates = Object.keys(newStatus[qKey]).reduce((prev, next) => {
  //       return prev + newStatus[qKey][next]
  //     }, 0)

  //     result = result && (sumOfStates === -1)
  //   })
  //   return result;
  // }

  useFocusEffect(
    React.useCallback(() => {
      let newSt = {};
      const nQuestions = questions.length;
      for (let i = 0; i < nQuestions; ++i) {
        let newSubSt = {};
        const nAnswers = questions[i].answers.length
        for (let j = 0; j < nAnswers; ++j) {
          newSubSt[j] = -1
        }
        newSt[i] = newSubSt
      }
      setAnswerButtonsStatus(newSt)
    }, [])
  )

  return (
    <AppLayout containerStyle={styles.container} scrollEnabled={false}>
      <View style={{ marginTop: '20%', maxHeight: '83%' }}>
        {!started && (
          <Slide content={<ReadyText />} actions={<StartAction />} />
        )}

        {started && (
          <Swiper
            ref={swiperRef}
            dot={<Dot />}
            activeDot={<ActiveDot />}
            loop={false}
            height={height * 0.75}
            scrollEnabled={false}
          >
            {[...questions.map((quiz, quizIndex) => {
              const setSelectedAnswerIndex = (selectedAnswerIndex: number) => {
                const newSt = answerButtonsStatus
                quiz.answers.map((answer, answerIndex) => {
                  newSt[quizIndex][answerIndex] = answerIndex === selectedAnswerIndex ? Number(quiz.correctAnswer === answer) : -1
                })
                setAnswerButtonsStatus(newSt)
                // setFoundAllAnswers(checkFoundAllAnswers(newSt))
                // setFlag(!flag)
                if (Object.values(newSt[quizIndex]).includes(1)) {
                  setTimeout(() => {
                    swiperRef?.current?.scrollBy(quizIndex + 1)
                  }, 1000)
                }
              }

              return (
                <View key={quizIndex} style={styles.slideWrapper}>
                  <Slide
                    content={<QuestionText questionText={quiz.questionText} />}
                    actions={
                      <AnswerButtonGroup
                        answers={quiz.answers}
                        correctAnswer={quiz.correctAnswer}
                        answerButtonsStatus={answerButtonsStatus[quizIndex]}
                        setSelectedAnswerIndex={setSelectedAnswerIndex}
                      />}
                  />
                </View>
              )
            }
            ), (
              <View style={styles.slideWrapper} key="asdf">
                <Slide content={<FinalText />} actions={<FinishAction />} />
              </View>
            )]}

          </Swiper>
        )}
      </View>
    </AppLayout>
  );
};

export default Exercise;