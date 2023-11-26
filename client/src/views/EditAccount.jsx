import {editUser, getUserById} from "../services/users";
import CreateAccountForm from "../components/CreateAccountForm";
import {createAccountInitialValues} from "../validators/createAccount/userForm";
import React, {useEffect, useState} from "react";
import { toast } from 'react-toastify';

const EditAccount = () => {
    const [initialValues, setInitialValues] = useState(createAccountInitialValues)

    useEffect(() => {
        getUserById()
            .then(({data}) => {
                const {user} = data
                setInitialValues({
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    age: user.age,
                    gender: user.gender,
                    tags: user.tags
                })
            })
            .catch((e) => toast.error(e.message))
    }, [])

    const handleSubmit = (data) => {
        editUser(data)
            .then((res) => {
            })
            .catch((e) => toast.error(e.message))
    }

    return (
        <div>
            <CreateAccountForm
                onSubmit={handleSubmit}
                initialValues={initialValues}
            />
        </div>
    );
};

export default EditAccount;