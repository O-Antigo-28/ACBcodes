import { IItem } from "./IItem"

const Item: React.FC<IItem> = ({children, ...props}) =>{
    return(
      <li className="Item" {...props}>
        {children}
      </li>
    )
  }

  export default Item