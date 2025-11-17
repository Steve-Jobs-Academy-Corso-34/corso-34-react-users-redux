import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App.tsx";
import ThemeProvider from "./providers/ThemeProvider.tsx";

createRoot(document.getElementById("root")!).render(
    // ThemeProvider - Provider per gestire il tema
    <ThemeProvider>
        <App />
    </ThemeProvider>
);
