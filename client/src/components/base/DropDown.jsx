import React, { useState } from 'react';

function DropDown({ options }) {
    const [selectedOption, setSelectedOption] = useState('');

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div className="p-4 border rounded-md">
            <label htmlFor="filter" className="block mb-2">Оберіть фільтр:</label>
            <select
                id="filter"
                value={selectedOption}
                onChange={handleSelectChange}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-400"
            >
                <option value="">Без фільтру</option>
                {options?.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default DropDown;