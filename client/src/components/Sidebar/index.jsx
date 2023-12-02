import React from 'react';
import Navigation from "../Navigation";
import AvatarComponent from "../AvatarComponent";
import {useAuth} from "../../contexts/AuthContext";

const Sidebar = () => {
    const {token} = useAuth();

    return (
        <div className={"col-span-1 min-h-screen sticky text-white bg-red-400 py-14 px-10"}>
            {token && <AvatarComponent/>}
            <Navigation/>
        </div>
    );
};

export default Sidebar;