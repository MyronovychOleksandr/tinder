import React from 'react';
import {Formik} from "formik";
import {loginInitialValues, loginValidationSchema} from "../../validators/auth/authForm";
import FormikTextInput from "../formik/FormikTextInput";
import {
    EMAIL_KEY,
    EMAIL_LABEL,
    EMAIL_PLACEHOLDER,
    PASSWORD_KEY,
    PASSWORD_LABEL,
    PASSWORD_PLACEHOLDER
} from "../../constants/createAccount";
import {Button} from "@mui/material";

const LoginForm = ({onSubmit}) => {
    const handleValidateSubmit = (values) => {
        onSubmit(values)
    }

    return (
        <Formik
            initialValues={loginInitialValues}
            validationSchema={loginValidationSchema}
            onSubmit={handleValidateSubmit}
            validateOnMount
            enableReinitialize
        >
            {({errors, touched, handleSubmit, setFieldValue, values, isValid, ...p}) => {
                return (<form onSubmit={handleSubmit}>
                    <FormikTextInput
                        name={EMAIL_KEY}
                        label={EMAIL_LABEL}
                        placeholder={EMAIL_PLACEHOLDER}
                    />
                    <FormikTextInput
                        name={PASSWORD_KEY}
                        label={PASSWORD_LABEL}
                        placeholder={PASSWORD_PLACEHOLDER}
                    />
                    <div className={"flex justify-end"}>
                        <Button variant="contained" type={"submit"}>
                            Sign in
                        </Button>
                    </div>
                </form>)
            }}
        </Formik>
    );
};

export default LoginForm;