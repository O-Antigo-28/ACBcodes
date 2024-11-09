import {ReactNode} from 'react'

export interface ICopyTextButton extends React.ButtonHTMLAttributes<HTMLButtonElement>{ 
    children: ReactNode
    textToCopy: string
}