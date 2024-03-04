import { useEffect, useState } from "react";

type GameCellProps = {
  cellIndex: number;
  rowIndex: number;
  initValue: boolean;
  refresh: boolean;
  onCellPaint: (rowIndex: number, cellIndex: number) => void;
};

export const GameCell: React.FC<GameCellProps> = ({ cellIndex, rowIndex, initValue, refresh, onCellPaint}) => {
  const [paintedCells, setPaintedCells] = useState(initValue);

  const handleMouseEnter = () => {
    setPaintedCells(prevPainted => !prevPainted);
    onCellPaint(rowIndex, cellIndex);
  };

  useEffect(() => {
    setPaintedCells(false);
  }, [refresh]);


  return (
    <td
      key={`${cellIndex}_${rowIndex}`}
      className={`gameField__cell ${paintedCells ? 'gameField__cell--painted' : ''}`}
      onMouseEnter={() => handleMouseEnter()}
    ></td>
  )
}
