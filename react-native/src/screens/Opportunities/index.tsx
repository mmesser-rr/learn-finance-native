import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Image, View } from 'react-native';
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { API, graphqlOperation } from 'aws-amplify';
import { GraphQLResult } from '@aws-amplify/api';

import LearnItem from 'src/screens/Opportunities/Learn';
import EventItem from 'src/screens/Opportunities/Event';
import RewardItem from 'src/screens/Opportunities/Reward';

import AppLayout from 'src/components/layout/AppLayout';
import { Text } from 'src/components/common/Texts';
import Button from 'src/components/common/Button';

import {
  DeleteLearnStatusMutation,
  DeleteLearnStatusMutationVariables,
  UpdateEventMutation,
  UpdateEventMutationVariables,
  UpdateRewardMutation,
  UpdateRewardMutationVariables
} from 'src/types/API';
import { OpportunitiesProps } from 'src/types/opportunitiesRouterTypes';

import WealthIcon from 'src/assets/icons/wealth.png';

import AppColors from 'src/config/colors';

import { RootState } from 'src/store/root-state';
import * as learnStatusActions from 'src/store/actions/learnStatusActions';
import * as learnStatusesActions from 'src/store/actions/learnStatusesActions';
import * as eventsActions from 'src/store/actions/eventsActions';
import * as rewardsActions from 'src/store/actions/rewardsActions';

import { deleteLearnStatus, updateEvent, updateReward } from 'src/graphql/mutations';

import styles from './styles';
import { log } from 'src/utils/functions';

const OPPORTUNITIES = {
  LEARN: 'Learn',
  REWARDS: 'Rewards',
  EVENTS: 'Events',
};

interface WealthBalanceEleProps {
  balance: number;
}
export const WealthBalanceEle: React.FC<WealthBalanceEleProps> = ({ balance }: WealthBalanceEleProps) => {
  return (
    <View style={styles.wealthBalance}>
      <Image source={WealthIcon} style={styles.wealthIcon} />
      <Text type="Body/Large" variant='white'>{balance}</Text>
    </View>
  );
};

const OpportunityTab = ({ label, activeOpportunity, setActiveOpportunity }) => {
  const getBorderColorStyle = (selectedOpportunity: string) => {
    return {
      borderColor:
        activeOpportunity === selectedOpportunity
          ? AppColors.accentRed100
          : AppColors.coreWhite100,
    };
  }

  return (
    <TouchableWithoutFeedback
      style={[styles.tab, getBorderColorStyle(label)]}
      onPress={() => setActiveOpportunity(label)}>
      <Text type="Body/Large"> {label} </Text>
    </TouchableWithoutFeedback>
  );
};

const Opportunities: React.FC<OpportunitiesProps> = ({ 
  navigation 
}: OpportunitiesProps) => {
  log("title", "Opportunities")
  const dispatch = useDispatch()
  const { learnStatuses } = useSelector((state: RootState) => state.learnStatusesReducer)
  const { athleteId, learnItemId, learnStatusId, passedDepositIndex, wealthBalance } = useSelector((state: RootState) => state.learnStatusReducer)
  const { learns } = useSelector((state: RootState) => state.learnsReducer)
  const { events } = useSelector((state: RootState) => state.eventsReducer)
  const { rewards } = useSelector((state: RootState) => state.rewardsReducer)
  const [myKey, setMyKey] = useState(0)

  const [activeOpportunity, setActiveOpportunity] = useState(
    OPPORTUNITIES.LEARN,
  );

  const clearData = async () => {
    log("content", `Opportunities -> clearData -> learnStatuses -> ${learnStatuses}`)
    for await (const o of learnStatuses) {
      try {
        const mutationInput: DeleteLearnStatusMutationVariables = {
          input: {
            id: o.id
          }
        }
        const response = await API.graphql(
          graphqlOperation(deleteLearnStatus, mutationInput),
        ) as GraphQLResult<DeleteLearnStatusMutation>;
      }
      catch (e) {
        log("error", `Opportunities -> clearData -> learnStatuses -> error -> ${e}`)
      }
    }

    for await (const o of events) {
      try {
        const mutationInput: UpdateEventMutationVariables = {
          input: {
            id: o.id,
            registered: false
          }
        }
        const response = await API.graphql(
          graphqlOperation(updateEvent, mutationInput),
        ) as GraphQLResult<UpdateEventMutation>;
      }
      catch (e) {
        log("error", `Opportunities -> clearData -> events -> error -> ${e}`)
      }

      for await (const o of rewards) {
        try {
          const mutationInput: UpdateRewardMutationVariables = {
            input: {
              id: o.id,
              redeemed: false
            }
          }
          const response = await API.graphql(
            graphqlOperation(updateReward, mutationInput),
          ) as GraphQLResult<UpdateRewardMutation>;
        }
        catch (e) {
          log("error", `Opportunities -> clearData -> rewards -> error -> ${e}`)
        }
      }

      dispatch(learnStatusActions.updateLearnStatus(athleteId, learnItemId, learnStatusId, passedDepositIndex, 0))
    }

    dispatch(learnStatusesActions.loadLearnStatuses())
    dispatch(eventsActions.loadEvents())
    dispatch(rewardsActions.loadRewards())
    log("content", "Opportunities - cleared data")
    setMyKey(Math.random())
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      log("content", "Opportunities -> focus")
      setMyKey(Math.random())
    });

    return unsubscribe;
  }, [navigation])

  return (
    <AppLayout containerStyle={styles.container} viewStyle={styles.viewWrapper} scrollEnabled={false}>
      <WealthBalanceEle balance={wealthBalance} />
      <Text type="Headline/Large" variant='white' style={styles.headline}>
        Opportunities
      </Text>
      <Button variant="transparent" onPress={clearData}>
        <Text type="Body/Large">Clear LearnStatus</Text>
      </Button>
      <View style={styles.tabGroup}>
        {[OPPORTUNITIES.LEARN, OPPORTUNITIES.EVENTS, OPPORTUNITIES.REWARDS].map((label, index) => (
          <OpportunityTab
            {...{
              key: index,
              label: label,
              activeOpportunity,
              setActiveOpportunity,
            }}
          />
        ))}
      </View>
      <ScrollView>
        {activeOpportunity === OPPORTUNITIES.LEARN &&
          learns.map((learn, index) => (
            <LearnItem
              key={index}
              data={learn}
              myKey={myKey}
            />
          ))}

        {activeOpportunity === OPPORTUNITIES.EVENTS &&
          events.map((event, index) => {
            return (
              <EventItem
                key={index}
                data={event}
              />
            )
          })}

        {activeOpportunity === OPPORTUNITIES.REWARDS &&
          rewards.map((reward, index) => {
            return (
              <RewardItem
                key={index}
                data={reward}
              />
            )
          }
          )}
      </ScrollView>
    </AppLayout>
  );
};

export default Opportunities;
