// DestinationCard.jsx
export default function DestinationCard({ itemProp, toggleProp, deleteProp }) {
  
  const displayDate = itemProp.date 
    ? new Date(itemProp.date + 'T00:00:00').toLocaleDateString() 
    : "No Date";

  return (
    <li className="card-item">
      {/* Column 1: Info */}
      <div className="card-info">
        {/* Row 1: Checkbox and Title */}
        <div className="card-row-1">
          <input 
            type="checkbox" 
            className="custom-checkbox"
            checked={itemProp.isVisited} 
            onChange={() => toggleProp(itemProp.id)} 
          />
          <span className={`destination-text ${itemProp.isVisited ? 'completed' : ''}`}>
            {itemProp.text}
          </span>
        </div>

        {/* Row 2: Badges and Date */}
        <div className="card-row-2">
          <span className="badge badge-date">{displayDate}</span>
          {itemProp.transportation && (
            <span className="badge badge-trans">{itemProp.transportation}</span>
          )}
          {itemProp.activity && (
            <span className="badge badge-act">{itemProp.activity}</span>
          )}
        </div>
      </div>

      {/* Column 2: Delete Button */}
      <div className="card-action">
        <button className="delete-icon-btn" onClick={() => deleteProp(itemProp.id)}>
          Delete
        </button>
      </div>
    </li>
  );
}