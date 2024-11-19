import List from "../List"
import Item from "../Item"
import { IItemProduct } from "./IItemProduct"
import "./ItemProduct.css"
const ItemProduct : React.FC<IItemProduct> = ({barcode, name, measure}) => { 
    return(
        <Item className="ItemProduct">
        
            <List style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr"}}>
                <Item>{name}</Item>
                <Item style={{fontWeight: 500}}>{barcode}</Item>
                <Item>{measure}</Item>
            </List>
        
        </Item>
    )
}
export default ItemProduct