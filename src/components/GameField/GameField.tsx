import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import {  GameRow } from "../GameRow/GameRow";

export default function GameField() {
  const BASE_URL = 'https://60816d9073292b0017cdd833.mockapi.io/modes';
  const { data } = useFetch(BASE_URL);

  const [gameBoard, setGameBoard] = useState<number[][]>([]);
  const [optionValue, setOptionValue] = useState(5);
  const [size, setSize] = useState(5);


  const generateGameField = () => {
    setSize(optionValue)
    const newGameBoard = new Array(size).fill(new Array(size).fill(size));
     setGameBoard(newGameBoard);
  }

  const handleOptionClick = (val: number) => {
    setOptionValue(val);
  };

  return (
    <div className="gameField" style={{display: 'flex'}}>

      <div>
        <select name="" id="" value={optionValue} onChange={(e) => handleOptionClick(parseInt(e.target.value))}>
          {data.map(option => (
            <option key={option.field} value={option.field}>
              {option.name}
            </option>
          ))}
        </select>
        <button onClick={generateGameField}>Start</button>
      </div>

      <table className="board">
        <tbody>
          {gameBoard.map((row, rowIndex) => (
            <GameRow row={row} rowIndex={rowIndex} key={rowIndex} size={size} />
          ))}
        </tbody>
      </table>
    </div>
  )
}
