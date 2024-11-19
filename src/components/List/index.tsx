import { IList } from "./IList"
import "./list.css"
const List: React.FC<IList> = ({children, ...props}) => {
    return (
        <ul className="List" {...props}>
            {children}
        </ul>
    )
}

export default List