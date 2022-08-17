import { Event } from "src/types/API";

export interface ILoadEventsRequestState {
  type: string;
}

export interface IUpdateEventsRequestState {
  type: string;
  events: Event[];
}

export interface IUpdateEventRequestState {
  id: string;
  registered: boolean;
}