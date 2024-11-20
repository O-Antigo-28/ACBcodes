import React, {useState, useEffect} from "react"
import { ICopyTextButton } from "./ICopyTextButton"
import { gettingPromiseOfPermissionStateClipBoard } from "./gettingPromiseOfPermissionClipBoard";
import { BsCopy } from "react-icons/bs";
import "./copytextbutton.css"

const CopyTextButton: React.FC<ICopyTextButton> = ({children, textToCopy,...props}) => { 
    const [hasPermission, setHasPermission] = useState(false);

    useEffect(() => { 
        gettingPromiseOfPermissionStateClipBoard()
        .then(() => {
            setHasPermission(true)
        }).catch(() => {
            console.error("não foi possivel pedir permissão")
        })
    }, [])

    function handleCopy(){
        if(hasPermission){
            navigator.clipboard.writeText(textToCopy)
        }
    }
    let buttonClassName = hasPermission ? "copyTextButton": "copyTextButton-disabled"


    return (
        <button className={buttonClassName} onFocus={handleCopy} disabled={!hasPermission} type="button" {...props}>
            {children}
            {hasPermission && <BsCopy className="copyTextButtonIcon"/> }
        </button>
    )
}

export default CopyTextButton