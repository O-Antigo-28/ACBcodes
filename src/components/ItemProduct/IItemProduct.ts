import { Measure } from "../../Measure"

export interface IItemProduct extends React.LiHTMLAttributes<HTMLLIElement>{
    barcode: string, 
    name: string, 
    measure: Measure
  }