import React, { Component } from 'react';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState(prevState => {
      const { name, number } = prevState;
      return {
        contacts: [...prevState.contacts, { id: nanoid(), name, number }],
        name: '',
        number: '',
      };
    });
  };

  filterChange = e => {
    this.setState({ filter: e.target.value });
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
            <label>
              Number
              <input
                type="tel"
                name="number"
                value={this.state.number}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                onChange={this.handleChange}
                required
              />
            </label>
            <button type="submit">Add contact</button>
          </form>
        </div>

        <div>
          <h2>Contacts</h2>
          <label>
            Find contacts by name
            <input
              type="text"
              value={this.state.filter}
              onChange={this.filterChange}
            />
          </label>
          <ul>
            {this.state.contacts.map(
              ({ id, name, number }) =>
                name
                  .toLowerCase()
                  .includes(this.state.filter.toLowerCase()) && (
                  <li key={id}>
                    {name}: {number}
                  </li>
                )
            )}
          </ul>
        </div>
      </>
    );
  }
}

export default App;
