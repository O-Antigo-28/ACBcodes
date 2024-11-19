import { IAlphabeticList } from "./IAlphabeticList"
import List from "../List";
const AlphabeticList = <T,>({items, orderingRule, renderItem}: IAlphabeticList<T>) =>{
    const orderItems = [...items].sort(orderingRule);
  
    return (
      <List style={{display:"flex", flexDirection: "column"}}>
          {orderItems.map((item) => {return renderItem(item)})}
      </List>
    );
}

export default AlphabeticList