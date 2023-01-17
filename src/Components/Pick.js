import React from 'react';

export default function Pick({ label, value, options, onChange }) {
  return (
    <div className="form-control">
      <select value={value} onChange={onChange}>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option> 
        ))}
      </select>
      <label>{label}</label>
    </div>
  );
}