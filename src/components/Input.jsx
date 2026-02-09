// Input.jsx
import React from "react";

export default function Input({ valueProp, changeProp }) {
  const handleChange = (event) => {
    changeProp(event.target.value)
  }

  return (
    <input
      type="text"
      onChange={handleChange}
      value={valueProp}
    />
  );
}