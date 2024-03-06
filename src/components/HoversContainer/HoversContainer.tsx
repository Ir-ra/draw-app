import { Fragment } from "react/jsx-runtime";
import { usePaintedCells } from "../../context/PaintedCellsContext";
import { useEffect, useRef } from "react";

export default function HoversContainer() {
  const { paintedCells } = usePaintedCells();
  const hoversRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (hoversRef.current) {
      hoversRef.current.scrollTop = hoversRef.current.scrollHeight;
    }
  }, [paintedCells]);

  return (
    <div className='hovers'>
      <h1 className='hovers__title'>HOVER SQUARES</h1>

      <div ref={hoversRef} className='hovers__containers'>
        {paintedCells.map((cell, index) => (
          <Fragment key={`${cell.cellIndex}_${index}`} >
            <p className='hovers__containers--text'>
              row: {cell.rowIndex + 1} cell: {cell.cellIndex + 1}
            </p>
          </Fragment>
        ))}
      </div>
    </div>
  );
};
