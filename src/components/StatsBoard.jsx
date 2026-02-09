// Statsboard.jsx
import React from "react";

export default function Input({ total, completed, active }) {


  return (
    <div className="stats-row" style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
        <div className="stat-box">
          <p>Total</p>
          <h3>{total}</h3>
        </div>

        <div className="stat-box">
          <p>Completed</p>
          <h3>{completed}</h3>
        </div>

        <div className="stat-box">
          <p>Active</p>
          <h3>{active}</h3>
        </div>
    </div>

  );
}