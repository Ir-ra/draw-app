import React from "react";
import { GameCell } from "../GameCell/GameCell";

type GameRowProps = {
  row: boolean[];
  rowIndex: number;
  refresh: boolean;
  onCellPaint: (rowIndex: number, cellIndex: number) => void;
}

export const GameRow: React.FC<GameRowProps> = ({ row, rowIndex, refresh, onCellPaint}) => {
  return (
    <tr className="row">
      {row.map((cellValue, cellIndex) => (
        <GameCell cellIndex={cellIndex} rowIndex={rowIndex} initValue={cellValue} refresh={refresh} onCellPaint={onCellPaint} />
      ))}
    </tr>
  )
}

