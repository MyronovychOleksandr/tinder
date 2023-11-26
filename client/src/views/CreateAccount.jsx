import React from 'react';
import CreateAccountForm from "../components/CreateAccountForm";
import {createUser} from "../services/users";
import {createAccountInitialValues} from "../validators/createAccount/userForm";
import {toast} from "react-toastify";

const CreateAccount = () => {

    const handleSubmit = (data) =>  {
        createUser(data)
            .then((res) => {
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