import React from 'react';

export const Filter = ({filter, handleSearch}) => {
  return (
    <label>
      <input type="text" value={filter} onChange={handleSearch}></input>
    </label>
  );
};
