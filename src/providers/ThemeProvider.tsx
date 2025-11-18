import { useEffect, useState } from "react";
import ThemeContext, { Theme } from "../contexts/ThemeContext";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    // State per gestire il tema corrente
    // Stato iniziale con funzione che ritorna il valore iniziale
    const [theme, setTheme] = useState<Theme>(() => {
        // Carica il tema dal localStorage all'inizio
        const savedTheme = localStorage.getItem("app-theme") as Theme | null;
        // Imposta il tema salvato o il tema di default (Light)
        return savedTheme || Theme.Light;
    });

    // Funzione per cambiare il tema
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === Theme.Light ? Theme.Dark : Theme.Light));
    };

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
