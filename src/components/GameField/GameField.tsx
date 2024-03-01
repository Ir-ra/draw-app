import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import {GameCell} from "../GameCell/GameCell";

export default function GameField() {
  const BASE_URL = 'https://60816d9073292b0017cdd833.mockapi.io/modes';
  const { data } = useFetch(BASE_URL);

  console.log(data);
  const size = 5;

const [gameBoard, setGameBoard] = useState<number[][]>([]);

  const generateGameField = () => {
    const newGameBoard = new Array(size).fill(new Array(size).fill(0));
    setGameBoard(newGameBoard);
  }

  return (
    <div className="gameField">
      <button onClick={generateGameField}>Start</button>

      <table className="board">
        <tbody>
          {gameBoard.map((row, rowIndex) => (
            <GameCell row={row} rowIndex={rowIndex} key={rowIndex}/>
          ))}
        </tbody>
      </table>
    </div>
  )
}
