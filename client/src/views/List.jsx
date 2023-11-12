import React from 'react';
import PageTitle from "../components/base/PageTitle";
import DropDown from "../components/base/DropDown";
import RangeSlider from "../components/base/DateRangeSlider";
import Dropzone from "../components/base/Dropzone";
import TextField from "../components/base/TextField";
import RadioGroup from "../components/base/RadioGroup";

const List = () => {
    return (
        <div>
            <PageTitle>List</PageTitle>
            <DropDown/>
            <RangeSlider/>
            <Dropzone/>
            <TextField/>

        </div>
    );
};

export default List;