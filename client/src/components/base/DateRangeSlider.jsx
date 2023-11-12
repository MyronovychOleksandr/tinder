import React, { useState } from 'react';
import Slider from "@mui/material/Slider";

function valuetext(value) {
    return `${value}°C`;
}

function DateRangeSlider() {
    const [value, setValue] = React.useState([20, 37]);

    const handleChange = (event, newValue) => {
        console.log("vv newValue ", newValue)
        if((newValue[0] +4) > newValue[1]) return
        setValue(newValue);
    };

    return (
        <div className="bg-white p-4 shadow-lg rounded-md">
            <Slider
                getAriaLabel={() => 'Temperature range'}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}

            />
        </div>
    );
}

export default DateRangeSlider;