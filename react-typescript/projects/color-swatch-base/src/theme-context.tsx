import React from 'react';

type Themes = {
  [key: string]: React.CSSProperties;
};
// type Themes = Record<string, React.CSSProperties>;

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

const themes = {
  light: {
    backgroundColor: 'white',
    color: 'black'
  },
  dark: {
    backgroundColor: 'black',
    color: 'white'
  }
};

export const ThemeContext = React.createContext<Themes>(themes);

export const ThemeContextProvider = ({
  children
}: ThemeContextProviderProps) => {
  return (
    <ThemeContext.Provider value={themes}>{children}</ThemeContext.Provider>
  );
};
