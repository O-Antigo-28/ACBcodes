import { IList } from "./IList"
const List: React.FC<IList> = ({children}) => {
    return (
        <ul className="List">
        {children}
        </ul>
    )
}

export default List