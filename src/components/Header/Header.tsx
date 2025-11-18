import { Link } from "react-router-dom";

import "./Header.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectTheme, toggleTheme } from "../../stores/slices/themeSlice";

const Header = () => {
    const theme = useSelector(selectTheme);
    const dispatch = useDispatch();

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
            <button onClick={() => dispatch(toggleTheme())}>
                Switch Theme (C.T. {theme})
            </button>
        </nav>
    );
};
export default Header;
