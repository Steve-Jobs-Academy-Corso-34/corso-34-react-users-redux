import { createContext } from "react";

// Definizione dei temi disponibili con un enum
export enum Theme {
    Light = "light",
    Dark = "dark",
}

// Definizione del tipo per il contesto del tema
type ThemeContextType = {
    theme: Theme;
    toggleTheme: () => void;
};

// Crea il contesto del tema con valore iniziale null
const ThemeContext = createContext<ThemeContextType | null>(null);

export default ThemeContext;
