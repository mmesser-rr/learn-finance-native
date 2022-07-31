import React, {useEffect, useState} from 'react';
import {Image, View} from 'react-native';
import {useDispatch} from 'react-redux';

import AppLayout from 'src/components/layout/AppLayout';
import {Text} from 'src/components/common/Texts';
import WealthIcon from 'src/assets/icons/wealth.png';

import styles from './styles';
import {API, graphqlOperation} from 'aws-amplify';
import {listLearns_custom} from 'src/graphql/queries_custom';
import {
  Event,
  Learn,
  ListEventsQuery,
  ListLearns_customQuery,
  ListRewardsQuery,
  Reward,
} from 'src/types/API';
import {GraphQLResult} from '@aws-amplify/api';
import {ScrollView, TouchableWithoutFeedback} from 'react-native-gesture-handler';
import LearnItem from './Learn';
import {listEvents, listRewards} from 'src/graphql/queries';
import EventItem from './Event';
import RewardItem from './Reward';

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

const OpportunityTab = ({label, activeOpportunity, setActiveOpportunity}) => {
  function getBorderColorStyle(selectedOpportunity: string) {
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

const Opportunities: React.FC = () => {
  const dispatch = useDispatch();
  const [activeOpportunity, setActiveOpportunity] = useState(
    OPPORTUNITIES.LEARN,
  );
  const [learns, setLearns] = useState<Learn[]>([]);
  const [events, setEvents] = useState<Event[]>([]);
  const [rewards, setRewards] = useState<Reward[]>([]);

  async function fetchLearns() {
    const response = (await API.graphql(
      graphqlOperation(listLearns_custom),
    )) as GraphQLResult<ListLearns_customQuery>;
    setLearns(response.data?.listLearns?.items as Learn[]);
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

  useEffect(() => {
    // fetch Learn, Events and Rewards data
    fetchLearns();
    fetchEvents();
    fetchRewards();
  }, []);

  useEffect(() => {
    console.log('learns', learns);
  }, [learns]);

  useEffect(() => {
    console.log('events', events);
  }, [events]);

  useEffect(() => {
    console.log('rewards', rewards);
  }, [rewards]);

  return (
    <AppLayout containerStyle={styles.container} viewStyle={styles.viewWrapper} scrollEnabled={false}>
      <WealthBalanceEle />
      <Text type="Headline/Large" style={styles.headline}>
        Opportunities
      </Text>
      <View style={styles.tabGroup}>
        <OpportunityTab
          {...{
            label: OPPORTUNITIES.LEARN,
            activeOpportunity,
            setActiveOpportunity,
          }}
        />
        <OpportunityTab
          {...{
            label: OPPORTUNITIES.EVENTS,
            activeOpportunity,
            setActiveOpportunity,
          }}
        />
        <OpportunityTab
          {...{
            label: OPPORTUNITIES.REWARDS,
            activeOpportunity,
            setActiveOpportunity,
          }}
        />
      </View>
      <ScrollView>
        {activeOpportunity === OPPORTUNITIES.LEARN &&
          learns.map((learn, index) => (
            <LearnItem
              key={index}
              backgroundImage="https://reactjs.org/logo-og.png" /* learn.bgImageUri */
              sponsor={learn.sponsor}
              title={learn.title}
              level={learn.level}
              rewards={learn.reward}
              depositsCount={learn.deposits?.length || 0}
            />
          ))}

        {activeOpportunity === OPPORTUNITIES.EVENTS &&
          events.map((event, index) => (
            <EventItem
              key={index}
              heroPhotoUri="https://reactjs.org/logo-og.png" /* learn.bgImageUri */
              sponsor={event.sponsor}
              title={event.title}
              dateTime={event.dateTime}
              reward={event.reward} 
              category={event.category} 
            />
          ))}

        {activeOpportunity === OPPORTUNITIES.REWARDS &&
          rewards.map((reward, index) => (
            <RewardItem
              key={index}
              heroPhotoUri="https://reactjs.org/logo-og.png" /* learn.bgImageUri */
              title={reward.title}
              logoUri="https://reactjs.org/logo-og.png"
              wealthAmount={reward.wealthAmount}
              description={reward.description || ""}
            />
          ))}
      </ScrollView>
    </AppLayout>
  );
};

export default Opportunities;
