import { useState, useEffect, useMemo, useCallback } from "react";

import axios from "axios";

import UserItem from "../UserItem/UserItem";
import type { UserType } from "../../../types/users";
import { useDispatch, useSelector } from "react-redux";
import {
    selectUsers,
    setUsersLoading,
    setUsers,
} from "../../../stores/slices/usersSlice";

const UserList: React.FC = () => {
    const users = useSelector(selectUsers);
    const dispatch = useDispatch();

    //useState<STATE_TYPE>(INITIAL_VALUE)
    const [currentUserIndex, setCurrentUserIndex] = useState<number | undefined>();
    //const [users, setUsers] = useState<UserType[]>();

    const fetchUsers = useCallback(async () => {
        if (users.loading || users.data?.length) return;

        /* try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await response.json();

            setUsers(data);
        } catch (error) {
            console.log(error);
        } finally {
            console.log("fetching users completed");
        } */

        dispatch(setUsersLoading(true));

        await axios("https://jsonplaceholder.typicode.com/users")
            .then(({ data }) => dispatch(setUsers(data)))
            .catch((error) => console.log(error))
            .finally(() => dispatch(setUsersLoading(false)));
    }, [users, dispatch]);

    //useEffect(CALLBACK, DEPENDENCIES_ARRAY)
    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);

    // Utente selezionato Memoized (memorizzato)
    //useMemo(CALLBACK, DEPENDENCIES_ARRAY)
    const memoizedSelectedUser = useMemo(() => {
        if (!users?.data.length || currentUserIndex === undefined) return null;

        console.log("Calculating selected user...");

        return users.data[currentUserIndex].name;
    }, [currentUserIndex, users]);

    // Render
    return (
        <div>
            <h2>User List</h2>
            <p>Current User Index: {currentUserIndex ?? "N/A"}</p>

            <hr />

            {/* Utilizzo del memoizedSelectedUser - Cambia solo se users o currentUserIndex cambiano */}
            <p>SELECTED USER: {memoizedSelectedUser}</p>

            {!users.loading ? (
                users.data.map((user: UserType, i: number) => {
                    return (
                        <UserItem
                            user={user}
                            i={i}
                            key={user.id}
                            isSelected={currentUserIndex === i}
                            onClick={() => setCurrentUserIndex(i)}
                        />
                    );
                })
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default UserList;
