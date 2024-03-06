import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import PaintedCellsProvider from './context/PaintedCellsContext.tsx';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PaintedCellsProvider>
      <App />
    </PaintedCellsProvider>
  </React.StrictMode>,
)
