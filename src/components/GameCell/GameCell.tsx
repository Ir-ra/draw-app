import React, { useState } from "react";

type GameCellProps = {
  row: number[];
  rowIndex: number;
}

export const GameCell: React.FC<GameCellProps> = ({ row, rowIndex }) => {
  const [hoveredCells, setHoveredCells] = useState(new Array(row.length).fill(false));
  const [paintedCells, setPaintedCells] = useState(new Array(row.length).fill(false));
  const [hoverCounts, setHoverCounts] = useState(new Array(row.length).fill(0));

  
  const handleMouseEnter = (cellIndex: number) => {
    setHoveredCells(prevState => {
      const updatedHoveredCells = [...prevState];
      updatedHoveredCells[cellIndex] = true;
      console.log(`Hover on row ${rowIndex + 1}, column ${cellIndex + 1}`);
      return updatedHoveredCells;
    });

    setHoverCounts(prevState => {
      const updatedHoverCounts = [...prevState];
      updatedHoverCounts[cellIndex]++;
      return updatedHoverCounts;
    });

    setPaintedCells(prevState => {
      const updatedPaintedCells = [...prevState];
      if (hoverCounts[cellIndex] % 2 === 0) {
        updatedPaintedCells[cellIndex] = true;
      } else {
        updatedPaintedCells[cellIndex] = false;
      }
      return updatedPaintedCells;
    });
  };

  const handleMouseLeave = (cellIndex: number) => {
    setHoveredCells(prevState => {
      const updatedHoveredCells = [...prevState];
      updatedHoveredCells[cellIndex] = false;
      return updatedHoveredCells;
    });
  };

  return (
    <tr className="row">
      {row.map((_, cellIndex) => (
      <td
      key={cellIndex}
      className={`cell cell${cellIndex} ${hoveredCells[cellIndex] && !paintedCells[cellIndex] ? 'hovered' : ''} ${paintedCells[cellIndex] ? 'painted' : ''}`}
      onMouseEnter={() => handleMouseEnter(cellIndex)}
      onMouseLeave={() => handleMouseLeave(cellIndex)}
    ></td>
      ))}
    </tr>
  )
}

