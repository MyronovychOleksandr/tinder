import React from 'react';

const RadioInput = ({ label, value, checked, onChange }) => {
    return (
        <div className="mb-2">
            <label className="inline-flex items-center cursor-pointer">
                <input
                    type="radio"
                    className="form-radio text-blue-500 cursor-pointer"
                    value={value}
                    checked={checked}
                    onChange={() => onChange(value)}
                />
                <span className="ml-2">{label}</span>
            </label>
        </div>
    );
};

export default RadioInput;
