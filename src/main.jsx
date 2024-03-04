import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import PaintedCellsProvider from './context/PaintedCellsContext.tsx';
import RefreshProvider from './context/RefreshContext.tsx';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PaintedCellsProvider>
      <RefreshProvider>
      <App />
      </RefreshProvider>
    </PaintedCellsProvider>
  </React.StrictMode>,
)
