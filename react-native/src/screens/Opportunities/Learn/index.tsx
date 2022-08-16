import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Image, View } from 'react-native';
import { API, graphqlOperation, Storage } from 'aws-amplify';
import { GraphQLResult } from '@aws-amplify/api';

import { Text } from 'src/components/common/Texts';
import ImageCard from 'src/components/common/ImageCard';
import { Oval } from 'src/components/common/Oval';
import NavigationService from 'src/navigation/NavigationService';
import { Learn, LearnLevel, LearnStatus, ListLearnStatusesQuery } from 'src/types/API';
import * as learnStatusActions from 'src/store/actions/learnStatusActions'
import { RootState } from 'src/store/root-state';
import { listLearnStatuses } from 'src/graphql/queries';

import styles from './styles';
import commonStyles from '../styles'
import AppColors from 'src/config/colors';
import { scale } from 'src/config/dimentions';
import { log } from 'src/utils/functions';
import Button from 'src/components/common/Button';
import BeginnerIcon from 'src/assets/icons/learn-item/level-beginner.png'
import MediumIcon from 'src/assets/icons/learn-item/level-medium.png'
import ExpertIcon from 'src/assets/icons/learn-item/level-expert.png'
import DepositsIcon from 'src/assets/icons/learn-item/deposits.png'
import MoneyBagIcon from 'src/assets/icons/learn-item/money-bag.png'

interface LearnItemProps {
  data: Learn | undefined,
  myKey: number // Used for rerendering LearnItem when the Opportunities screen rerenders
}

const LearnItem: React.FC<LearnItemProps> = ({
  data,
  myKey
}: LearnItemProps) => {
  log("title", `LearnItem '${data?.title}'`)
  if (!data) return <></>;

  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.userReducer);
  const { learnStatuses } = useSelector((state: RootState) => state.learnStatusesReducer);

  const [imgSrc, setImgSrc] = useState("https://reactjs.org/logo-og.png")
  const [athleteId, setAthleteId] = useState<string>(user?.id || "")

  const result: LearnStatus | undefined = learnStatuses.filter(o => o.athleteId === athleteId && o.learnItemId === data.id).pop()
  const passedDepositIndex: number = (typeof result?.passedDepositIndex === 'undefined') ? -1 : result?.passedDepositIndex;
  const learnStatusId = result?.id || ""
  const formattedLevel = data.level.at(0) + data.level.substring(1).toLowerCase()
  const depositsCount = data.deposits.length

  const goToLearnVideo = () => {
    log("content", "dispatching 'learnStatusActions.updateLearnStatus'")
    dispatch(learnStatusActions.updateLearnStatus(learnStatusId, athleteId, data.id, passedDepositIndex))
    log("content", "dispatched 'learnStatusActions.updateLearnStatus'")
    NavigationService.navigate('LearnVideo')
  }

  const onPressLearnItem = async () => {
    if (passedDepositIndex > -1) return;
    goToLearnVideo()
  }

  const renderDepositsProgressBar = () => {
    const progress = Math.floor((passedDepositIndex + 1) * 100 / depositsCount)

    return (
      <View>
        <View style={styles.progressBarContainer}>
          <View style={{
            width: `${progress}%`,
            height: 5,
            backgroundColor: AppColors.accentRed100,
            borderRadius: 3
          }} />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text type="Body/Medium" style={styles.redText}>{passedDepositIndex + 1}</Text>
            <Text type="Body/Medium" variant='white'>{` of ${depositsCount} Deposits`}</Text>
          </View>
          <View>
            <Text type="Body/Medium" style={styles.redText}>{`${progress}%`}</Text>
          </View>
        </View>
      </View>
    )
  }

  const renderContinueButton = () => {
    return (
      <Button variant='red' onPress={goToLearnVideo}>
        <Text type="Body/Large" variant='white'>Continue</Text>
      </Button>
    )
  }

  const renderMetaInfo = () => {
    return (passedDepositIndex < depositsCount - 1) 
      ? (
        <View style={commonStyles.flexRow}>
          <Text type="Body/Medium" variant='white'>{formattedLevel}</Text>
          <Oval />
          <Text type="Body/Medium" variant='white'>{`${data.reward} $WEALTH`}</Text>
          <Oval />
          <Text type="Body/Medium" variant='white'>{`${depositsCount} Deposits`}</Text>
        </View>
      ) : (
        <View>
          <View style={commonStyles.flexRow}>
            <View style={styles.metaIcon}>
              <Image source={data.level === LearnLevel.BEGINNER ? BeginnerIcon : data.level === LearnLevel.MEDIUM ? MediumIcon : ExpertIcon} />
            </View>
            <Text type="Body/Medium" variant='white'>{formattedLevel}</Text>
          </View>

          <View style={commonStyles.flexRow}>
            <View style={styles.metaIcon}>
              <Image source={DepositsIcon} />
            </View>
            <Text type="Body/Medium" variant='white'>{`${depositsCount} Deposits`}</Text>
          </View>

          <View style={commonStyles.flexRow}>
            <View style={styles.metaIcon}>
              <Image source={MoneyBagIcon} />
            </View>
            <Text type="Body/Medium" variant='white'>{`${data.reward} $WEALTH`}</Text>
          </View>
        </View>
      )
  }

  useEffect(() => {
    const setBackgroundImage = async () => {
      if (data.bgImageUri?.length) {
        const bgImage = await Storage.get(data.bgImageUri, { download: false })
        setImgSrc(bgImage)
      }
    }

    setBackgroundImage()
  }, [])

  return (
    <ImageCard backgroundImage={imgSrc} disabled={false} onPress={onPressLearnItem}>
      {passedDepositIndex > -1 && passedDepositIndex < depositsCount - 1 && renderDepositsProgressBar()}
      <Text type="Body/Medium" variant='white' style={{marginTop: passedDepositIndex > -1 ? scale(30) : scale(50)}}>
        Presented by {' '}
        <Text type="Body/Medium" variant='white' style={commonStyles.bold}>{data.sponsor}</Text>
      </Text>
      <Text type="Headline/Small" variant='white'>{data.title}</Text>
      {renderMetaInfo()}
      {passedDepositIndex > -1 && passedDepositIndex < depositsCount - 1 && renderContinueButton()}
    </ImageCard>
  );
};

export default React.memo(LearnItem);
