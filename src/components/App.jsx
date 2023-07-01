import { Component } from "react";
import  Form  from "./Form";
import { nanoid } from 'nanoid'
import { Contacts } from "./Contacts"
import { FindContact } from "./FindContact"
import Notiflix from 'notiflix';
 class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
   
  }
  
  addToContact = ({ name, number })=>{
      this.setState((prev)=>{
      const flagName = prev.contacts.filter((el)=>el.name.includes(name)).length;
      return !flagName ? {...prev, contacts: [...prev.contacts, {id: nanoid(), name, number}]} : Notiflix.Notify.failure('Dublicate name user');
            
    })
    
  }

  
  handlerFind = (e)=>{
    this.setState({
      filter: e.target.value,
    })
    
  }
  handlerBtnDel = (data)=>{
    this.setState((prev)=>{
      const newArr = [...prev.contacts]
      newArr.map((obj,i)=>obj.id===data && newArr.splice(i,1))
      return {...prev, contacts:[...newArr]}
    })
    
  }
  render(){
    return(
      <>
      <Form addToContact={this.addToContact}/>
      <h2>Contacts</h2>
      <FindContact handlerFind={this.handlerFind} />
      <Contacts data={this.state.contacts} formInpFilter={this.state.filter} handlerBtnDel={this.handlerBtnDel}/>
      </>
    ); 
  }
   
    
};
export default App;