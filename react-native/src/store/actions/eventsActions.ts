import { ILoadEventsRequestState, IUpdateEventRequestState, IUpdateEventsRequestState } from 'src/models/actions/events';
import { Event } from 'src/types/API';
import * as types from './types';

export function loadEvents(): ILoadEventsRequestState {
  return {
    type: types.LOAD_EVENTS
  };
}

export function updateEvents(events: Event[]): IUpdateEventsRequestState {
  return {
    type: types.UPDATE_EVENTS,
    events
  };
}

export function updateEvent({id, registered}: IUpdateEventRequestState) {
  return {
    type: types.UPDATE_EVENT,
    id,
    registered
  }
}