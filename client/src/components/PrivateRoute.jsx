import {Navigate} from "react-router-dom";
import React from "react";

const PrivateRoute = ({ isAuth, children }) => {

    return isAuth ? children : <Navigate to="/login" />;
}

export default PrivateRoute