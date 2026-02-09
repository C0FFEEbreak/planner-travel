// DestinationList.jsx
import React from "react";
import DestinationCard from "./DestinationCard";

export default function DestinationList({ listProp, toggleProp, deleteProp }) {

  return (
    <ul>
      {listProp.map((item) => (
        <DestinationCard
          key={item.id}
          itemProp={item}
          toggleProp={toggleProp}
          deleteProp={deleteProp}
        />
      ))}
    </ul>
  );
}
