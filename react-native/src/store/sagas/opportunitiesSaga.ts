/* Redux saga class
 * opportunities - learns, events, rewards
 */
import {call, put, select, takeLatest} from 'redux-saga/effects';
import {API, graphqlOperation} from 'aws-amplify';
import {GraphQLResult} from '@aws-amplify/api';

import * as learnsActions from 'src/store/actions/learnsActions';
import * as eventsActions from 'src/store/actions/eventsActions';
import * as rewardsActions from 'src/store/actions/rewardsActions';
import * as learnStatusesActions from 'src/store/actions/learnStatusesActions';
import {
  ListLearns_customQuery,
  Learn,
  Event,
  ListEventsQuery,
  ListRewardsQuery,
  Reward,
  ListLearnStatusesQuery,
  LearnStatus
} from 'src/types/API';
import * as types from '../actions/types';
import { listLearns_custom } from 'src/graphql/queries_custom';
import { listEvents, listLearnStatuses, listRewards } from 'src/graphql/queries';

// const getLearnsState = (state: RootState) => state.learnsReducer;
// const getEventsState = (state: RootState) => state.eventsReducer;
// const getRewardsState = (state: RootState) => state.rewardsReducer;
// const getLearnStatusState = (state: RootState) => state.learnStatusReducer;
// const getLearnStatusesState = (state: RootState) => state.learnStatusesReducer;

export function* loadLearns() {
  try {
    const response = (yield API.graphql(
      graphqlOperation(listLearns_custom),
    )) as GraphQLResult<ListLearns_customQuery>;

    yield put(learnsActions.updateLearns(response.data?.listLearns?.items as Learn[]))
  } catch (error) {
    console.log('Error attempting to load learns:', error);
  }
}

export function* loadEvents() {
  // const eventsState = (yield select(getEventsState)) as IEvents;
  
  try {
    const response = (yield API.graphql(
      graphqlOperation(listEvents),
    )) as GraphQLResult<ListEventsQuery>;

    yield put(eventsActions.updateEvents(response.data?.listEvents?.items as Event[]))
  } catch (error) {
    console.log('Error attempting to load events:', error);
  }
}

export function* loadRewards() {
  
  try {
    const response = (yield API.graphql(
      graphqlOperation(listRewards),
    )) as GraphQLResult<ListRewardsQuery>;
    
    yield put(rewardsActions.updateRewards(response.data?.listRewards?.items as Reward[]))
  } catch (error) {
    console.log('Error attempting to load rewards:', error);
  }
}

export function* loadLearnStatuses() {
  
  try {
    const response = (yield API.graphql(
      graphqlOperation(listLearnStatuses),
    )) as GraphQLResult<ListLearnStatusesQuery>;

    yield put(learnStatusesActions.updateLearnStatuses(response.data?.listLearnStatuses?.items as LearnStatus[]))
  } catch (error) {
    console.log('Error attempting to load learnStatuses:', error);
  }
}

export default function* opportunitiesSaga() {
  yield takeLatest(types.LOAD_LEARNS, loadLearns);
  yield takeLatest(types.LOAD_EVENTS, loadEvents);
  yield takeLatest(types.LOAD_REWARDS, loadRewards);
  yield takeLatest(types.LOAD_LEARN_STATUSES, loadLearnStatuses);
}
