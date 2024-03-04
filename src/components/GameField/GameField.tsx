import { useEffect, useState } from "react";
import { GameRow } from "../GameRow/GameRow";

type GameFieldProps = {
  size: number;
  refresh: boolean;
  onCellPaint: (rowIndex: number, cellIndex: number) => void;
}

export default function GameField({size, refresh, onCellPaint } : GameFieldProps) {
  const [gameBoard, setGameBoard] = useState<boolean[][]>([]);

  useEffect(() => {
    const newGameBoard = new Array(size).fill(new Array(size).fill(false));
    setGameBoard(newGameBoard);
  }, [size]);

  return (
    <div className="gameField">
      <table className="gameField__board">
        <tbody>
          {gameBoard.map((row, rowIndex) => (
            <GameRow key={rowIndex} row={row} rowIndex={rowIndex} refresh={refresh} onCellPaint={onCellPaint}/>
          ))}
        </tbody>
      </table>
    </div>
  )
}
