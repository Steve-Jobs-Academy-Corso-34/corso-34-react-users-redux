import { Link } from "react-router-dom";

import "./Header.scss";
import useTheme from "../../hooks/useTheme";

const Header = () => {
    // Ottiene la funzione per cambiare il tema dal contesto
    const { theme, toggleTheme } = useTheme();

    return (
        // Barra di navigazione
        <nav className="header">
            {/* Link per andare alla pagina Home */}
            <Link to="/" className="header-link">
                Home
            </Link>

            {/* Link per andare alla pagina Users */}
            <Link to="/users" className="header-link">
                Users
            </Link>

            {/* Bottone per cambiare il tema */}
            <button onClick={toggleTheme}>Switch Theme (C.T. {theme})</button>
        </nav>
    );
};
export default Header;
