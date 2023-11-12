import React, {useState} from 'react';
import Select from 'react-select';

const SelectComponent = ({options, placeholder, onSelect}) => {
    const [selectedOption, setSelectedOption] = useState([]);

    const handleChange = (selectedOption) => {
        setSelectedOption(selectedOption);
        onSelect(selectedOption);
    };

    return (
        <div>
            <Select
                isMulti
                value={selectedOption}
                onChange={handleChange}
                options={options}
                isSearchable
                placeholder={placeholder}
            />
        </div>
    );
};

export default SelectComponent;