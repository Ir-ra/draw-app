import React, { useState } from "react";
import { usePaintedCells } from "../../context/PaintedCellsContext";

type GameCellProps = {
  cellIndex: number;
  rowIndex: number;
  initValue: boolean;
};

function GameCell({ cellIndex, rowIndex, initValue }: GameCellProps) {
  const [paintedCells, setPaintedCells] = useState(initValue);
  const { handleCellPaint } = usePaintedCells();

  const handleMouseEnter = () => {
    setPaintedCells(prevPainted => !prevPainted);
    handleCellPaint(rowIndex, cellIndex);
  };

  return (
    <td
      className={`gameField__cell ${paintedCells ? 'gameField__cell--painted' : ''}`}
      onMouseEnter={handleMouseEnter}
    ></td>
  );
};

export default React.memo(GameCell);
