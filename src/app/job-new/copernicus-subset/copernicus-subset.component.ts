import { TemporalCoverage } from './../../modelGet/temporalCoverage.model';
import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { ProcessMapping } from './../../processMapping.model';
import { HttpClient } from '@angular/common/http';
// import environment variables
import { environment } from './../../../environments/environment';
import {ElementRef} from '@angular/core';

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
  // Reference firstNameInput variable inside Component



/*   get value1() {
    return this.defaultSatellite.nativeElement.innerHTML;
  }

  get value2() {
    return this.defaultProductType.nativeElement.innerHTML;
  } */


 // ngAfterViewInit() {
   // this.selectedSatellite = this.defaultSatellite.nativeElement.innerHTML;
   // this.productType = this.defaultProductType.nativeElement.innerHTML;

/*     this.selectedSatellite = this.value1;
    this.productType = this.value2; */
    // console.log('value of p: ', this.value) // value of p: Dynamic value
  //}

  // @ViewChild('defaultValueSatellite', { static: false }) defaultSatellite: ElementRef<HTMLElement>;
  // @ViewChild('defaultValueProductType', { static: false }) defaultProductType: ElementRef<HTMLElement>;

  @Input() index: number;
  @Input() defaultProcessID: string;
  @Input() selectedTool: string;

  // set default values from processMappings.json
  @Input() defaultSat:string;
  @Input() defaultProdType:string;

  @Output() selectedSatelliteEmit: EventEmitter<string> = new EventEmitter();
  @Output() selectedCloudCoverageEmit: EventEmitter<number> = new EventEmitter();

  selectedSatellite:string;
  productType:string;


  sourceType = 'CopernicusSubsetDefinition';
  cloudCoverage = 0;

  // processMappings: empty instance for processMappings which later holds the processMappings.json
  processMappings: ProcessMapping[] = [];

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    // Get instance of the process mappings json file
    this.http.get<ProcessMapping[]>(environment.processMappingsPath)
      .subscribe(data => {
        this.processMappings = data;
      });
    this.selectedSatellite = this.defaultSat;
    this.productType = this.defaultProdType;


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
