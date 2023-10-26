import { ContactCard } from 'components/ContactCard/ContactCard';
import React from 'react';
import { List, ListItem } from './ContactList.Style';

export const ContactList = ({ contacts, onDeleteContact }) => {
  
  return (
    <List>
      {contacts.map(contact => (
        <ListItem key={contact.id}>
          <ContactCard contact={contact} onDeleteContact={onDeleteContact} />
        </ListItem>
      ))}
    </List>
  );
};
