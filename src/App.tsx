
import ItemProduct from "./components/ItemProduct"
import CopyTextButton from "./components/CopyTextButton"
import { products } from "./products"
import AlphabeticListWithChapters from "./components/AlphabeticListWithChapters"
import "./index.css"




function App() {

  return (
    <AlphabeticListWithChapters items={products} property="name" orderingRule={(a, b) => {
      const nameA = a.name
      const nameB = b.name
    
      if(nameA < nameB)
        return -1
      else if (nameA > nameB)
        return 1

      return 0;
    } } renderItem={(item) => {
      return (<CopyTextButton key={item.barcode} textToCopy={item.barcode} >
        <ItemProduct {...item}/>
      </CopyTextButton>)
    }} />
  )
}

export default App
