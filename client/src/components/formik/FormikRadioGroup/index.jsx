import React from 'react';
import RadioGroup from "../../base/RadioGroup";
import {useField} from "formik";
import FormikErrorMessage from "../FormikErrorMessage";

const FormikRadioGroup = ({name, type, options}) => {
    const [{value}, meta, {setValue}] = useField({ name, type });
    const isError = meta.error && meta.touched;

    const handleGenderChange = (value) => {
        setValue(value);
    };

    return (
        <div>
            <RadioGroup
                options={options}
                selectedOption={value}
                onChange={handleGenderChange}
            />
            {isError && <FormikErrorMessage message={meta.error}/>}
        </div>
    );
};

export default FormikRadioGroup;