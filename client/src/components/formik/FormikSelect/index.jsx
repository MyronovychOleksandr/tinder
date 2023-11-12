import React from 'react';
import SelectComponent from "../../base/Select";
import {TAGS_LIST} from "../../../constants/tags";
import {useField} from "formik";
import FormikErrorMessage from "../FormikErrorMessage";

const FormikSelect = ({name, placeholder}) => {
    const [{value}, meta, {setValue, setTouched}] = useField({ name, placeholder });
    const isError = meta.error && meta.touched;

    const handleSelect = (selectedOption) => {
        const tagsValueArray = selectedOption.map((item) => item.value)
        setValue(tagsValueArray)
    };

    return (
        <div className={"mb-4"}>
            <SelectComponent options={TAGS_LIST} placeholder={placeholder} onSelect={handleSelect} />
            {isError && <FormikErrorMessage message={meta.error}/>}
        </div>
    );
};

export default FormikSelect;