import React from 'react';
import { Btn } from './ContactCard.Style';

export const ContactCard = ({ contact: {id, name, number}, onDeleteContact }) => {
  
  return (
    <>
      <p>{name}</p>
      <p>{number}</p>
      <Btn type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </Btn>
    </>
  );
};
