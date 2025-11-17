import { useState } from "react";

import ShowHideButton from "../components/User/ShowHideButton/ShowHideButton";
import UserList from "../components/User/UserList/UserList";

const Users = () => {
    const [showUserList, setShowUserList] = useState<boolean>(true);

    return (
        <div className="users-page">
            <ShowHideButton show={showUserList} setShow={setShowUserList} />

            {showUserList && <UserList />}
        </div>
    );
};

export default Users;
