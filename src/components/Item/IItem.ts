import { ReactNode } from "react"
export interface IItem extends React.LiHTMLAttributes<HTMLLIElement>{
    children: ReactNode
  }