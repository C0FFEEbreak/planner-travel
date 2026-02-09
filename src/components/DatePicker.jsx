// DatePicker.jsx
import React from "react";

export default function DatePicker({ valueProp, changeProp, minDate }) {
  const myDate = (event) => {
    changeProp(event.target.value);
  };

  return (
    <>
      <input
        type="date"
        value={valueProp}
        onChange={(event) => changeProp(event.target.value)}
        min={minDate}
      />
    </>
  );
}
