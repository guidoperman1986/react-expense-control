import { MyRoutes } from "./index";
import { createContext, useState } from 'react';
import { Light, Dark } from './index';
import { ThemeProvider } from 'styled-components';

interface ThemeContextType {
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  theme: string;
}

export const ThemeContext = createContext<ThemeContextType | null>(null);

function App() {
  const [theme, setTheme] = useState('light');
  const themeStyle = theme === 'light' ? Light : Dark;

  return (
    <>
      <ThemeContext.Provider value={{ setTheme, theme }}>
        <ThemeProvider theme={themeStyle}>
          <MyRoutes />

        </ThemeProvider>

      </ThemeContext.Provider>
    </>
  )
}

export default App
