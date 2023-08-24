import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [isLogged, setIsLogged] = useState(() => {
        const storedIsLogged = localStorage.getItem('isLogged');
        return storedIsLogged !== null ? JSON.parse(storedIsLogged) : false;
      });
    
      useEffect(() => {
        localStorage.setItem('isLogged', JSON.stringify(isLogged));
      }, [isLogged]);

      const [username, setUsername] = useState(() => {
        const storedUsername = localStorage.getItem('username');
        return storedUsername !== null ? JSON.parse(storedUsername) : false;
      });

      useEffect(() => {
        localStorage.setItem('username', JSON.stringify(username));
      }, [username]);

  return (
    <AppContext.Provider value={{ isLogged, setIsLogged, username, setUsername }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};