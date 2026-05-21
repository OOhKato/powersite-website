import { createContext, useContext, useState } from 'react'

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [light, setLight] = useState(false)
  return (
    <ThemeContext.Provider value={{ light, toggle: () => setLight(l => !l) }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
