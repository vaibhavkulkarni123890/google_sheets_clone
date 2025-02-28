import React, { useRef, useEffect } from 'react';
import { HotTable } from '@handsontable/react';
import { registerAllModules } from 'handsontable/registry';
import 'handsontable/dist/handsontable.full.min.css';

// REQUIRED LICENSE FIX
if (typeof window !== 'undefined') {
  window.Handsontable = require('handsontable').default;
  window.Handsontable.licenseKey = 'non-commercial-and-evaluation';
}

registerAllModules();

const Grid = ({ data, cellStyles, onCellChange, onSelection }) => {
  const hotTableRef = useRef(null);

  useEffect(() => {
    if (hotTableRef.current) {
      const hot = hotTableRef.current.hotInstance;

      // Apply cell styles
      cellStyles.forEach((row, rowIndex) => {
        row.forEach((style, colIndex) => {
          hot.setCellMeta(rowIndex, colIndex, 'className', 
            `${style.fontWeight ? 'bold-cell' : ''} ${style.fontStyle ? 'italic-cell' : ''}`
          );
        });
      });

      // Enable drag-and-drop
      hot.updateSettings({
        manualRowMove: true,
        manualColumnMove: true,
      });
    }
  }, [cellStyles]);

  return (
    <HotTable
      ref={hotTableRef}
      data={data}
      rowHeaders={true}
      colHeaders={true}
      width="100%"
      height="500px"
      stretchH="all"
      manualRowMove={true} // Explicitly enable row drag-and-drop
      manualColumnMove={true} // Explicitly enable column drag-and-drop
      afterChange={onCellChange}
      afterSelectionEnd={onSelection}
    />
  );
};

export default Grid;