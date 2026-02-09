// Dropdown.jsx
import React from 'react';

export default function Dropdown({ listOpt, valueProp, changeProp }) {
  return (
    <div>
      <select
        value={valueProp}
        onChange={(event) => changeProp(event.target.value)}
      > 
      <option value="">-- Select --</option>
        {listOpt.map((option) => (
          <option key={option.id} value={option.label}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
