import Item from "../Item"
import { IItemHeader } from "./IItemHeader"
 const ItemHeader: React.FC<IItemHeader> = ({children, subtitle}) => { 
    return (
  
       <Item className="ItemHeader">
        {children}
        {subtitle && <p>{subtitle}</p>}
       </Item>
       
    )
  }
  export default ItemHeader