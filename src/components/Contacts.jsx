import { ContactItem } from "./ContactItem"

export const Contacts = ({ data, formInpFilter, handlerBtnDel })=>{
    
    return(
            <ul>
            {
                data.map((el)=><ContactItem key={el.id} id={el.id} name={el.name} number={el.number} filter={formInpFilter} handlerBtnDel={handlerBtnDel}/>)
            }
            </ul>
    ) 
}