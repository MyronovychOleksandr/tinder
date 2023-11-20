import React from 'react';
import {Formik} from "formik";
import FormikTextInput from "../formik/FormikTextInput";
import {createAccountInitialValues, createAccountValidationSchema} from "../../validators/createAccount/userForm";
import {
    AGE_KEY, AGE_LABEL, AGE_PLACEHOLDER,
    FIRST_NAME_KEY,
    FIRST_NAME_LABEL,
    FIRST_NAME_PLACEHOLDER, GENDER_KEY,
    SECOND_NAME_KEY,
    SECOND_NAME_LABEL, SECOND_NAME_PLACEHOLDER, TAG_NAME, TAG_PLACEHOLDER
} from "../../constants/createAccount";
import FormikRadioGroup from "../formik/FormikRadioGroup";
import {Button} from '@mui/material';
import ImageUploader from "../ImageUploader";
import FormikSelect from "../formik/FormikSelect";
import ImageProcessing from "../base/ImageProcessing";

const genderOptions = [
    {label: 'Male', value: 'male'},
    {label: 'Female', value: 'female'},
    {label: 'Other', value: 'other'},
];

const CreateAccountForm = () => {

    const handleValidateSubmit = () => {

    }

    return (
        <Formik
            initialValues={createAccountInitialValues}
            validationSchema={createAccountValidationSchema}
            onSubmit={handleValidateSubmit}
            validateOnMount
        >
            {({errors, touched, handleSubmit, setFieldValue, values, isValid, ...p}) => {
                return (<form onSubmit={handleSubmit}>
                    <ImageUploader/>
                    <FormikTextInput
                        name={FIRST_NAME_KEY}
                        label={FIRST_NAME_LABEL}
                        placeholder={FIRST_NAME_PLACEHOLDER}
                    />
                    <FormikTextInput
                        name={SECOND_NAME_KEY}
                        label={SECOND_NAME_LABEL}
                        placeholder={SECOND_NAME_PLACEHOLDER}
                    />

                    <FormikTextInput
                        type={"number"}
                        name={AGE_KEY}
                        label={AGE_LABEL}
                        placeholder={AGE_PLACEHOLDER}
                    />
                    <FormikRadioGroup
                        name={GENDER_KEY}
                        options={genderOptions}
                    />
                    <FormikSelect
                        name={TAG_NAME}
                        placeholder={TAG_PLACEHOLDER}
                    />
                    <div className={"flex justify-end"}>
                        <Button variant="contained" type={"submit"}>
                            Submit
                        </Button>
                    </div>

                    <ImageProcessing/>
                </form>)
            }}

        </Formik>
    );
};

export default CreateAccountForm;