import React, { useState } from 'react';

const parseMatrix = (matrixString: string) => {
  const rows = matrixString.trim().split('\n').map(row => row.trim().split(' ').map(Number));

  const columns = rows[0].map((_, index) => rows.map(row => row[index]));

  return { rows, columns };
};

const MatrixParser: React.FC = () => {
  const [matrixString, setMatrixString] = useState('');
  const [rows, setRows] = useState<number[][]>([]);
  const [columns, setColumns] = useState<number[][]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMatrixString(e.target.value);
  };

  const handleParse = () => {
    const { rows, columns } = parseMatrix(matrixString);
    setRows(rows);
    setColumns(columns);
  };

  return (
    <div>
      <h1>Matrix Parser</h1>
      <textarea value={matrixString} onChange={handleChange} rows={5} cols={30} />
      <button onClick={handleParse}>Parse Matrix</button>
      <div>
        <h2>Rows</h2>
        {rows.map((row, rowIndex) => (
          <div key={rowIndex}>{row.join(', ')}</div>
        ))}
      </div>
      <div>
        <h2>Columns</h2>
        {columns.map((col, index) => (
          <div key={index}>{col.join(', ')}</div>
        ))}
      </div>
    </div>
  );
};

export default MatrixParser;
