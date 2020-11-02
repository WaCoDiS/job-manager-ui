import { Event } from './event.model';

export interface Execution {
  event?: Event;
  pattern?: string;
  startAt: string;
}
