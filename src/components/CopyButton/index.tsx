import React, {ReactNode} from "react"

interface ICopyButton extends React.ButtonHTMLAttributes<HTMLButtonElement>{ 
    children: ReactNode
}
const CopyButton: React.FC<ICopyButton> = ({children, ...props}) => { 
    return (
        <button {...props}>
            {children}
        </button>
    )
}

export default CopyButton