import React from 'react';
import Sidebar from "../Sidebar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = ({children}) => {

    return (
        <div className={"grid grid-cols-4 h-full"}>
            <Sidebar/>
            <div className={"col-span-3 p-14"}>
                {children}
            </div>
            <ToastContainer />
        </div>
    );
};

export default Layout;