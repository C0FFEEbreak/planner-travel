// DestinationCard.jsx
import React from "react";

export default function DestinationCard({ itemProp, toggleProp, deleteProp }) {

  const displayDate = itemProp.date 
    ? new Date(itemProp.date + 'T00:00:00').toLocaleDateString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric'
      })
    : "No Date";

  return (
    <li>
      <input
        type="checkbox"
        checked={itemProp.isVisited}
        onChange={() => toggleProp(itemProp.id)}
      />
      
      <span><strong>{itemProp.text}</strong></span>
      <span>{displayDate}</span>
      <span>{itemProp.transportation}</span>
      <span>{itemProp.activity}</span>
      
      <button onClick={() => deleteProp(itemProp.id)}>Delete</button>
    </li>
  );
}