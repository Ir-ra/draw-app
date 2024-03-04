import { useEffect, useRef, useState } from 'react';
import './App.css'
import GameField from './components/GameField/GameField';
import { Loader } from './components/Loader/Loader';
import { useFetch } from './hooks/useFetch';
import Selector from './components/Selector/Selector';
import StartButton from './components/StartButton/StartButton';
import HoversContainer from './components/HoversContainer/HoversContainer';

function App() {
  const BASE_URL = 'https://60816d9073292b0017cdd833.mockapi.io/modes';
  const { loading, error } = useFetch(BASE_URL);
  const [optionValue, setOptionValue] = useState<number | null>(null);
  const [size, setSize] = useState(0);
  const [refresh, setRefresh] = useState(false);
  const hoversRef = useRef<HTMLDivElement>(null);;
  const [paintedCells, setPaintedCells] = useState<{ rowIndex: number; cellIndex: number; }[]>([]);

  const handleCellPaint = (rowIndex: number, cellIndex: number) => {
    const newPaintedCells = [...paintedCells, { rowIndex, cellIndex }];
    setPaintedCells(newPaintedCells);
  };

  const handleClick = () => {
    if (optionValue !== null) {
      setSize(optionValue);
      setRefresh(!refresh);
    }
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
    <main className='mainField'>
      {loading && !error && <Loader />}

      {!loading && !error && (
        <>
          <div>
            <div className='mainField__header'>
              <Selector optionValue={optionValue} setOptionValue={setOptionValue} />
              <StartButton onClickHandle={handleClick} />
            </div>

            <GameField size={size} refresh={refresh} onCellPaint={handleCellPaint} />
          </div>

          <HoversContainer paintedCells={paintedCells} hoversRef={hoversRef}/>
        </>
      )}
    </main>
  )
}

export default App;
