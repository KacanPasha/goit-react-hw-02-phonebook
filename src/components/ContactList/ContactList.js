import { ContactCard } from 'components/ContactCard/ContactCard';
import React from 'react';

export const ContactList = ({ contacts, onDeleteContact }) => {
  
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          <ContactCard contact={contact} onDeleteContact={onDeleteContact} />
        </li>
      ))}
    </ul>
  );
};
