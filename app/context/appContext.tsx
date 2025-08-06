'use client'; // Important for context to work with client components

import { createContext, useContext, useState } from 'react';

const MyContext = createContext({});

export const AppContextProvider = ({ children }:any ) => {
  const [user,setUser] = useState({});

  return (
    <MyContext.Provider value={{ user,setUser }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => useContext(MyContext);
