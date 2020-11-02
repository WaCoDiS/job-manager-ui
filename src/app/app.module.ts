import { AppRoutingModule } from './app-routing.module';


import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { JobListComponent } from './jobs/job-list/job-list.component';
import { JobDetailsComponent } from './jobs/job-details/job-details.component';
import { JobNewComponent } from './job-new/job-new.component';
import { HeaderComponent } from './header/header.component';
import { JobsComponent } from './jobs/jobs.component';
import { JobListItemComponent } from './jobs/job-list/job-list-item/job-list-item.component';
import { DataService } from './services/data.service';
import { LeafletMapComponent } from './job-new/leaflet-map/leaflet-map.component';
import { CopernicusSubsetComponent } from './job-new/copernicus-subset/copernicus-subset.component';
import { StaticSubsetComponent } from './job-new/static-subset/static-subset.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// for setting locales
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';



registerLocaleData(localeDe);

@NgModule({
  declarations: [
    AppComponent,
    JobListComponent,
    JobDetailsComponent,
    JobNewComponent,
    JobListItemComponent,
    HeaderComponent,
    JobsComponent,
    LeafletMapComponent,
    CopernicusSubsetComponent,
    StaticSubsetComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,

  ],
  providers: [DataService, { provide: LOCALE_ID, useValue: 'de-At' } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
