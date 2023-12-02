import {Navigate} from "react-router-dom";
import React from "react";

const RestrictedRoute = ({ isAuth, children }) => {

    return isAuth ? <Navigate to="/list" /> : children;
}

export default RestrictedRoute