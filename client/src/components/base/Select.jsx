import React, {useEffect, useState} from 'react';
import AsyncSelect from 'react-select/async';

const SelectComponent = ({values, options, placeholder, onSelect, defaultValue, isMulti = true}) => {
    const [selectedOption, setSelectedOption] = useState( []);

    useEffect(() => {
        if(!values) return
        setSelectedOption(values)
    }, [values])

    const handleChange = (selectedOption) => {
        setSelectedOption(selectedOption);
        onSelect(selectedOption);
    };

    return (
        <div>
            <AsyncSelect
                isMulti={isMulti}
                value={selectedOption}
                onChange={handleChange}
                defaultInputValue={defaultValue}
                defaultOptions={options}
                isSearchable
                placeholder={placeholder}
            />
        </div>
    );
};

export default SelectComponent;