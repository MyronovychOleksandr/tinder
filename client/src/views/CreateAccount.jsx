import React from 'react';
import CreateAccountForm from "../components/CreateAccountForm";
import {createUser} from "../services/users";
import {createAccountInitialValues} from "../validators/createAccount/userForm";
import {toast} from "react-toastify";
import {login} from "../services/auth";
import Cookies from "js-cookie";
import {redirect} from "react-router-dom";
import {useAuth} from "../contexts/AuthContext";

const CreateAccount = () => {
    const {updateToken} = useAuth();

    const handleSubmit = (data) => {
        createUser(data)
            .then(() => {
                login({email: data.email, password: data.password})
                    .then(({data}) => {
                        const expirationDate = new Date();
                        expirationDate.setTime(expirationDate.getTime() + 60 * 60 * 1000);
                        Cookies.set('token', data.token, { expires: expirationDate });
                        updateToken(data.token)
                        redirect("/list")
                    })
            })
            .catch((e) => toast.error(e.message))

    }

    return (
        <div>
            <CreateAccountForm
                onSubmit={handleSubmit}
                initialValues={createAccountInitialValues}
            />
        </div>
    );
};

export default CreateAccount;