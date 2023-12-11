import {editUser, getMe} from "../services/users";
import {editAccountInitialValues} from "../validators/createAccount/userForm";
import React, {useEffect, useState} from "react";
import { toast } from 'react-toastify';
import EditAccountForm from "../components/EditAccountForm";

const EditAccount = () => {
    const [initialValues, setInitialValues] = useState(editAccountInitialValues)

    useEffect(() => {
        getMe()
            .then(({data}) => {
                console.log("vv data ", data)
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
            <EditAccountForm
                onSubmit={handleSubmit}
                initialValues={initialValues}
            />
        </div>
    );
};

export default EditAccount;