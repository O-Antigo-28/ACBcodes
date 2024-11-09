import React, { ReactNode } from "react"
import { Product } from "./Product"

import List from "./components/List"
import ItemProduct from "./components/ItemProduct"



const products: Array<Product> = [
  new Product("25", "Abacate", 'KG'),
  new Product("8", "Abacaxi", 'UN'),
  new Product("28", "Acerola", 'PCT'),
  new Product("7", "Alface", 'UN'),
  new Product("9", "Alho", "KG"), 
  new Product("42", "Ameixa", 'KG'),
  new Product("21", "Banana", 'UN'),
  new Product("19", "Batata Inglesa", "KG"),
  new Product("20", "Batata Doce", "KG"),
  new Product("27", "Beterraba", "KG"),
  new Product("602", "Caju bandeja", 'KG'),
  new Product("15", "Cebola Branca", "KG"), 
  new Product("16", "Cebola Roxa", "KG"),
  new Product("18", "Cenoura", "KG"), 
  new Product("3", "Cheiro Verde", 'UN'),
  new Product("10", "Chuchu", "KG"),
  new Product("36", "Couve Flor", "KG"),
  new Product("30", "Espiga de Milho", "UN"),
  new Product("17", "Goiaba", 'KG'),
  new Product("22", "Jerimum", 'KG'), 
  new Product("44", "Kiabo", "KG"),
  new Product("4", "Laranja", 'KG'),
  new Product("39", "Limão", 'KG'),
  new Product("26", "Macaxeira", "KG"),
  new Product("6", "Maçã Grange", "UN"),
  new Product("5", "Maçã Pequena", 'UN'),
  new Product("35", "Maçã Verde", 'UN'),
  new Product("24", "Mamão", 'KG'),
  new Product("2", "Manga", 'KG'),
  new Product("14", "Maracujá", 'KG'),
  new Product("61", "Maxixe", "KG"),
  new Product("13", "Melancia", 'KG'),
  new Product("33", "Melão", 'KG'),
  new Product("", "Morango", 'KG'),
  new Product("43", "Pepino", "KG"),
  new Product("38", "Pêra", 'KG'),
  new Product("11", "Pimentão", "KG"),
  new Product("12", "Pimentinha de Cheiro", "KG"),
  new Product("31", "Pimenta e Alho", "UN"),
  new Product("29", "Repolho", "KG"),
  new Product("49", "Sapoti", 'KG'),
  new Product("23", "Tomate", "KG"),
  new Product("32", "Tangerina", "KG") ,
  new Product("40", "Uva", 'KG'),
  new Product("41", "Uva Roxa", "PCT")

]


function App() {

  return (
    <List >
      {products.map((product) => { 
        return <ItemProduct {...product}></ItemProduct>
      })}
    </List>
  )
}

export default App
