

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { JobListComponent } from './jobs/job-list/job-list.component';
import { JobDetailsComponent } from './jobs/job-details/job-details.component';
import { JobEditComponent } from './jobs/job-edit/job-edit.component';
import { JobNewComponent } from './job-new/job-new.component';
import { HeaderComponent } from './header/header.component';
import { JobsComponent } from './jobs/jobs.component';
import { JobListItemComponent } from './jobs/job-list/job-list-item/job-list-item.component';
import { DataService } from './data.service';

const appRoutes: Routes = [
  {path: '', component: JobsComponent},
  {path: 'newJob', component: JobNewComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    JobListComponent,
    JobDetailsComponent,
    JobEditComponent,
    JobNewComponent,
    JobListItemComponent,
    HeaderComponent,
    JobsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
