import List from "../List"
import Item from "../Item"
import { IItemProduct } from "./IItemProduct"
const ItemProduct : React.FC<IItemProduct> = ({barcode, name, measure}) => { 
    return(
        <Item className="ItemProduct">
            
            <List className="List HorizontalList">
                <Item>{barcode}</Item>
                <Item>{name}</Item>
                <Item>{measure}</Item>
            </List>
        
        </Item>
    )
}
export default ItemProduct