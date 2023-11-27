import React from 'react';
import RadioInput from './RadioInput';

const RadioGroup = ({options, selectedOption, onChange, className = ""}) => {

    return (
        <div className={className}>
            {options?.map((option) => (

                <RadioInput
                    key={option.value}
                    label={option.label}
                    value={option.value}
                    checked={selectedOption === option.value}
                    onChange={onChange}
                />
            ))}
        </div>
    );
};

export default RadioGroup;
