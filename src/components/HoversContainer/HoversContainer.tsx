import { Fragment } from "react/jsx-runtime";

type HoversContainerType = {
  paintedCells: {
    rowIndex: number;
    cellIndex: number;
  }[];
  hoversRef: React.RefObject<HTMLDivElement>;
}

export default function HoversContainer({paintedCells, hoversRef} : HoversContainerType) {
  return (
    <div className='hovers'>
    <h1 className='hovers__title'>Hover squears</h1>

    <div ref={hoversRef} className='hovers__containers'>
      {paintedCells.map((cell, index) => (
        <Fragment key={`${cell.cellIndex}_${index}`} >
          <p className='hovers__containers--text'>row: {cell.rowIndex + 1}, cell: {cell.cellIndex + 1}</p>
        </Fragment>
      ))}

    </div>
  </div>
  )
}
