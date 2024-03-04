import { useEffect, useState } from 'react';
import GameField from './components/GameField/GameField';
import Loader from './components/Loader/Loader';
import Selector from './components/Selector/Selector';
import StartButton from './components/StartButton/StartButton';
import HoversContainer from './components/HoversContainer/HoversContainer';
import './App.css';
import { useFetch } from './hooks/useFetch';
import { usePaintedCells } from './context/PaintedCellsContext';
import { BASE_URL } from '../config';
import { useRefresh } from './context/RefreshContext';

function App() {
  const { loading, error } = useFetch(BASE_URL);
  const [optionValue, setOptionValue] = useState<number | null>(null);
  const [size, setSize] = useState(0);

  const { setPaintedCells } = usePaintedCells();
  const { refresh, setRefresh } = useRefresh();

  const handleClick = () => {
    if (optionValue !== null) {
      setSize(optionValue);
      setRefresh(!refresh);
    }
  };

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

            <GameField size={size} />
          </div>

          <HoversContainer />
        </>
      )}
    </main>
  )
}

export default App;
