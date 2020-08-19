import { Event } from './../../modelGet/event.model';
// import { Job } from './../../modelGet/job.model';
import { Job } from '../../modelGet/job.model';
import { DataService } from '../../services/data.service';
import { Component, OnInit, Output, Input } from '@angular/core';



@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
  jobs: Job[] = [];
  error: null;
  errorStatus: null;



  constructor(private dataService: DataService) { }

  ngOnInit() {

    // Fetch all Jobs from server
    this.dataService.getData()
      .subscribe((jobs) => {
        this.jobs = jobs.data.filter(job => job.status !== 'finished');
        // console.log(this.jobs);
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
          });
      });
  }

}
