import React, {useEffect, useState} from 'react';
import PageTitle from "../components/base/PageTitle";
import DropDown from "../components/base/DropDown";
import RangeSlider from "../components/base/DateRangeSlider";
import Dropzone from "../components/base/Dropzone";
import TextField from "../components/base/TextField";
import {getAllUsers} from "../services/users";
import {toast} from "react-toastify";
import RadioGroup from "../components/base/RadioGroup";
import {GENDER_OPTIONS_FILTER, TAG_PLACEHOLDER} from "../constants/createAccount";
import {TAGS_LIST} from "../constants/tags";
import SelectComponent from "../components/base/Select";
import {Button} from "@mui/material";
import {getTagsQueryString} from "../utils/getTagsQueryString";
import Pagination from "@mui/material/Pagination";

const List = () => {
    const [users, setUsers] = useState([])
    const [ageRange, setAgeRange] = useState([18, 22])
    const [gender, setGender] = useState('')
    const [tags, setTags] = useState([])
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)

    useEffect(() => {
        handleGetUsers()
    }, [page])

    const handleGetUsers = async () => {
        try {
            const params = {
                minAge: ageRange[0],
                maxAge: ageRange[1],
                tags: getTagsQueryString(tags),
                pageSize: 3,
                page,
                gender
            }
            const {data} = await getAllUsers(params)
            const {users} = data.data
            const {totalPages} = data.data

            setUsers(users)
            setTotalPages(totalPages)
        } catch (e) {
            toast.error(e.message)
        }
    }

    const handleSubmit = () => {
        handleGetUsers()
    }

    const handleGetAgeRange = (data) => {
        setAgeRange(data)
    }

    const handleGenderChange = (value) => {
        setGender(value)
    }

    const handleSelectTags = (selectedOption) => {
        setTags(selectedOption)
    };

    const handleChangePagination = (_, data) => {
        setPage(data)
    }

    return (
        <div>
            <PageTitle>List</PageTitle>
            <div className={"flex flex-wrap justify-between items-center"}>
                <div className={"w-2/5 mb-4"}>
                    <RangeSlider
                        onGetAgeRange={handleGetAgeRange}
                    />
                </div>
                <div className={"w-2/5 mb-4"}>
                    <RadioGroup
                        options={GENDER_OPTIONS_FILTER}
                        selectedOption={gender}
                        onChange={handleGenderChange}
                        className={"flex w-100 justify-around"}
                    />
                </div>
                <div className={"w-2/5 mb-4"}>
                    <SelectComponent
                        values={tags}
                        options={TAGS_LIST}
                        placeholder={TAG_PLACEHOLDER}
                        onSelect={handleSelectTags}
                    />
                </div>
            </div>
            <div className={"flex justify-end"}>
                <Button variant="contained" type={"button"} onClick={handleSubmit}>
                    Submit
                </Button>
            </div>

            {
                users?.map((item) => {
                    return <p><span>{item?.firstName}</span> <span>{item?.age}</span></p>
                })
            }
            <div className={"flex justify-center"}>
                <Pagination count={totalPages} page={page} onChange={handleChangePagination}/>
            </div>

        </div>
    );
};

export default List;