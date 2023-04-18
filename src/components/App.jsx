import React, { Component } from 'react';

import ContactForm from './сontactForm/ContactForm';
import Filter from './filter/Filter';
import ContactList from './contactList/ContactList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = newContact => {
    const isExistContact = this.state.contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (isExistContact) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  filterChange = e => {
    this.setState({ filter: e.target.value });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(
        contact => contact.id !== contactId.id
      ),
    }));
  };
  render() {
    return (
      <>
        <div>
          <h1>Phonebook</h1>
        </div>
        <ContactForm
          addContact={this.addContact}
          contacts={this.state.contacts}
        />
        <div>
          <h2>Contacts</h2>
          <Filter value={this.state.filter} onChange={this.filterChange} />
          <ContactList
            onDelete={this.deleteContact}
            filter={this.state.filter}
            contacts={this.state.contacts}
          />
        </div>
      </>
    );
  }
}

export default App;
