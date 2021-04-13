import React, {Component} from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

class App extends Component {
  
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'}],
    filter: ''
  }

formSubmitHandler = (data) =>{
  const normalizedName = data.name.toLowerCase();
  const sameName = this.state.contacts
  .map((contact) => contact.name.toLowerCase())
  .includes(normalizedName);

if (sameName) {
  alert(`${data.name} is already in contacts`);
} else {  const contact ={
    id: uuidv4(),
    ...data
  }
  this.setState(({contacts}) => ({
    contacts: [...contacts, 
      contact]}));
}};

  deleteContact = (currentId) =>{
this.setState(({contacts})=>{
  return {
    contacts: contacts.filter(({id}) => id !== currentId)
  }
})
  };

changeFilter = (event) =>{
this.setState({filter: event.currentTarget.value});
}

  render (){
/* переменная normalizedFilter необходима, чтоб не приводить 
содержимое свойства filter в нижний регистр каждую итерацию метода filter*/
    const normalizedFilter = this.state.filter.toLowerCase();

    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
      );

return (
<div>
  <ContactForm onSubmit={this.formSubmitHandler}/>
  <Filter filter={this.state.filter} onChangeFilter={this.changeFilter}/>
  <ContactList contacts={visibleContacts} onDeleteContact={this.deleteContact}/>
</div>
)}
};

export default App;
