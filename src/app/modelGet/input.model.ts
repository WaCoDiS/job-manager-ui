import { TemporalCoverage } from './temporalCoverage.model';


// Single interface with optional attributes.
export interface Input {

  // both definitions contain id and sourceType
  identifier: string;
  sourceType: string;

  // Both definitions contain an optional attribute 'temporal coverage'
  temporalCoverage?: TemporalCoverage;

  // StaticSubsetDefinition
  dataType?: string;
  value?: string;

  // CopernicusSubsetDefinition
  satellite?: string;
  productType?: string;
  //  if Sentinel 1
  sensorMode?: string;
  // if Sentinel 2
  maximumCloudCoverage?: number;

}



// Multiple interfaces with pipe OPERATOR (variants, union types, ...), i.e. | in job.model
/*
export interface Input {
  identifier: string;
  sourceType: string;
}

export interface StaticSubsetDefinition {
  dataType: string;
  value: string;
}

export interface CopernicusSubsetDefinition {
  maximumCloudCoverage: number;
  satellite: string;
}
 */


// Class inheritance
/*
export class Input {
  identifier: string;
  sourceType: string;
}

export class StaticSubsetDefinition extends Input {
  dataType: string;
  value: string;
}

export class CopernicusSubsetDefinition extends Input {
  maximumCloudCoverage: number;
  satellite: string;
}
*/
