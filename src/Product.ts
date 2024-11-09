import { Measure } from "./Measure";
export class Product {
    constructor(
      public readonly barcode: string,
      public readonly name: string, 
      public readonly measure: Measure
    ){}
  
    
  }