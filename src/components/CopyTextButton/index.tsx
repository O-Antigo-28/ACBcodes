import React, {useState, useEffect} from "react"
import { ICopyTextButton } from "./ICopyTextButton"
import { gettingPromiseOfPermissionStateClipBoard } from "./gettingPromiseOfPermissionClipBoard";
import { BsCopy } from "react-icons/bs";
import { writeOnClipBoard } from "../../writeOnClipBoard";
import "./copytextbutton.css"

const CopyTextButton: React.FC<ICopyTextButton> = ({children, textToCopy,...props}) => { 
    const [hasPermissionToWriteInClipboard, setHasPermissionToWriteInClipboard] = useState(false);

    useEffect(() => { 
        gettingPromiseOfPermissionStateClipBoard()
        .then(() => {
            setHasPermissionToWriteInClipboard(true)
        }).catch(() => {
            console.error("não foi possivel pedir permissão")
        })
        return () => {
            setHasPermissionToWriteInClipboard(false)
        }

    }, [])

    function handleFocus(){
        if(hasPermissionToWriteInClipboard){
            try{
                writeOnClipBoard(textToCopy)
            } catch(e){
                console.error(e)
            }
        }
    }

    let buttonClassName = hasPermissionToWriteInClipboard ? "copyTextButton": "copyTextButton-disabled"

    return (
        <button className={buttonClassName} onFocus={handleFocus} disabled={!hasPermissionToWriteInClipboard} type="button" {...props}>
            {children}
            {hasPermissionToWriteInClipboard && <BsCopy className="copyTextButtonIcon"/> }
        </button>
    )
}

export default CopyTextButton