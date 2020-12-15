export interface ProcessMapping {
  processId: string;
    name: string;
    productCollection: [
      string
    ];
    inputs: [
      {
        inputType: string,
        processInputId: string,
        label: string,
        hint: string,
        parameters:{
          satellite:string,
          productType:string
        }
      }
    ];
}
