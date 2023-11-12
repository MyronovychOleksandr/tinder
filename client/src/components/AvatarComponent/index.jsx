import React from 'react';
import {Avatar} from '@mui/material';
import {NavLink} from "react-router-dom";

const AvatarComponent = () => {
    return (
        <NavLink to={"/create-account"}>
            <div className={"flex items-center mb-4 rounded-3xl hover:bg-red-500 p-2 cursor-pointer"}>
                <Avatar src={"https://img.freepik.com/premium-vector/avatar-icon002_750950-52.jpg"} className={"mr-2"}/>
                <div>Account</div>
            </div>
        </NavLink>
    );
};

export default AvatarComponent;