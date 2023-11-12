import React from 'react';
import Navigation from "../Navigation";
import AvatarComponent from "../AvatarComponent";

const Sidebar = () => {
    return (
        <div className={"col-span-1 min-h-screen sticky text-white bg-red-400 py-14 px-10"}>
            <AvatarComponent/>
            <Navigation/>
        </div>
    );
};

export default Sidebar;