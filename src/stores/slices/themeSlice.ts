import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { Theme } from "../../enums/theme";

type ThemeState = {
    currentTheme: Theme;
};

const initialState: ThemeState = {
    currentTheme: Theme.Light,
};

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.currentTheme =
                state.currentTheme === Theme.Light ? Theme.Dark : Theme.Light;
        },
        setTheme: (state, action: PayloadAction<Theme>) => {
            state.currentTheme = action.payload;
        },
    },
});

export const selectTheme = (state: RootState) => state.theme.currentTheme;

export const { toggleTheme, setTheme } = themeSlice.actions;

export default themeSlice.reducer;
