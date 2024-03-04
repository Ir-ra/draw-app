import { useEffect, useState } from "react";
import GameRow from "../GameRow/GameRow";

type GameFieldProps = {
  size: number;
};

export default function GameField({ size }: GameFieldProps) {
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
            <GameRow key={rowIndex} row={row} rowIndex={rowIndex} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
