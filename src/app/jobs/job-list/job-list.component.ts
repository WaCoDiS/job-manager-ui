import { Page } from './../../modelGet/page.model';
import { Event } from './../../modelGet/event.model';
// import { Job } from './../../modelGet/job.model';
import { Job } from '../../modelGet/job.model';
import { DataService } from '../../services/data.service';
import { Component, OnInit, Output, Input } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';

// import environment variables
import { environment } from './../../../environments/environment';




@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
  jobs: Job[] = [];
  error: null;
  errorStatus: null;
  collectionSize: number;
  page: number;
  pages: number;

  constructor(private dataService: DataService, private http: HttpClient) { }


  ngOnInit() {

    // Fetches first page from server
    this.dataService.getData()
      .subscribe((jobs) => {
        // console.log(jobs);
        this.jobs = jobs.data.filter(job => job.status !== 'finished');
        this.page = jobs.page;
        this.pages = Math.ceil(jobs.total / 10);
        // console.log(this.jobs);
        // console.log('page:', this.page);
        // console.log('pages:', this.pages);
        console.log('ok, fetched all jobs except for jobs with status "finished"');
      }, error => {
        this.error = error;
        this.errorStatus = error.status;
        console.log(error);
      });
  }

  /*   Retrieves id from the list-item after clicked on delete button,
    deletes the job with the relevant id and requests the jobs from the api again */
  onDelete(event: string) {
    this.dataService.deleteData(event)
      .subscribe(() => {
        console.log('id of deleted job: ' + event);
        this.dataService.getData()
          .subscribe((jobs) => {
            this.jobs = jobs.data.filter(job => job.status !== 'finished');
            this.pages = Math.ceil(jobs.total / 10);
          });
      });
  }

  // get the data from a certain page, when the pagination widget is used
  logPage(event: number) {
    // console.log(event);
    this.dataService.getPage(event)
    .subscribe((jobs) => {
      // console.log('new page:' + event);
      this.jobs = jobs.data.filter(job => job.status !== 'finished');
    }, error => {
      this.error = error;
      this.errorStatus = error.status;
      console.log(error);
    });


  }

}
