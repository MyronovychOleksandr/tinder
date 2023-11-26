import React from 'react';
import SelectComponent from "../../base/Select";
import {TAGS_LIST} from "../../../constants/tags";
import {useField} from "formik";
import FormikErrorMessage from "../FormikErrorMessage";

const FormikSelect = ({name, placeholder}) => {
    const [{value}, meta, {setValue}] = useField({ name, placeholder });
    const isError = meta.error && meta.touched;

    const handleSelect = (selectedOption) => {
        setValue(selectedOption)
    };

    return (
        <div className={"mb-4"}>
            <SelectComponent values={value} options={TAGS_LIST} placeholder={placeholder} onSelect={handleSelect} />
            {isError && <FormikErrorMessage message={meta.error}/>}
        </div>
    );
};

export default FormikSelect;