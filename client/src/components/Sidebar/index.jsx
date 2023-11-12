import React from 'react';
import Navigation from "../Navigation";

const Sidebar = () => {
    return (
        <div className={"col-span-1 h-screen sticky text-white bg-red-400 py-14 px-10"}>
            <Navigation/>
        </div>
    );
};

export default Sidebar;