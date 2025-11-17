import React, { useEffect } from "react";
import type { UserType } from "../../../types/users";

interface UserItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    user: UserType;
    i: number;
    isSelected?: boolean;
}

const UserItem: React.FC<UserItemProps> = React.memo(
    ({ user: { id, name }, i, isSelected, ...props }) => {
        useEffect(() => {
            console.log(`UserItem ${name} mounted`);
        });

        return (
            <button {...props}>
                <p>Index: {i}</p>
                <p>ID: {id}</p>
                <p>Name: {name} </p>
                {isSelected && <p>(Selected)</p>}
            </button>
        );
    },
    (prevProps, nextProps) => {
        // console.log("Comparing UserItem props:", prevProps, nextProps);

        return prevProps.isSelected === nextProps.isSelected;
    }
);

export default UserItem;
