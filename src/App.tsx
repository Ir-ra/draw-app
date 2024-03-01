import './App.css'
import GameField from './components/GameField/GameField';
import { Loader } from './components/Loader/Loader';
import { useFetch } from './hooks/useFetch';

function App() {
  const BASE_URL = 'https://60816d9073292b0017cdd833.mockapi.io/modes';
  const { loading, error} = useFetch(BASE_URL);

  return (
    <div>
      {loading && !error && <Loader />}

      <GameField />
    </div>
  )
}

export default App;
