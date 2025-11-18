import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

import type { UserType } from "../../types/users";

type UsersState = {
    hidden: boolean;
    data: UserType[];
    loading: boolean;
};

const initialState: UsersState = {
    hidden: false,
    data: [],
    loading: false,
};

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        setUsers: (state, action: PayloadAction<UserType[]>) => {
            state.data = action.payload;
        },
        setUsersLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setUsersHidden: (state, action: PayloadAction<boolean>) => {
            state.hidden = action.payload;
        },
    },
});

export const selectUsers = (state: RootState) => state.users;

export const { setUsers, setUsersLoading, setUsersHidden } = usersSlice.actions;

export default usersSlice.reducer;
