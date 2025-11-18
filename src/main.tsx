import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./stores/store.ts";

createRoot(document.getElementById("root")!).render(
    // Redux Provider - Provider per gestire gli stati globali
    <Provider store={store}>
        <App />
    </Provider>
);
