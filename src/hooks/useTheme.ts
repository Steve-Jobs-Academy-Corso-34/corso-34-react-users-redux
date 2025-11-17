import { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";

// Custom hook per accedere al contesto del tema
const useTheme = () => {
    // Ottiene il contesto del tema
    const ctx = useContext(ThemeContext);

    // Verifica che il contesto non sia null
    if (!ctx) throw new Error("useTheme must be used within a ThemeProvider");

    // Ritorna il contesto (theme e toggleTheme)
    return ctx; // { theme, toggleTheme }
};

export default useTheme;
