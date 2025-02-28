import React, { useState } from 'react';
import Grid from './components/Grid';
import Toolbar from './components/Toolbar';
import FormulaBar from './components/FormulaBar';
import { parseFormula } from './utils/formulaParser';
import './styles.css';

const App = () => {
  // Initialize the grid data with 10 rows and 10 columns
  const [data, setData] = useState(
    Array(10)
      .fill()
      .map(() => Array(10).fill(''))
  );

  // Track cell styles separately
  const [cellStyles, setCellStyles] = useState(
    Array(10)
      .fill()
      .map(() => Array(10).fill({}))
  );

  // Track selected cells for formatting
  const [selectedCells, setSelectedCells] = useState([]);

  // Handle cell changes (e.g., typing in a cell)
  const handleCellChange = (changes) => {
    if (changes) {
      const newData = [...data];
      changes.forEach(([row, col, oldValue, newValue]) => {
        if (newValue.startsWith('=')) {
          // If the cell contains a formula, parse it
          newData[row][col] = parseFormula(newValue, newData);
        } else if (newData[row][col].type === 'number' && isNaN(Number(newValue))) {
          // If the cell is numeric and the new value is not a number, reject it
          newData[row][col] = oldValue;
        } else {
          // Otherwise, update the cell value
          newData[row][col] = newValue;
        }
      });
      setData(newData);
    }
  };

  // Handle formula submission (from the formula bar)
  const handleFormulaSubmit = (formula) => {
    const newData = [...data];
    if (selectedCells.length === 4) {
      const [startRow, startCol] = selectedCells;
      newData[startRow][startCol] = parseFormula(formula, newData);
      setData(newData);
    }
  };

  // Handle cell selection (for formatting)
  const handleSelection = (r, c, r2, c2) => {
    setSelectedCells([r, c, r2, c2]);
  };

  // Apply bold/italic formatting to selected cells
  const handleFormat = (style) => {
    const newStyles = [...cellStyles];
    const [startRow, startCol, endRow, endCol] = selectedCells;
    for (let row = startRow; row <= endRow; row++) {
      for (let col = startCol; col <= endCol; col++) {
        newStyles[row][col] = {
          ...newStyles[row][col],
          [style === 'bold' ? 'fontWeight' : 'fontStyle']:
            newStyles[row][col][style === 'bold' ? 'fontWeight' : 'fontStyle'] ? '' : style,
        };
      }
    }
    setCellStyles(newStyles);
  };

  // Add a new row
  const handleAddRow = () => {
    setData([...data, Array(data[0].length).fill('')]);
    setCellStyles([...cellStyles, Array(cellStyles[0].length).fill({})]);
  };

  // Add a new column
  const handleAddColumn = () => {
    setData(data.map((row) => [...row, '']));
    setCellStyles(cellStyles.map((row) => [...row, {}]));
  };

  return (
    <div className="app">
      {/* Toolbar for adding rows/columns and formatting */}
      <Toolbar
        onAddRow={handleAddRow}
        onAddColumn={handleAddColumn}
        onFormat={handleFormat}
      />

      {/* Formula bar for entering formulas */}
      <FormulaBar onFormulaSubmit={handleFormulaSubmit} />

      {/* Grid component for displaying the spreadsheet */}
      <Grid
        data={data}
        cellStyles={cellStyles}
        onCellChange={handleCellChange}
        onSelection={handleSelection}
      />
    </div>
  );
};

export default App;