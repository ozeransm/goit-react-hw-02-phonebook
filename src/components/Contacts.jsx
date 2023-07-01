import { ContactItem } from "./ContactItem"

export const Contacts = ({ data, formInpFilter })=>{
    
    return(
            <ul>
            {
                data.map((el)=><ContactItem key={el.id} name={el.name} number={el.number} filter={formInpFilter}/>)
            }
            </ul>
    )
}