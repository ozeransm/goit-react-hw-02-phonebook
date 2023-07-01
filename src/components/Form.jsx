import { FormBtn } from "./FormBtn"
import { FormInp } from "./FormInp"
import { FormInpTel } from "./FormInpTel"
import { Component } from "react"

// class Form extends Component {
    
//     state = {
//         name: '',
//         number: '',
//     }

//     render(){
//         return(
//             <form action="submit">
//                     <FormInp handlerInp={handlerInp} formInpName={formInpName}/>
//                     <FormInpTel handlerInpTel={handlerInpTel} formInpNumber={formInpNumber}/>
//                     <FormBtn handlerBtn={handlerBtn}/>
//             </form> 
//         )
//     }
// } 

export const Form = ({ handlerBtn, handlerInp, handlerInpTel, formInpName, formInpNumber })=>{
    
    return (
        
        <form action="submit">
            <FormInp handlerInp={handlerInp} formInpName={formInpName}/>
            <FormInpTel handlerInpTel={handlerInpTel} formInpNumber={formInpNumber}/>
            <FormBtn handlerBtn={handlerBtn}/>
        </form>
        
    )
}

// export default Form;