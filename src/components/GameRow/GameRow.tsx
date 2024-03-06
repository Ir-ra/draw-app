import React from "react";
import GameCell from "../GameCell/GameCell";

type GameRowProps = {
  row: boolean[];
  rowIndex: number;
};

function GameRow({ row, rowIndex }: GameRowProps) {
  return (
    <tr className="gameField__row">
      {row.map((cellValue, cellIndex) => (
        <GameCell
          key={`${rowIndex}_${cellIndex}`}
          cellIndex={cellIndex}
          rowIndex={rowIndex}
          initValue={cellValue}
        />
      ))}
    </tr>
  );
}

export default React.memo(GameRow);
