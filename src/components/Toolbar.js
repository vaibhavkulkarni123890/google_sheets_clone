import React from 'react';

const Toolbar = ({ onAddRow, onAddColumn, onFormat }) => {
  return (
    <div className="toolbar">
      <button onClick={onAddRow}>Add Row</button>
      <button onClick={onAddColumn}>Add Column</button>
      <button onClick={() => onFormat('bold')}>Bold</button>
      <button onClick={() => onFormat('italic')}>Italic</button>
    </div>
  );
};

export default Toolbar;