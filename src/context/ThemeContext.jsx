import { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export function ThemeContextProvider({ children }) {
  // darkMode set via useState. 
  const [darkMode, setDarkMode] = useState(() => {
    // Get theme from local storage, if null returns 'false', which is the default.
    const savedTheme = localStorage.getItem('darkMode');
    
    if (savedTheme !== null) {
      return savedTheme === 'true';
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // toggleDarkMode function changes darkMode via setDarkMode function
  function toggleDarkMode() {
    setDarkMode(prev => !prev);
  }

  // Once toggleDarkMode, run this:
  useEffect(() => {
    // Save darkMode to local storage as 'darkMode'
    localStorage.setItem('darkMode', darkMode);
    // Dependency, run when darkMode changes or on first render unless user changes.
  }, [darkMode]); 

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
