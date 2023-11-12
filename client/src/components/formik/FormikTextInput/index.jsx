import React from 'react';
import TextField from "../../base/TextField";
import {useField} from "formik";
import FormikErrorMessage from "../FormikErrorMessage";

const FormikTextInput = ({name, label, placeholder, type}) => {
    const [{value}, meta, {setValue, setTouched}] = useField({ name, placeholder, type });
    const isError = meta.error && meta.touched;

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const handelBlur = () => {
        setTouched(true)
    }

    return (
        <div className={"mb-4"}>
            <TextField
                type={type}
                label={label}
                placeholder={placeholder}
                onChange={handleChange}
                onBlur={handelBlur}
                value={value}
            />
            {isError && <FormikErrorMessage message={meta.error}/>}
        </div>
    );
};

export default FormikTextInput;