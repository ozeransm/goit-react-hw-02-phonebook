import { FormBtn } from "./FormBtn"
import { FormInp } from "./FormInp"
import { FormInpTel } from "./FormInpTel"
import { Component } from "react"
import css from './Form.module.css'
class Form extends Component {
    
    state = {
        name: '',
        number: '',
    }
    handlerSubmit = (e)=>{
        e.preventDefault();
        this.setState({name: '',number: ''});
        this.props.addToContact(this.state)
    }

    handlerInp = ({target:{name, value}})=>{
        this.setState({
          [name]: value,
        })
       
    }
    
    render(){
        return(
            <form className={css.common} action="submit">
                    <FormInp handlerInp={this.handlerInp} formInpName={this.state.name}/>
                    <FormInpTel handlerInpTel={this.handlerInp} formInpNumber={this.state.number}/>
                    <FormBtn handlerSubmit={this.handlerSubmit}/>
            </form> 
        )
    }
} 

export default Form;