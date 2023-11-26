import React, {useEffect, useState} from 'react';
import AsyncSelect from 'react-select/async';

const SelectComponent = ({values, options, placeholder, onSelect}) => {
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
                isMulti
                value={selectedOption}
                onChange={handleChange}
                // options={options}
                defaultOptions={options}
                isSearchable
                placeholder={placeholder}
            />
        </div>
    );
};

export default SelectComponent;