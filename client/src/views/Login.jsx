import React, {useContext} from 'react';
import LoginForm from "../components/LoginForm";
import {login} from "../services/auth";
import {toast} from "react-toastify";
import Cookies from 'js-cookie';
import {useAuth} from "../contexts/AuthContext";

const Login = () => {
    const {updateToken} = useAuth();

    const handleSubmit = (data) => {
        login(data)
            .then(({data}) => {
                Cookies.set('token', data.token);
                updateToken(data.token)
            })
            .catch((e) => toast.error(e.message))
    }

    return (
        <div className="max-w-screen-md mx-auto p-8 bg-white rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <LoginForm onSubmit={handleSubmit}/>
        </div>
    );
};

export default Login;