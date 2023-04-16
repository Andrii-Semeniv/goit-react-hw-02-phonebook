import React, { Component } from 'react';
import { nanoid } from 'nanoid';

class App extends Component {
  state = { contacts: [], name: '' };

  handleChange = e => {
    this.setState({ name: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, prevState.name],
        name: '',
      };
    });
  };

  render() {
    return (
      <>
        <div>
          <h2>Phonebook</h2>
          <form onSubmit={this.handleSubmit}>
            <label>
              Name
              <input
                type="text"
                name="name"
                value={this.state.name}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                onChange={this.handleChange}
                required
              />
            </label>
            <button type="submit">Add contact</button>
          </form>
        </div>

        <div>
          <h2>Contacts</h2>
          <ul>
            {this.state.contacts.map(contact => (
              <li key={nanoid()}> {contact}</li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}

export default App;
