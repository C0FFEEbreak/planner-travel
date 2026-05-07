import React from "react";
import DestinationCard from "./DestinationCard";

export default function DestinationList({ listProp, toggleProp, deleteProp }) {
  // Check if list has items
  const hasItems = listProp.length > 0;

  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {hasItems ? (
        listProp.map((item) => (
          <DestinationCard
            key={item.id}
            itemProp={item}
            toggleProp={toggleProp}
            deleteProp={deleteProp}
          />
        ))
      ) : (
        <div className="empty-state">
          <p>Nothing added yet.</p>
          <p style={{ fontSize: '0.85rem', color: '#718096', fontWeight: '400' }}>
            Your travel plans will appear here.
          </p>
        </div>
      )}
    </ul>
  );
}