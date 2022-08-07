import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { Dimensions, View } from 'react-native';
import Swiper from 'react-native-swiper';
import LinearGradient from 'react-native-linear-gradient';

import Slide from 'src/components/common/Slide';
import AppLayout from 'src/components/layout/AppLayout';
import { GradientButtonColors } from 'src/utils/constants';
import { RootState } from 'src/store/root-state';

import styles from './styles';
import { Text } from 'src/components/common/Texts';
import Button from 'src/components/common/Button';
import NavigationService from 'src/navigation/NavigationService';
import { ExerciseProps } from 'src/types/opportunitiesRouterTypes';
import { useSelector } from 'react-redux';
import { Quiz, UpdateLearnStatusMutationVariables } from 'src/types/API';
import { API, graphqlOperation } from 'aws-amplify';
import { createLearnStatus, updateLearnStatus } from 'src/graphql/mutations';
import AnswerButtonGroup from './answerButtonGroup';

const { height } = Dimensions.get('window');

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
  navigation
}: ExerciseProps) => {
  const started: boolean = route.params.started;
  const questions: Quiz[] = route.params.questions;
  const [answerResult, setAnswerResult] = useState({})
  const [noWrongAnswers, setNoWrongAnswers] = useState(false);
  const { learnStatusId, learnItemId, athleteId, passedDepositIndex } = useSelector((state: RootState) => state.learnStatusReducer)
  const [results, setResults] = useState({});
  const [exerciseResult, setExerciseResult] = useState(false);

  useEffect(() => {
    const countQ = questions.length;
    let result = true;

    for (let idx = 0; idx < countQ; ++idx) {
      result &&= (results[idx] === true);
    }
    console.log('setting exercise result: ', result);
    setExerciseResult(result);
  }, [results]);

  const ReadyText = () => (
    <Text type="Headline/Small" style={{ textAlign: 'center' }}>
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
    <Text type="Headline/Small"> {questionText} </Text>
  )

  const FinalText = () => (
    <Text type="Headline/Small" style={{ textAlign: 'center' }}>
      Congratulations! {/* Please find all the correct answers. */}
    </Text>
  )

  const FinishAction = () => (
    <Button
      onPress={async () => {
        const mutationInput: UpdateLearnStatusMutationVariables = {
          input: {
            id: learnStatusId,
            athleteId,
            learnItemId,
            passedDepositIndex: passedDepositIndex + 1
          }
        };

        await API.graphql(
          graphqlOperation(learnStatusId.length ? updateLearnStatus : createLearnStatus, mutationInput),
        )

        NavigationService.navigate('OpportunitiesStack')
      }
      }>
      <Text type="Body/Large">Finish</Text>
    </Button>
  )

  const setFoundAnswer = useCallback((answer: string, correctAnswer: string) => {
    setAnswerResult({
      ...answerResult,
      [correctAnswer]: (answer === correctAnswer)
    })
  }, [])

  useEffect(() => {
    const initialAnswerResult = questions.reduce((prev, cur) => {
      return {
        ...prev,
        [cur.correctAnswer]: false
      }
    }, {})
    setAnswerResult(initialAnswerResult)
  }, [])

  useEffect(() => {
    console.log('updated answerResult => ', answerResult)
    const correctAnswers = Object.keys(answerResult)
    const questionsLength = questions.length;
    for (let i = 0; i < questionsLength; i++) {
      if (!answerResult[correctAnswers[i]]) {
        setNoWrongAnswers(false)
        return;
      }
    }
    setNoWrongAnswers(true)
  }, [answerResult])

  return (
    <AppLayout containerStyle={styles.container} scrollEnabled={false}>
      <View style={{ marginTop: '20%', maxHeight: '90%' }}>
        {!started && (
          <Slide content={<ReadyText />} actions={<StartAction />} />
        )}

        {started && (
          <Swiper
            dot={<Dot />}
            activeDot={<ActiveDot />}
            loop={false}
            height={height * 0.9}
          >
            {questions.map((quiz, index) => {


              return (
                <View key={index} style={styles.slideWrapper}>
                  <Slide
                    content={<QuestionText questionText={quiz.questionText} />}
                    actions={
                      <AnswerButtonGroup
                        answers={quiz.answers}
                        correctAnswer={quiz.correctAnswer}
                        correctIndex={1}
                        setFoundAnswer={setFoundAnswer}
                        setAnswer={
                          (result: boolean) => {
                            console.log(`reported answer for index: ${index}, answer = ${result}`);
                            setResults({ ...results, [index]: result });
                          }
                        }
                      />
                    }
                  />
                </View>
              )
            }
            )}

            {/* {noWrongAnswers && (
              <Slide content={<FinalText />} actions={<FinishAction />} />
            )} */}

            {exerciseResult && (
              <Slide content={<FinalText />} actions={<FinishAction />} />
            )}
          </Swiper>
        )}
      </View>
    </AppLayout>
  );
};

export default Exercise;