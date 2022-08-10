import React, { useEffect, useState } from 'react';
import { Image, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useFocusEffect } from '@react-navigation/native';
import { API, graphqlOperation } from 'aws-amplify';
import { GraphQLResult } from '@aws-amplify/api';

import LearnItem from 'src/screens/Opportunities/Learn';
import EventItem from 'src/screens/Opportunities/Event';
import RewardItem from 'src/screens/Opportunities/Reward';

import AppLayout from 'src/components/layout/AppLayout';
import { Text } from 'src/components/common/Texts';
import { listEvents, listLearnStatuses, listRewards } from 'src/graphql/queries';
import { listLearns_custom } from 'src/graphql/queries_custom';
import {
  Learn,
  Event,
  Reward,
  ListEventsQuery,
  ListLearns_customQuery,
  ListRewardsQuery,
  LearnStatus,
  SearchLearnStatusesQuery,
  SearchLearnStatusesQueryVariables,
  Deposit,
  GetLearnStatusQuery,
  ListLearnStatusesQuery
} from 'src/types/API';
import * as learnStatusActions from 'src/store/actions/learnStatusActions'
import { RootState } from 'src/store/root-state';
import WealthIcon from 'src/assets/icons/wealth.png';

import styles from './styles';

const OPPORTUNITIES = {
  LEARN: 'Learn',
  REWARDS: 'Rewards',
  EVENTS: 'Events',
};

const WealthBalanceEle = () => {
  const [wealthBalance, setWealthBalance] = useState(1000);

  return (
    <View style={styles.wealthBalance}>
      <Image source={WealthIcon} style={styles.wealthIcon} />
      <Text type="Body/Large">{wealthBalance}</Text>
    </View>
  );
};

const OpportunityTab = ({ label, activeOpportunity, setActiveOpportunity }) => {
  const getBorderColorStyle = (selectedOpportunity: string) => {
    return {
      borderColor:
        activeOpportunity === selectedOpportunity
          ? 'rgba(255, 90, 95, 1)'
          : 'white',
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

const Opportunities = ({ navigation }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.userReducer);

  const [athleteId, setAthleteId] = useState<string>(user?.id || "")

  const [activeOpportunity, setActiveOpportunity] = useState(
    OPPORTUNITIES.LEARN,
  );
  const [learns, setLearns] = useState<Learn[]>([]);
  const [events, setEvents] = useState<Event[]>([]);
  const [rewards, setRewards] = useState<Reward[]>([]);

  const [learnStatuses, setLearnStatuses] = useState<LearnStatus[]>([])

  async function fetchLearns() {
    const response = (await API.graphql(
      graphqlOperation(listLearns_custom),
    )) as GraphQLResult<ListLearns_customQuery>;
    setLearns(response.data?.listLearns?.items as Learn[]);
  }

  async function fetchLearnStatuses() {
    const response = (await API.graphql(
      graphqlOperation(listLearnStatuses, {
        filter: {
          athleteId: {
            eq: athleteId
          }
        }
      }),
    )) as GraphQLResult<ListLearnStatusesQuery>;
    setLearnStatuses(response.data?.listLearnStatuses?.items as LearnStatus[]);
  }

  async function fetchEvents() {
    const response = (await API.graphql(
      graphqlOperation(listEvents),
    )) as GraphQLResult<ListEventsQuery>;
    setEvents(response.data?.listEvents?.items as Event[]);
  }

  async function fetchRewards() {
    const response = (await API.graphql(
      graphqlOperation(listRewards),
    )) as GraphQLResult<ListRewardsQuery>;
    setRewards(response.data?.listRewards?.items as Reward[]);
  }

  useFocusEffect(
    React.useCallback(() => {
      // fetch Learn, Events and Rewards data
      fetchLearns();
      fetchLearnStatuses();
      fetchEvents();
      fetchRewards();
    }, [navigation])
  )

  return (
    <AppLayout containerStyle={styles.container} viewStyle={styles.viewWrapper} scrollEnabled={false}>
      <WealthBalanceEle />
      <Text type="Headline/Large" style={styles.headline}>
        Opportunities
      </Text>
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
          learns.map((learn, index) => {
            const result: LearnStatus | undefined = learnStatuses.filter(o => o.athleteId === athleteId && o.learnItemId === learn.id).pop()
            const passedDepositIndex: number = (typeof result?.passedDepositIndex === 'undefined') ? -1 : result?.passedDepositIndex;
            const depositData: Deposit | undefined = learn.deposits?.at(passedDepositIndex + 1)
            const learnStatusId = result?.id || ""

            const onPressLearnItem = async () => {
              if (passedDepositIndex === learn.deposits.length - 1) return;
              dispatch(learnStatusActions.updateLearnStatus(learnStatusId, athleteId, learn.id, passedDepositIndex))
              if (!depositData) {
                console.log(`Deposit data at index of ${index} doesn't exist.`)
                return;
              }
              navigation.navigate('LearnVideo', { depositData })
            }

            return (
              <LearnItem
                key={index}
                backgroundImage={learn.bgImageUri || ""}
                sponsor={learn.sponsor}
                title={learn.title}
                level={learn.level}
                rewards={learn.reward}
                depositsCount={learn.deposits?.length || 0}
                passedDepositIndex={passedDepositIndex}
                onPress={onPressLearnItem}
              />
            )
          })}

        {activeOpportunity === OPPORTUNITIES.EVENTS &&
          events.map((event, index) => {
            const heroPhotoUri = event.heroPhotoUri;
            const logoUri = event.logoUri;
            const sponsor = event.sponsor;
            const title = event.title;
            const dateTime = event.dateTime;
            const reward = event.reward;
            const category = event.category;

            const onPressEventItem = () => {
              navigation.navigate('AboutEvent', {
                ...{ heroPhotoUri, logoUri, sponsor, title, dateTime, reward, category }
              })
            }

            return (
              <EventItem
                key={index}
                heroPhotoUri="https://reactjs.org/logo-og.png" /* learn.bgImageUri */
                sponsor={event.sponsor}
                title={event.title}
                dateTime={event.dateTime}
                reward={event.reward}
                category={event.category}
                onPress={onPressEventItem}
              />
            )
          })}

        {activeOpportunity === OPPORTUNITIES.REWARDS &&
          rewards.map((reward, index) => {
            const heroPhotoUri = "https://reactjs.org/logo-og.png" /* learn.bgImageUri */
            const logoUri = "https://reactjs.org/logo-og.png"
            const title = reward.title
            const wealthAmount = reward.wealthAmount
            const description = reward.description || ""

            const onPressRewardItem = () => {
              navigation.navigate('Redeem', {
                ...{ heroPhotoUri, logoUri, title, wealthAmount, description }
              })
            }

            return (
              <RewardItem
                key={index}
                {...{ heroPhotoUri, logoUri, title, wealthAmount, description }}
                onPress={() => onPressRewardItem()}
              />
            )
          }
          )}
      </ScrollView>
    </AppLayout>
  );
};

export default Opportunities;
