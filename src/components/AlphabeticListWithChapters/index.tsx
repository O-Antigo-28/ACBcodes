import React,{ useRef } from "react"
import ItemHeader from "../ItemHeader"
import AlphabeticList from "../AlphabeticList"
import { IAlphabeticListWithChapters } from "./IAlphabeticListWithChapters"

const AlphabeticListWithChapters = <T,>({ property, ...props}:IAlphabeticListWithChapters<T>)  => {
    const startsChar = useRef("")
  
    function presentationItemAndChapters(item: T): React.ReactNode  {
      const currentStartChar = String(item[property]).charAt(0);
      const changeStartChar = currentStartChar !== startsChar.current
      if(changeStartChar){ 
        startsChar.current = currentStartChar
      }
      return (
      <>
        {changeStartChar && <ItemHeader>{startsChar.current}</ItemHeader>}
        {props.renderItem(item)}
      </>
      )
    }
    return(<AlphabeticList {...props } renderItem={presentationItemAndChapters} />)
  }

export default AlphabeticListWithChapters
  