import React, { useState } from 'react';
import Slider from "@mui/material/Slider";

function valuetext(value) {
    return `${value}°C`;
}

function DateRangeSlider({onGetAgeRange}) {
    const [value, setValue] = useState([18, 22]);

    const handleChange = (event, newValue) => {
        if((newValue[0] +4) > newValue[1]) return
        setValue(newValue);
        onGetAgeRange(newValue)
    };

    return (
        <div className="bg-white p-4 shadow-lg rounded-md">
            <Slider
                getAriaLabel={() => 'Temperature range'}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                min={18}

            />
        </div>
    );
}

export default DateRangeSlider;