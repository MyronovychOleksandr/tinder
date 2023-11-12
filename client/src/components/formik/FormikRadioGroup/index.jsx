import React from 'react';
import RadioGroup from "../../base/RadioGroup";
import {useField} from "formik";
import FormikErrorMessage from "../FormikErrorMessage";

const genderOptions = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Other', value: 'other' },
];

const FormikRadioGroup = ({name, type}) => {
    const [{value}, meta, {setValue, setTouched}] = useField({ name, type });
    const isError = meta.error && meta.touched;

    const handleGenderChange = (value) => {
        setValue(value);
    };

    return (
        <div>
            <RadioGroup
                options={genderOptions}
                selectedOption={value}
                onChange={handleGenderChange}
            />
            {isError && <FormikErrorMessage message={meta.error}/>}
        </div>
    );
};

export default FormikRadioGroup;