import { Component } from "react";
import { Form } from "./Form";
import { nanoid } from 'nanoid'
import { Contacts } from "./Contacts"
import { FindContact } from "./FindContact"
 class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
    name: '',
    number: '',
  }
  
  handlerBtn = (e)=>{
    e.preventDefault();
    // e.target.form.elements[0].value
    const nameContactObj = {id: nanoid(), name: this.state.name, number: this.state.number};
    this.setState((prev)=>{
       return {...prev,contacts:[...prev.contacts, nameContactObj]}
    })
    this.setState({name: '',number: ''});
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
  handlerFind = (e)=>{
    this.setState({
      filter: e.target.value,
    })
    
  }
  render(){
    return(
      <>
      <Form formInpName={this.state.name} formInpNumber={this.state.number} handlerBtn={this.handlerBtn} handlerInp={this.handlerInp} handlerInpTel={this.handlerInpTel}/>
      <h2>Contacts</h2>
      <FindContact handlerFind={this.handlerFind} />
      <Contacts data={this.state.contacts} formInpFilter={this.state.filter}/>
      </>
    ); 
  }
   
    
};
export default App;