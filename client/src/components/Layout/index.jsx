import React from 'react';
import Sidebar from "../Sidebar";

const Layout = ({children}) => {
    return (
        <div className={"grid grid-cols-4 h-full"}>
            <Sidebar/>
            <div className={"col-span-3 p-14"}>
                {children}
            </div>
        </div>
    );
};

export default Layout;