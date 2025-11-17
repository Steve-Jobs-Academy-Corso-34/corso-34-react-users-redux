import { useEffect, useState } from "react";
import ThemeContext, { Theme } from "../contexts/ThemeContext";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    // State per gestire il tema corrente
    const [theme, setTheme] = useState<Theme>(Theme.Light);

    // Funzione per cambiare il tema
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === Theme.Light ? Theme.Dark : Theme.Light));
    };

    useEffect(() => {
        // Carica il tema dal localStorage all'inizio
        const savedTheme = localStorage.getItem("app-theme") as Theme | null;
        setTheme(savedTheme || Theme.Light);
    }, []);

    useEffect(() => {
        // Salva il tema nel localStorage quando cambia
        localStorage.setItem("app-theme", theme);
    }, [theme]);

    // Valore fornito dal contesto
    const value = { theme, toggleTheme };

    // Provider che avvolge i componenti figli
    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
