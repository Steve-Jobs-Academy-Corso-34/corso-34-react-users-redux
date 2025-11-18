import ShowHideButton from "../components/User/ShowHideButton/ShowHideButton";
import UserList from "../components/User/UserList/UserList";
import { useDispatch, useSelector } from "react-redux";
import { selectUsers, setUsersHidden } from "../stores/slices/usersSlice";

const Users = () => {
    const users = useSelector(selectUsers);
    const dispatch = useDispatch();

    return (
        <div className="users-page">
            <ShowHideButton
                show={users.hidden}
                setShow={(value) => dispatch(setUsersHidden(value))}
            />

            {!users.hidden && <UserList />}
        </div>
    );
};

export default Users;
