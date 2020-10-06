import { Job } from './job.model';

export interface Page<T> {
  page: number; // page number
  size: number; // jobs per page = 10
  total: number; // total number of jobs available in DB
  data: Job[]; // T[];
}
