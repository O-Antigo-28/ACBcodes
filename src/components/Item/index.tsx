import { IItem } from "./IItem"
import "./Item.css"

const Item: React.FC<IItem> = ({children, ...props}) =>{
    return(
      <li className="Item" {...props}>
        {children}
      </li>
    )
  }

  export default Item