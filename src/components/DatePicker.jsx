export default function DatePicker({ valueProp, changeProp, minDate }) {
  return (
    <input
      type="date"
      value={valueProp}
      onChange={(event) => changeProp(event.target.value)}
      min={minDate}
      onKeyDown={(event) => {
        if (event.key === 'Enter') {
          event.preventDefault();
          if (event.target.showPicker) {
            event.target.showPicker();
          }
        }
      }}
    />
  );
}