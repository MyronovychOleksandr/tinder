import React from 'react';
import LoginForm from "../components/LoginForm";
import {login} from "../services/auth";
import {toast} from "react-toastify";
import Cookies from 'js-cookie';
import {useAuth} from "../contexts/AuthContext";
import { redirect } from "react-router-dom";

const Login = () => {
    const {updateToken} = useAuth();

    const handleSubmit = (data) => {
        login(data)
            .then(({data}) => {
                const expirationDate = new Date();
                expirationDate.setTime(expirationDate.getTime() + 60 * 60 * 1000);
                Cookies.set('token', data.token, { expires: expirationDate });
                updateToken(data.token)
                redirect("/list")
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