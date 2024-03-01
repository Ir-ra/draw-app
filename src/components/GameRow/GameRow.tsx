import React, { useEffect, useState } from "react";

type GameRowProps = {
  row: number[];
  rowIndex: number;
  size?: number;
}

export const GameRow: React.FC<GameRowProps> = ({ row, size, rowIndex }) => {
  const [hoveredCells, setHoveredCells] = useState(new Array(row.length).fill(false));
  const [paintedCells, setPaintedCells] = useState(new Array(row.length).fill(false));

  useEffect(() => {
    setHoveredCells(new Array(row.length).fill(false));
    setPaintedCells(new Array(row.length).fill(false));
  }, [size]);

  const handleMouseEnter = (cellIndex: number) => {
    setHoveredCells(prevState => {
      const updatedHoveredCells = [...prevState];
      updatedHoveredCells[cellIndex] = true;
      console.log(`Hover ${hoveredCells} on row ${rowIndex}, column ${cellIndex}`);
      return updatedHoveredCells;
    });

    setPaintedCells(prevState => {
      const updatedPaintedCells = [...prevState];
      updatedPaintedCells[cellIndex] = !updatedPaintedCells[cellIndex];
      return updatedPaintedCells;
    }
    );
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
          className={`cell cell${cellIndex}_${size} ${hoveredCells[cellIndex] && !paintedCells[cellIndex] ? 'hovered' : ''} ${paintedCells[cellIndex] ? 'painted' : ''}`}
          onMouseEnter={() => handleMouseEnter(cellIndex)}
          onMouseLeave={() => handleMouseLeave(cellIndex)}
        ></td>
      ))}
    </tr>
  )
}

