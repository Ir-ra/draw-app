import React, { ReactNode, createContext, useContext, useState } from 'react';

type RefreshContextType = {
  refresh: boolean;
  setRefresh: React.Dispatch<React.SetStateAction<boolean>>;
};

const RefreshContext = createContext<RefreshContextType | undefined>(undefined);

export const useRefresh = () => {
  const context = useContext(RefreshContext);
  if (!context) {
    throw new Error();
  }
  return context;
};

interface RefreshProviderProps {
  children: ReactNode;
}

const RefreshProvider: React.FC<RefreshProviderProps> = ({ children }) => {
  const [refresh, setRefresh] = useState(false);


  return (
    <RefreshContext.Provider value={{ refresh, setRefresh }}>
      {children}
    </RefreshContext.Provider>
  );
};

export default RefreshProvider;