import React from 'react';

export const ContactCard = ({ contact: {id, name, number}, onDeleteContact }) => {
  
  return (
    <>
      <p>{name}</p>
      <p>{number}</p>
      <button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </>
  );
};
