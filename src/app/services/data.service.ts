import { Injectable, EventEmitter } from '@angular/core';

import { Page } from '../modelGet/page.model';
import { Job } from '../modelGet/job.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { catchError } from 'rxjs/operators';
import { throwError} from 'rxjs';

// import environment variables
import { environment } from './../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class DataService {
  jobSelected = new EventEmitter<Job>();
  jobs: Job[] = [];

  constructor(private http: HttpClient) { }

  // Fetch all jobs from server
  getData() {
    return this.http.
      get<Page<Job>>(environment.wacodisAPI )
      .pipe(
        catchError(this.handleError)); // http://localhost:8080/jobDefinitions
  }

  // Post a job
  storeData(jobToPost: any) {
    const job = jobToPost;
    return this.http.
      post(environment.wacodisAPI, job)
      .pipe(
        catchError(this.handleError));
  }

  // Delete selected job
  deleteData(id: string) {
    return this.http.
      delete(environment.wacodisAPI + `/${id}`);
  }

  // Handle error
  handleError(error: HttpErrorResponse) {
    console.log(error.status);
    return throwError(error);
  }

 // get new page of jobs
  getPage(event: number) {
    return this.http.
    get<Page<Job>>(environment.wacodisAPI + `?page=${event}`);
  }
}

