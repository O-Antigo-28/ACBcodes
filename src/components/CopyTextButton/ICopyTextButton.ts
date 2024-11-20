import React, {ReactNode} from 'react'

export interface ICopyTextButton extends React.ButtonHTMLAttributes<HTMLButtonElement>{ 
    children: ReactNode
    textToCopy: string
    refCopyTextButton?: React.RefObject<HTMLButtonElement>
}