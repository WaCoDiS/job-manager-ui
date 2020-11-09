import { TemporalCoverage } from './../../modelGet/temporalCoverage.model';
import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { ProcessMapping } from './../../processMapping.model';
import { HttpClient } from '@angular/common/http';
// import environment variables
import { environment } from './../../../environments/environment';

@Component({
  selector: 'app-copernicus-subset',
  templateUrl: './copernicus-subset.component.html',
  styleUrls: ['./copernicus-subset.component.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CopernicusSubsetComponent implements OnInit {
  // index of the process input,
  // so when a process has multiple inputobjects, the index gives information about which of the inputs you referring to
  @ViewChild('f', { static: false }) signupForm: NgForm;

  @Input() index: number;
  @Input() defaultProcessID: string;
  @Input() selectedTool: string;

  @Output() selectedSatelliteEmit: EventEmitter<string> = new EventEmitter();
  @Output() selectedCloudCoverageEmit: EventEmitter<number> = new EventEmitter();

  selectedSatellite = '';

  sourceType = 'CopernicusSubsetDefinition';

  cloudCoverage = 0;

  productType: string;

  // processMappings: empty instance for processMappings which later holds the processMappings.json
  processMappings: ProcessMapping[] = [];



  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    // Get instance of the process mappings json file
    this.http.get<ProcessMapping[]>(environment.processMappingsPath)
      .subscribe(data => {
        this.processMappings = data;
      });
  }



  // updateSelectedSatellite(event: any) {
  //   // console.log(event);
  //   this.selectedSatelliteEmit.emit(event);
  // }

  // updateCloudCoverage(event: any) {
  //   // console.log(event);
  //   this.selectedCloudCoverageEmit.emit(event);
  // }


}
