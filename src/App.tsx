import { useEffect, useRef, useState } from 'react';
import './App.css'
import GameField from './components/GameField/GameField';
import { Loader } from './components/Loader/Loader';
import { useFetch } from './hooks/useFetch';
import Selector from './components/Selector/Selector';


function App() {
  const BASE_URL = 'https://60816d9073292b0017cdd833.mockapi.io/modes';
  const { loading, error } = useFetch(BASE_URL);
  const [optionValue, setOptionValue] = useState(5);
  const [size, setSize] = useState(5);
  const [refresh, setRefresh] = useState(false);
  const hoversRef = useRef<HTMLDivElement>(null);;
  const [paintedCells, setPaintedCells] = useState<{ rowIndex: number; cellIndex: number; }[]>([]);

  const handleCellPaint = (rowIndex: number, cellIndex: number) => {
    const newPaintedCells = [...paintedCells, { rowIndex, cellIndex }];
    setPaintedCells(newPaintedCells);
  };

  const handleClick = () => {
    setSize(optionValue);
    setRefresh(!refresh)
  };

  useEffect(() => {
    if (hoversRef.current) {
      hoversRef.current.scrollTop = hoversRef.current.scrollHeight;
    }
  }, [paintedCells]);
  
  useEffect(() => {
    setPaintedCells([]);
  }, [refresh]);

  return (
    <div >
      <div>
        <Selector optionValue={optionValue} setOptionValue={setOptionValue} />
        <button onClick={handleClick}>
          Start
        </button>
      </div>

      {loading && !error && <Loader />}

      {!loading && !error && (
        <div>
        <GameField size={size} refresh={refresh} onCellPaint={handleCellPaint} />
        <div className='hovers' ref={hoversRef}>
          {paintedCells.map((cell, index) => (
            <div key={index}>
              <p className='text'>row: {cell.rowIndex + 1}, cell: {cell.cellIndex + 1}</p>
            </div>
          ))}
        </div>
      </div>
      )}
    </div>
  )
}

export default App;
