import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import { Text } from 'src/components/common/Texts';

import commonStyles from '../styles'
import styles from './styles';
import ImageCard from 'src/components/common/ImageCard';
import { Oval } from 'src/components/common/Oval';
import NavigationService from 'src/navigation/NavigationService';
import { API, graphqlOperation, Storage } from 'aws-amplify';
import { Deposit, Learn, LearnStatus, ListLearnStatusesQuery } from 'src/types/API';
import * as learnStatusActions from 'src/store/actions/learnStatusActions'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/store/root-state';
import { listLearnStatuses } from 'src/graphql/queries';
import { GraphQLResult } from '@aws-amplify/api';

interface LearnItemProps {
  data: Learn | undefined
}

const LearnItem: React.FC<LearnItemProps> = ({
  data
}: LearnItemProps) => {
  if (!data) return <></>;
  
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.userReducer);
  
  const [imgSrc, setImgSrc] = useState("https://reactjs.org/logo-og.png")
  const [learnStatuses, setLearnStatuses] = useState<LearnStatus[]>([])
  const [athleteId, setAthleteId] = useState<string>(user?.id || "")

  const result: LearnStatus | undefined = learnStatuses.filter(o => o.athleteId === athleteId && o.learnItemId === data.id).pop()
  const passedDepositIndex: number = (typeof result?.passedDepositIndex === 'undefined') ? -1 : result?.passedDepositIndex;
  const learnStatusId = result?.id || ""
  const formattedLevel = data.level.at(0) + data.level.substring(1).toLowerCase()
  const depositsCount = data.deposits.length
  const depositsPassStatusText = `${passedDepositIndex + 1} of ${depositsCount}`

  const onPressLearnItem = async () => {
    if (passedDepositIndex === depositsCount - 1) return;
    dispatch(learnStatusActions.updateLearnStatus(learnStatusId, athleteId, data.id, passedDepositIndex))
    NavigationService.navigate('LearnVideo')
  }

  useEffect(() => {
    const setBackgroundImage = async () => {
      if (data.bgImageUri?.length) {
        const bgImage = await Storage.get(data.bgImageUri, { download: false })
        setImgSrc(bgImage)
      }
    }

    const fetchLearnStatuses = async () => {
      const response = (await API.graphql(
        graphqlOperation(listLearnStatuses, {
          filter: {
            athleteId: {
              eq: athleteId
            }
          }
        })
      )) as GraphQLResult<ListLearnStatusesQuery>;
      setLearnStatuses(response.data?.listLearnStatuses?.items as LearnStatus[]);
    }

    setBackgroundImage()
    fetchLearnStatuses()
  }, [])

  return (
    <ImageCard backgroundImage={imgSrc} disabled={false} onPress={onPressLearnItem}>
      {/* passedDepositIndex > 0 && */ <Text type="Body/Medium" variant='white'>{depositsPassStatusText}</Text>}
      <Text type="Body/Medium" variant='white' style={styles.sponsor}>
        Presented by {' '}
        <Text type="Body/Medium" variant='white' style={commonStyles.bold}>{data.sponsor}</Text>
      </Text>
      <Text type="Headline/Small" variant='white'>{data.title}</Text>
      <View style={commonStyles.flexRow}>
        <Text type="Body/Medium" variant='white'>{formattedLevel}</Text>
        <Oval />
        <Text type="Body/Medium" variant='white'>{`${data.reward} $WEALTH`}</Text>
        <Oval />
        <Text type="Body/Medium" variant='white'>{`${depositsCount} Deposits`}</Text>
      </View>
    </ImageCard>
  );
};

export default LearnItem;
