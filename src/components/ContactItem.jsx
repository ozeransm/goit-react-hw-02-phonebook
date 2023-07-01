export const ContactItem = ({id, name, number, filter, handlerBtnDel})=>{
    
    return(
       <>
        { 
         name.toLowerCase().includes(filter) && <li>{name}: {number} <button onClick={()=>handlerBtnDel(id)}>Delete</button></li>
       }
       </>
    )
    
}