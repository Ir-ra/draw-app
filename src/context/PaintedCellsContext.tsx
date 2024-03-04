import React, { ReactNode, createContext, useContext, useState } from 'react';

type PaintedCellsContextType = {
  paintedCells: { rowIndex: number; cellIndex: number; }[];
  setPaintedCells: React.Dispatch<React.SetStateAction<{ rowIndex: number; cellIndex: number; }[]>>;
  handleCellPaint: (rowIndex: number, cellIndex: number) => void;
};

const PaintedCellsContext = createContext<PaintedCellsContextType | undefined>(undefined);

export const usePaintedCells = () => {
  const context = useContext(PaintedCellsContext);
  if (!context) {
    throw new Error();
  }
  return context;
};

interface PaintedCellsProviderProps {
  children: ReactNode;
}

const PaintedCellsProvider: React.FC<PaintedCellsProviderProps> = ({ children }) => {
  const [paintedCells, setPaintedCells] = useState<{ rowIndex: number; cellIndex: number; }[]>([]);

  const handleCellPaint = (rowIndex: number, cellIndex: number) => {
    const newPaintedCells = [...paintedCells, { rowIndex, cellIndex }];
    setPaintedCells(newPaintedCells);
  };

  return (
    <PaintedCellsContext.Provider value={{ paintedCells, setPaintedCells, handleCellPaint }}>
      {children}
    </PaintedCellsContext.Provider>
  );
};

export default PaintedCellsProvider;