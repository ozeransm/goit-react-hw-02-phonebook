export const ContactItem = ({name, number, filter})=>{
    
    return(
       <>
        { 
         name.toLowerCase().includes(filter) && <li>{name}: {number}</li>
        }
       </>
    )
    
}