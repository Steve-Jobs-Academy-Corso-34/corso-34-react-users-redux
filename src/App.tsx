import "./App.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";

import Users from "./pages/Users";
import useTheme from "./hooks/useTheme";

const App = () => {
    // Ottiene il tema corrente dal contesto
    const { theme } = useTheme();

    return (
        // Contenitore principale con classe dinamica in base al tema (light-theme / dark-theme)
        <div className={`app-container ${theme}-theme`}>
            {/* Browser Router - Provider per gestire le rotte */}
            <BrowserRouter>
                <Header />

                {/* Routes - Definisce le rotte con i componenti Pagina */}
                <Routes>
                    <Route path="/" element={<h2>Home Page</h2>} />
                    <Route path="/users" element={<Users />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
