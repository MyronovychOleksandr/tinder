import React from 'react';

const TextField = ({
                       label,
                       value,
                       onChange,
                       onBlur,
                       placeholder,
                       type = "text"
                   }) => {
    return (
        <div>
            <label className="block text-sm font-bold text-gray-600">{label}</label>
            <input
                type={type}
                className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:border-blue-500"
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                placeholder={placeholder}
            />
        </div>
    );
};

export default TextField;