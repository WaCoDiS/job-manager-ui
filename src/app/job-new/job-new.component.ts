import { JobPost } from './../modelPost/JobPost.model';
import { Event } from './../modelGet/event.model';
import { DataService } from './../services/data.service';
// Angular Modules
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


// Data models
import { Job } from './../modelGet/job.model';
import { ProcessMapping } from './../processMapping.model';

// Services


@Component({
  selector: 'app-job-new',
  templateUrl: './job-new.component.html',
  styleUrls: ['./job-new.component.css']
})
export class JobNewComponent implements OnInit {
  // Get access to form object of template
  @ViewChild('f', { static: false }) signupForm: NgForm;

  // processMappings: Instance is set in ngOnInit
  processMappings: ProcessMapping[] = [];

  // selectedProcessingTool is set in the for loop in the template
  selectedProcessingTool = '';
  relevantProductName = this.valueProductName(this.processMappings, this.selectedProcessingTool);
  selectedSatellite = '';
  jobForPost: JobPost;

  // For Input from Copernicus Component
  receivedSatellite: Event;
  receivedCloudCoverage: Event;

  // For error messages
  error: null;
  errorStatus: null;

  // for modal
  closeResult = '';


  constructor(
    private router: Router,
    private dataService: DataService,
    private http: HttpClient,
    private modalService: NgbModal) { }


  ngOnInit() {
    // Get instance of the process mappings json file
    this.http.get<ProcessMapping[]>('assets/processMappings.json')
      .subscribe(data => {
        this.processMappings = data;
      });
  }

  // Modal
  public open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  // receives value of the satellite input from child componet and sets the value to be displayed in view
  // TODO There may be a better method to be able to display the value
  setSatellite(event: Event) {
    const event1 = event;
    this.receivedSatellite = event1;
  }

  setCloudCoverage(event: Event) {
    const event1 = event;
    this.receivedCloudCoverage = event1;
  }


  // Set the new job to be send
  setJob() {
    // Get value for post request key 'productCollcetion' by applying custom method 'valueProductCollection'
    const relevantProductCollection = this.valueProductCollection(this.processMappings, this.selectedProcessingTool);
    // Create list of input subsets as value for post request key 'inputs' by applying custom method 'valueInputs'
    const inputArray = this.valueInputs(this.signupForm);
    // Set job object which should be sent to server with post request
    this.jobForPost = {
      areaOfInterest: {
        extent: this.signupForm.value.extent.split(',').map(Number)
      },
      created: '',
      description: this.signupForm.value.jobDescription,
      execution: {
        event: {
          eventType: 'SingleJobExecutionEvent'
        },
        pattern: this.signupForm.value.pattern,

      },
      id: '',
      inputs: inputArray,
      name: this.signupForm.value.jobName,
      processingTool: this.signupForm.value.processingTool,
      productCollection: relevantProductCollection,
      retrySettings: {
        maxRetries: 0,
        retryDelay_Millies: 0
      },
      temporalCoverage: {
        duration: this.signupForm.value.duration,
      },
      useCase: this.signupForm.value.useCase,
    };
    console.log(this.jobForPost);
  }


  // Post the defined job object; post method is defined in the data service
  submitThisJob() {
    this.dataService.storeData(this.jobForPost)
      .subscribe(responseData => {
        console.log(responseData);
        this.router.navigate(['/']);
      },
        error => {
          this.error = error;
          this.errorStatus = error.status;
          console.log(error);
        });
  }




  // -------------------------------------------- Custom Methods-------------------------------------------

  /**
   * The method 'valueInputs' ...
   * @param signupForm is an instance of the template form object
   * @returns The method returns an array of all data subsets required for the relevant process
   */
  private valueInputs(signupForm: NgForm) {
    const inputArray = [];
    for (const key in signupForm.value) {
      if (signupForm.value.hasOwnProperty(key)) {
        const element = signupForm.value[key];
        if (key.startsWith('input_')) {
          inputArray.push(element);
        }
      }
    }
    // console.log(inputArray);
    return inputArray;
  }


  /**
   * The method 'valueProductCollection()' finds the value for the post request key 'productCollection' in the process mapping
   * @param processMappings is an instance of an observable of a JSON file holding mappings of the available job processes
   * @param selectedProcessingTool is the processingTool selected by the user; the value comes from the template form object
   * @returns Method returns a string, which is the value for the request key 'productCollection'
   */
  private valueProductCollection(processMappings: ProcessMapping[], selectedProcessingTool: string) {
    let relevantProductCollection = '';
    for (const item of processMappings) {
      if (item.processId === selectedProcessingTool) {
        relevantProductCollection = item.productCollection[0];
      }
    }
    return relevantProductCollection;
  }


  /**
   * The method 'valueProductName()' finds the value for the post request key 'productCollection' in the process mapping
   * @param processMappings is an instance of an observable of a JSON file holding mappings of the available job processes
   * @param selectedProcessingTool is the processingTool selected by the user; the value comes from the template form object
   * @returns Method returns a string, which is the value for the request key 'productCollection'
   */
  private valueProductName(processMappings: ProcessMapping[], selectedProcessingTool: string) {
    let relevantProductName = '';
    for (const item of processMappings) {
      if (item.processId === selectedProcessingTool) {
        relevantProductName = item.name;
      }
    }
    return relevantProductName;
  }


}

