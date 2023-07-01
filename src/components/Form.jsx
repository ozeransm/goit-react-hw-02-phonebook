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
    handlerBtn = (e)=>{
        e.preventDefault();
        this.setState({name: '',number: ''});
        this.props.addToContact(this.state)
    }

    handlerInp = (e)=>{
        this.setState({
          name: e.target.value,
        })
       
    }
    handlerInpTel = (e)=>{
        this.setState({
          number: e.target.value,
        })
    }
    render(){
        return(
            <form className={css.common} action="submit">
                    <FormInp handlerInp={this.handlerInp} formInpName={this.state.name}/>
                    <FormInpTel handlerInpTel={this.handlerInpTel} formInpNumber={this.state.number}/>
                    <FormBtn handlerBtn={this.handlerBtn}/>
            </form> 
        )
    }
} 

export default Form;