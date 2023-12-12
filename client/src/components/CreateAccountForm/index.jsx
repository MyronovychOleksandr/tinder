import React from 'react';
import {Formik} from "formik";
import FormikTextInput from "../formik/FormikTextInput";
import {createAccountValidationSchema} from "../../validators/createAccount/userForm";
import {
    AGE_KEY,
    AGE_LABEL,
    AGE_PLACEHOLDER, COORDINATES,
    EMAIL_KEY,
    EMAIL_LABEL,
    EMAIL_PLACEHOLDER,
    FIRST_NAME_KEY,
    FIRST_NAME_LABEL,
    FIRST_NAME_PLACEHOLDER,
    GENDER_KEY,
    GENDER_OPTIONS,
    LAST_NAME_KEY,
    LAST_NAME_LABEL,
    LAST_NAME_PLACEHOLDER,
    PASSWORD_KEY,
    PASSWORD_LABEL,
    PASSWORD_PLACEHOLDER,
    TAG_NAME,
    TAG_PLACEHOLDER
} from "../../constants/createAccount";
import FormikRadioGroup from "../formik/FormikRadioGroup";
import {Button} from '@mui/material';
import FormikSelect from "../formik/FormikSelect";
import ImageProcessing from "../base/ImageProcessing";
import LocationComponent from "../LocationComponent";

const CreateAccountForm = ({initialValues, onSubmit}) => {


    const handleValidateSubmit = (values) => {
        onSubmit(values)
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={createAccountValidationSchema}
            onSubmit={handleValidateSubmit}
            validateOnMount
            enableReinitialize
        >
            {({errors, touched, handleSubmit, setFieldValue, values, isValid, ...p}) => {
                return (<form onSubmit={handleSubmit}>
                    <ImageProcessing
                        index={0}
                    />
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
                    <FormikTextInput
                        name={FIRST_NAME_KEY}
                        label={FIRST_NAME_LABEL}
                        placeholder={FIRST_NAME_PLACEHOLDER}
                    />
                    <FormikTextInput
                        name={LAST_NAME_KEY}
                        label={LAST_NAME_LABEL}
                        placeholder={LAST_NAME_PLACEHOLDER}
                    />
                    <FormikTextInput
                        type={"number"}
                        name={AGE_KEY}
                        label={AGE_LABEL}
                        placeholder={AGE_PLACEHOLDER}
                    />
                    <FormikRadioGroup
                        name={GENDER_KEY}
                        options={GENDER_OPTIONS}
                    />
                    <FormikSelect
                        name={TAG_NAME}
                        placeholder={TAG_PLACEHOLDER}
                    />
                    <LocationComponent
                        name={COORDINATES}
                    />
                    <div className={"flex justify-end"}>
                        <Button variant="contained" type={"submit"}>
                            Submit
                        </Button>
                    </div>
                </form>)
            }}
        </Formik>
    );
};

export default CreateAccountForm;