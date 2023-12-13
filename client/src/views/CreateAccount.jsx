import React from 'react';
import CreateAccountForm from "../components/CreateAccountForm";
import {createUser} from "../services/users";
import {createAccountInitialValues} from "../validators/createAccount/userForm";
import {toast} from "react-toastify";
import {login} from "../services/auth";
import {useAuth} from "../contexts/AuthContext";
import {handleAuthentication} from "../utils/handleAuthentication";

const CreateAccount = () => {
    const {updateToken} = useAuth();

    const handleSubmit = (data) => {
        createUser(data)
            .then(() => {
                login({email: data.email, password: data.password})
                    .then(({data}) => {
                        handleAuthentication(data.token, updateToken)
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