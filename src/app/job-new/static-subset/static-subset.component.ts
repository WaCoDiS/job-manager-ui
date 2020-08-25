import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { ProcessMapping } from './../../processMapping.model';
import { HttpClient } from '@angular/common/http';
// import environment variables
import { environment } from './../../../environments/environment';

@Component({
  selector: 'app-static-subset',
  templateUrl: './static-subset.component.html',
  styleUrls: ['./static-subset.component.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class StaticSubsetComponent implements OnInit {
  // index of the process input,
  // so when a process has e.g. three different inputobjects, the index gives information about which of the input you refer to
  @Input() index: number;
  @Input() defaultProcessID: string;
  @Input() selectedTool: string;

  sourceType = 'StaticSubsetDefinition';
  dataType = 'text';

  // processMappings: Instance is set in ngOnInit
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

}
