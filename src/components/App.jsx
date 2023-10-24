import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
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
    const { name, number } = newContact;
    const contactExists = this.state.contacts.some(
      contact => contact.name === name || contact.number === number
    );

    if (contactExists) {
      alert(`${name} or ${number} already exists`);
    } else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, { ...newContact, id: nanoid() }],
      }));
    }
  };

  handleSearch = evt => {
    const newFilter = evt.target.value;
    this.setState(prevState => ({
      filter: newFilter,
    }));
  };
  getVisibleCards = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };
  render() {
    const visibleCards = this.getVisibleCards();
    return (
      <div>
        React homework template
        <div>
          <h1>Phonebook</h1>
          <ContactForm onAdd={this.addContact} />
          <h2>Contacts</h2>
          <Filter filter={this.state.filter} handleSearch={this.handleSearch} />
          <ContactList
            contacts={visibleCards}
            onDeleteContact={this.deleteContact}
          />
        </div>
      </div>
    );
  }
}
