// Statsboard.jsx
import React from "react";

// StatsBoard.jsx
export default function StatsBoard({ total, completed, active }) {
  return (
    <div className="stats-row">
      {/* Total Card */}
      <div className="stat-box">
        <div className="stat-header-strip total-strip">
          <p>Total</p>
        </div>
        <div className="stat-content">
          <h3>{total}</h3>
        </div>
      </div>

      {/* Completed Card */}
      <div className="stat-box">
        <div className="stat-header-strip completed-strip">
          <p>Completed</p>
        </div>
        <div className="stat-content">
          <h3>{completed}</h3>
        </div>
      </div>

      {/* Active Card */}
      <div className="stat-box">
        <div className="stat-header-strip active-strip">
          <p>Active</p>
        </div>
        <div className="stat-content">
          <h3>{active}</h3>
        </div>
      </div>
    </div>
  );
}