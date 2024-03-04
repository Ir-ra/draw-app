import { useEffect, useState } from "react";
import { usePaintedCells } from "../../context/PaintedCellsContext";
import { useRefresh } from "../../context/RefreshContext";

type GameCellProps = {
  cellIndex: number;
  rowIndex: number;
  initValue: boolean;
};

export default function GameCell({ cellIndex, rowIndex, initValue,  }: GameCellProps) {
  const [paintedCells, setPaintedCells] = useState(initValue);
  const { handleCellPaint } = usePaintedCells();
  const { refresh } = useRefresh();

  const handleMouseEnter = () => {
    setPaintedCells(prevPainted => !prevPainted);
    handleCellPaint(rowIndex, cellIndex);
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
  );
};
