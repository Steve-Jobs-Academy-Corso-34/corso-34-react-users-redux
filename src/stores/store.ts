import { configureStore } from "@reduxjs/toolkit";

import themeReducer from "./slices/themeSlice";
import usersReducer from "./slices/usersSlice";

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        users: usersReducer,
    },
});

// Definizione dei tipi per lo store e il dispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
