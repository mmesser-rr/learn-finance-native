import React, { useEffect, useState } from 'react';
import { Image, View } from 'react-native';
import { useSelector } from 'react-redux';
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { API, graphqlOperation } from 'aws-amplify';
import { GraphQLResult } from '@aws-amplify/api';

import LearnItem from 'src/screens/Opportunities/Learn';
import EventItem from 'src/screens/Opportunities/Event';
import RewardItem from 'src/screens/Opportunities/Reward';

import AppLayout from 'src/components/layout/AppLayout';
import { Text } from 'src/components/common/Texts';
import {
  DeleteLearnStatusMutation,
  DeleteLearnStatusMutationVariables
} from 'src/types/API';
import WealthIcon from 'src/assets/icons/wealth.png';

import styles from './styles';
import AppColors from 'src/config/colors';
import { RootState } from 'src/store/root-state';
import { deleteLearnStatus } from 'src/graphql/mutations';
import { OpportunitiesProps } from 'src/types/opportunitiesRouterTypes';
import Button from 'src/components/common/Button';

const OPPORTUNITIES = {
  LEARN: 'Learn',
  REWARDS: 'Rewards',
  EVENTS: 'Events',
};

export const WealthBalanceEle = () => {
  const [wealthBalance, setWealthBalance] = useState(1000);

  return (
    <View style={styles.wealthBalance}>
      <Image source={WealthIcon} style={styles.wealthIcon} />
      <Text type="Body/Large" variant='white'>{wealthBalance}</Text>
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
  const { learnStatuses } = useSelector((state: RootState) => state.learnStatusesReducer)
  const { learns } = useSelector((state: RootState) => state.learnsReducer)
  const { events } = useSelector((state: RootState) => state.eventsReducer)
  const { rewards } = useSelector((state: RootState) => state.rewardsReducer)
  const [myKey, setMyKey] = useState(0)

  const [activeOpportunity, setActiveOpportunity] = useState(
    OPPORTUNITIES.LEARN,
  );

  const clearLearnStatus = () => {
    learnStatuses.map((o, i) => {
      const mutationInput: DeleteLearnStatusMutationVariables = {
        input: {
          id: o.id
        }
      }
      API.graphql(
        graphqlOperation(deleteLearnStatus, mutationInput),
      ) as GraphQLResult<DeleteLearnStatusMutation>;
    })
    console.log("Opportunities - cleared learnStatuses")
    setTimeout(() => setMyKey(Math.random()), 2000)
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      console.log("Opportunities -> focus")
      setMyKey(Math.random())
    });

    return unsubscribe;
  }, [navigation])

  return (
    <AppLayout containerStyle={styles.container} viewStyle={styles.viewWrapper} scrollEnabled={false}>
      <WealthBalanceEle />
      <Text type="Headline/Large" variant='white' style={styles.headline}>
        Opportunities
      </Text>
      <Button variant="transparent" onPress={clearLearnStatus}>
        <Text type="Body/Small">Clear LearnStatus</Text>
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
            />
          ))}

        {activeOpportunity === OPPORTUNITIES.EVENTS &&
          events.map((event, index) => {
            const heroPhotoUri = event.heroPhotoUri;
            const logoUri = event.logoUri;
            const tagline = event.tagline;
            const sponsor = event.sponsor;
            const title = event.title;
            const description = event.description;
            const dateTime = event.dateTime;
            const location = event.location;
            const reward = event.reward;
            const category = event.category;

            const onPressEventItem = () => {
              navigation.navigate('AboutEvent', {
                heroPhotoUri,
                logoUri,
                tagline,
                sponsor,
                title,
                description,
                dateTime,
                location,
                reward 
              })
            }

            return (
              <EventItem
                key={index}
                {...{ heroPhotoUri, sponsor, title, dateTime, reward, category }}
                onPress={onPressEventItem}
              />
            )
          })}

        {activeOpportunity === OPPORTUNITIES.REWARDS &&
          rewards.map((reward, index) => {
            const heroPhotoUri = reward.heroPhotoUri || ""
            const logoUri = reward.logoUri || ""
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
