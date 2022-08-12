/* Events Reducer
 * handles events data in the app
 */
import createReducer from 'src/lib/createReducer';
import * as types from 'src/store/actions/types';

import { IEvents } from 'src/models/reducers/events';
import { IUpdateEventsRequestState } from 'src/models/actions/events';

const initialState: IEvents = {
  events: []
};

export const eventsReducer = createReducer(initialState, {
  [types.UPDATE_EVENTS](state: IEvents, action: IUpdateEventsRequestState) {
    return {
      ...state,
      events: action.events,
    };
  }
});
