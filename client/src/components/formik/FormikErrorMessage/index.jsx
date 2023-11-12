import React from 'react';

const FormikErrorMessage = ({message}) => {
    return (
        <span className="text-xs text-red-500">{message}</span>
    );
};

export default FormikErrorMessage;