'use client';

import React, { createContext, useState, useContext } from 'react';

interface IGlobalContext {
  currentPath: string;
  setCurrentPath: (path: string) => void;
}
const initialGlobalState: IGlobalContext = {
  currentPath: '/',
  setCurrentPath: () => {},
};

const GlobalContext = createContext<IGlobalContext>(initialGlobalState);
const GlobalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [globalState, setGlobalState] = useState<IGlobalContext>(initialGlobalState);

  const setCurrentPath = (path: string) => {
    setGlobalState({ ...globalState, currentPath: path });
  };

  return (
    <GlobalContext.Provider value={{ ...globalState, setCurrentPath }}>
      {children}
    </GlobalContext.Provider>
  );
};

function useGlobal() {
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error('useGlobal must be used within a GlobalProvider');
  }

  return context;
}

export { GlobalProvider, useGlobal };
